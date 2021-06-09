import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Heading,
    HStack,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
// import { Container } from './styles';

import "./markdown.css";

const PostTemplate = ({ data }) => {
    const post = data.markdownRemark;
    // const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { previous, next } = data;

    return (
        <Layout slide={-1}>
            {post ? (
                <>
                    <SEO
                        title={"Jorge's Room - " + post.frontmatter.title}
                        description={post.excerpt}
                        lang="pt-BR"
                        image={`https://joujiroom.netlify.app${post.frontmatter.cover}`}
                        meta={[
                            {
                                name: "og:url",
                                content: post.slug,
                            },
                            {
                                name: "twitter:title",
                                content:
                                    "Jorge's Room - " + post.frontmatter.title,
                            },
                            {
                                name: "twitter:card",
                                content: "summary_large_image",
                            },
                        ]}
                    />

                    <Box
                        className="wrapper"
                        mt="80px"
                        mb="80px"
                        p={["0 10px", "0 30px", "0 100px"]}
                    >
                        {/* Breadcrumb e cabeçalho */}
                        <Flex flexDir="column" mb="35px">
                            <Flex h="50px" alignItems="center">
                                <Breadcrumb
                                    separator={
                                        <ChevronRightIcon color="gray.500" />
                                    }
                                    fontWeight="medium"
                                    fontSize="md"
                                >
                                    <BreadcrumbItem>
                                        <Link to="/#">Início</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to="/blog">Blog</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink>
                                            {post.frontmatter.title}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Flex>
                        </Flex>

                        <Flex
                            flexDir={["column"]}
                            justifyContent="center"
                            alignItems="center"
                            maxW="800px"
                            m="auto"
                        >
                            <Heading
                                fontSize="xl"
                                color={useColorModeValue("#12466e", "#4a97ef")}
                                mb="10px"
                            >
                                {post.frontmatter.title}
                            </Heading>
                            <Image
                                alt={
                                    "Capa do informativo " +
                                    post.frontmatter.title
                                }
                                src={post.frontmatter.cover}
                                borderRadius="md"
                                boxShadow="md"
                                mb="30px"
                                minH="350px"
                            />

                            <div
                                className="post-content-full"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />

                            <Text
                                textAlign="right"
                                fontSize="medium"
                                fontWeight="bolder"
                                mt="20px"
                                w="100%"
                            >
                                {post.frontmatter.date}
                            </Text>
                        </Flex>
                    </Box>

                    <HStack w="100%" justifyContent="space-around" p="30px">
                        {next !== null ? (
                            <Link to={next.fields.slug} rel="Anterior">
                                <Text textAlign="left" ml="10px">
                                    Próximo Post
                                </Text>
                                <Flex alignItems="center">
                                    <ChevronLeftIcon
                                        boxSize="30px"
                                        color={useColorModeValue(
                                            "#053a63",
                                            "#5c9fed"
                                        )}
                                    />
                                    {"  "}
                                    <Text
                                        as="span"
                                        height="30px"
                                        fontWeight="bolder"
                                        fontSize={["0.9rem", "1.1rem"]}
                                        display="flex"
                                        alignItems="center"
                                        color={useColorModeValue(
                                            "#053a63",
                                            "#5c9fed"
                                        )}
                                        paddingTop="2px"
                                        lineHeight="1"
                                    >
                                        {next.frontmatter.title}
                                    </Text>
                                </Flex>
                            </Link>
                        ) : (
                            <Box></Box>
                        )}

                        {previous !== null ? (
                            <Link to={previous.fields.slug} rel="Próximo">
                                <Text textAlign="right" mr="10px">
                                    Post Anterior
                                </Text>
                                <Flex alignItems="center">
                                    <Text
                                        as="span"
                                        height="30px"
                                        fontWeight="bolder"
                                        fontSize={["0.9rem", "1.1rem"]}
                                        display="flex"
                                        alignItems="center"
                                        color={useColorModeValue(
                                            "#053a63",
                                            "#5c9fed"
                                        )}
                                        paddingTop="2px"
                                        lineHeight="1"
                                    >
                                        {previous.frontmatter.title}
                                    </Text>
                                    {"  "}
                                    <ChevronRightIcon
                                        boxSize="30px"
                                        color={useColorModeValue(
                                            "#053a63",
                                            "#5c9fed"
                                        )}
                                    />
                                </Flex>
                            </Link>
                        ) : (
                            <Box></Box>
                        )}
                    </HStack>
                </>
            ) : null}
        </Layout>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query Post($id: String!, $previousPostId: String, $nextPostId: String) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt(format: PLAIN, pruneLength: 250)
            frontmatter {
                cover
                date(fromNow: true, locale: "pt-br")
                isBanner
                layout
                special
                title
            }
            fields {
                slug
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
