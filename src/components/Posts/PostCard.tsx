import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { Post } from "../../types";

interface PostCardProps {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post: post }) => {
    return (
        <Link to={post.slug}>
            <Stack
                borderRadius="5px"
                w={
                    post.special
                        ? ["unset", "unset", "unset", "1100px"]
                        : ["unset", "unset", "400px"]
                }
                m="20px"
                overflow="hidden"
                background={
                    post.special && post.banner
                        ? "unset"
                        : useColorModeValue("white", "#102435")
                }
                position="relative"
            >
                <Image
                    src={post.cover}
                    alt={post.title}
                    minW={["100%", "100%", "400px"]}
                    minH={["100%", "100%", "300px"]}
                    //loading={post.isBanner ? "eager" : "lazy"}
                    style={{ margin: 0 }}
                />
                <Box
                    p="10px"
                    {...(post.isBanner
                        ? {
                              display: "none",
                          }
                        : null)}
                    color={useColorModeValue("#666", "#CCC")}
                >
                    <Heading fontSize="20px">{post.title}</Heading>

                    <Flex
                        flexGrow={1}
                        justifyContent="space-between"
                        flexDir="column"
                    >
                        <Box
                            mt="10px"
                            p="10px"
                            pb="25px"
                            zIndex={0}
                            color={useColorModeValue("#666", "#CCC")}
                        >
                            <div
                                className="aviso-content"
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />{" "}
                            <Text
                                style={{
                                    color: useColorModeValue(
                                        "darkblue",
                                        "lightblue",
                                    ),
                                }}
                            >
                                ler mais
                            </Text>
                        </Box>
                    </Flex>

                    <Text
                        fontSize="13px"
                        position="absolute"
                        right={0}
                        bottom={0}
                        p="15px"
                        fontWeight="bolder"
                    >
                        {post.post_date}
                    </Text>
                </Box>
            </Stack>
        </Link>
    );
};
