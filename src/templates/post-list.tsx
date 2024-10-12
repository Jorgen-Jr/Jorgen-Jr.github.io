import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    Flex,
    HStack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import { PostCard } from "../pages/posts/PostCard";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Post } from "../types";

function PostListTemplate(props) {
    const { data } = props;

    const { currentPage, numPages } = props.pageContext;

    const posts = data.allMarkdownRemark.edges;

    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
        currentPage - 1 === 1
            ? "/blog/"
            : "/blog/" + (currentPage - 1).toString();
    const nextPage = "/blog/" + (currentPage + 1).toString();

    const post_list: Post[] = posts.map((item) => {
        let post: Post = {
            post_date: item.node.frontmatter.date,
            slug: item.node.fields.slug,
            title: item.node.frontmatter.title,
            cover: item.node.frontmatter.cover,
            content: item.node.excerpt,
            isBanner: item.node.frontmatter.isBanner,
            special: item.node.frontmatter.special,
            category: item.node.frontmatter.category,
        };
        return post;
    });

    return (
        <Layout slide={{ index: -1, name: "blog" }}>
            <SEO
                title={"Blog"}
                description={
                    "Jorge's Room - Blog posts e comunicados. Veja o conteudo postado."
                }
                lang="pt-BR"
            />

            <Box
                className="wrapper"
                mt="80px"
                mb="80px"
                p={["0 10px", "0", "0", "0", "0 100px"]}
            >
                {/* Breadcrumb e cabeçalho */}
                <Flex flexDir="column" mb="35px" ml="15px">
                    <Flex h="50px" alignItems="center">
                        <Breadcrumb
                            separator={<ChevronRightIcon color="gray.500" />}
                            fontWeight="medium"
                            fontSize="md"
                        >
                            <BreadcrumbItem>
                                <Link to="/#">Início</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <Link to="/blog">Blog</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Flex>

                <Flex
                    p={["0", "0", "0", "0", "0", "0 100px"]}
                    justifyContent="space-between"
                    alignSelf="center"
                    flexWrap="wrap"
                >
                    {post_list.map((aviso, index) => (
                        <PostCard
                            key={"aviso" + index}
                            post={aviso}
                            fullWidth={index === 0}
                        />
                    ))}
                </Flex>
            </Box>

            {/* Navegar entre próximo post e anterior */}
            <HStack w="100%" justifyContent="space-evenly" p="30px">
                {!isFirst ? (
                    <Link to={prevPage} rel="Anterior">
                        <Flex alignItems="center">
                            <ChevronLeftIcon
                                boxSize="30px"
                                color={useColorModeValue("#053a63", "#e1e1e1")}
                            />
                            {"  "}
                            <Text
                                as="span"
                                height="30px"
                                fontWeight="bolder"
                                fontSize="1.1rem"
                                display="flex"
                                alignItems="center"
                                color={useColorModeValue("#053a63", "#e1e1e1")}
                                paddingTop="2px"
                            >
                                Página Anterior
                            </Text>
                        </Flex>
                    </Link>
                ) : (
                    <Box></Box>
                )}

                {!isLast ? (
                    <Link to={nextPage} rel="Próximo">
                        <Flex alignItems="center">
                            <Text
                                as="span"
                                height="30px"
                                fontWeight="bolder"
                                fontSize="1.1rem"
                                display="flex"
                                alignItems="center"
                                color={useColorModeValue("#053a63", "#e1e1e1")}
                                paddingTop="2px"
                            >
                                Próxima Página
                            </Text>
                            {"  "}
                            <ChevronRightIcon
                                boxSize="30px"
                                color={useColorModeValue("#053a63", "#e1e1e1")}
                            />
                        </Flex>
                    </Link>
                ) : (
                    <Box></Box>
                )}
            </HStack>
        </Layout>
    );
}

export default PostListTemplate;

export const pageQuery = graphql`
    query PostFeed($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            limit: $limit
            skip: $skip
            filter: { frontmatter: { layout: { eq: "post" } } }
        ) {
            edges {
                node {
                    excerpt(format: HTML, pruneLength: 200)
                    fields {
                        slug
                    }
                    frontmatter {
                        cover
                        date(formatString: "DD/MM/YYYY HH:mm")
                        isBanner
                        layout
                        special
                        title
                        category
                    }
                }
            }
        }
    }
`;
