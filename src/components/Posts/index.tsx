import { background, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Post } from "../../types";
import { PostCard } from "./PostCard";

interface PostProps {
    posts?: Post[];
}

export const Posts: React.FC<PostProps> = () => {
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
                    sort: { fields: frontmatter___date, order: DESC }
                    limit: 5
                ) {
                    nodes {
                        id
                        html
                        excerpt(pruneLength: 250)
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
            content: item.excerpt,
            isBanner: item.frontmatter.isBanner,
            special: item.frontmatter.special,
            category: item.frontmatter.category,
        };
        return post;
    });

    return (
        <Flex
            position="relative"
            justifyContent="center"
            flexDirection="column"
            pt="25px"
            pb="25px"
            // backgroundColor="#0093E9"
            // backgroundImage="linear-gradient(27deg, #0093E900 0%, #80D0C7 100%)"
            borderRadius="15px"
        >
            <Box
                // transform="rotate(-3deg)"
                position="absolute"
                backgroundColor={useColorModeValue("#00DBDE", "#083D77")}
                backgroundImage={useColorModeValue(
                    "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
                    "#0093E9"
                )}
                h={["95%", "80%"]}
                w="200%"
                left={[-150, -100]}
                bottom={0}
                zIndex={-1}
                opacity={0.8}
                shadow="xl"
            ></Box>
            <Flex
                mt="-90px"
                justifyContent="center"
                alignSelf="center"
                flexWrap="wrap"
                transition="0.2s"
                maxW={["100%", "1450px"]}
            >
                {posts.map((post, index) => (
                    <PostCard key={"aviso" + index} post={post} />
                ))}
            </Flex>
            <Flex alignSelf="flex-end">
                <Link to="/blog">
                    <Flex
                        padding="15px 40px"
                        m="0 40px"
                        borderRadius="30px"
                        background="#3F84E5"
                        fontWeight="bolder"
                        _hover={{
                            background: "#B7D1F5",
                            color: "#394648",
                        }}
                        style={{
                            transition: "0.3s",
                        }}
                    >
                        Ver Todos
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    );
};
