import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
} from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { PostCard } from "./PostCard";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { Post } from "../../types";

// import { Container } from './styles';

function Posts() {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            {
                site {
                    siteMetadata {
                        title
                    }
                }
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            layout: { eq: "post" }
                            active: { eq: true }
                        }
                    }
                    sort: { fields: frontmatter___date, order: ASC }
                ) {
                    nodes {
                        id
                        html
                        frontmatter {
                            cover
                            date(fromNow: true, locale: "pt-br")
                            isBanner
                            layout
                            special
                            title
                            category
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        `
    );

    const posts: Post[] = allMarkdownRemark.nodes.map((item) => {
        let post: Post = {
            post_date: item.frontmatter.date,
            slug: item.fields.slug,
            title: item.frontmatter.title,
            cover: item.frontmatter.cover,
            content: item.html,
            isBanner: item.frontmatter.isBanner,
            special: item.frontmatter.special,
            category: item.frontmatter.category,
        };
        return post;
    });

    return (
        <Layout slide={-1}>
            <SEO
                title={"Notícias"}
                description={"Jorge - Feed de noticias e comunicados."}
                lang="pt-BR"
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
                            separator={<ChevronRightIcon color="gray.500" />}
                            fontWeight="medium"
                            fontSize="md"
                        >
                            <BreadcrumbItem>
                                <Link to="/#">Início</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>Posts</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Flex>

                <Flex
                    justifyContent="center"
                    alignSelf="center"
                    flexDir="column"
                >
                    {posts.map((aviso, index) => (
                        <PostCard
                            fullWidth={index === 0}
                            key={"aviso" + index}
                            post={aviso}
                        />
                    ))}
                </Flex>
            </Box>
        </Layout>
    );
}

export default Posts;
