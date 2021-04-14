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
    fullWidth: Boolean;
}

export const PostCard: React.FC<PostCardProps> = ({
    post: post,
    fullWidth,
}) => {
    const special = post?.special;

    return (
        <>
            {post ? (
                <Stack
                    borderRadius="5px"
                    w={
                        special
                            ? "100%"
                            : fullWidth
                            ? "100%"
                            : ["100%", "100%", "100%", "30%"]
                    }
                    m="20px"
                    overflow="hidden"
                    background={
                        special
                            ? "unset"
                            : useColorModeValue("white", "#102435")
                    }
                    position="relative"
                    direction={
                        fullWidth
                            ? ["column", "column", "column", "row"]
                            : "column"
                    }
                    justifyContent={special ? "center" : "auto"}
                    shadow={special ? "none" : "xl"}
                >
                    <Link to={post.slug}>
                        <Image
                            src={post.cover}
                            alt={post.title}
                            loading={post.isBanner ? "eager" : "lazy"}
                            style={{ margin: 0, width: "100%" }}
                            borderRadius={special ? "7px" : "unset"}
                            shadow={special ? "md" : "none"}
                        />
                        <Box
                            {...(post.isBanner
                                ? {
                                      display: "none",
                                  }
                                : null)}
                            p="0 20px"
                        >
                            <Text
                                as="span"
                                fontSize="12px"
                                color={useColorModeValue("#666", "#CCC")}
                                fontWeight="bolder"
                            >
                                {`${post.category.toUpperCase()}`}
                            </Text>
                            {" • "}
                            <Text
                                as="span"
                                fontSize="12px"
                                color={useColorModeValue("#666", "#CCC")}
                            >
                                {`${post.post_date}`}
                            </Text>
                            <Heading fontSize="25px">{post.title}</Heading>
                            <Flex
                                flexGrow={1}
                                justifyContent="space-between"
                                flexDir="row"
                            >
                                <Box
                                    mt="10px"
                                    pb="25px"
                                    color={useColorModeValue("#666", "#CCC")}
                                    zIndex={0}
                                >
                                    <div
                                        className="aviso-content-list"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content,
                                        }}
                                    />{" "}
                                    <Text
                                        style={{
                                            color: useColorModeValue(
                                                "darkblue",
                                                "lightblue"
                                            ),
                                        }}
                                    >
                                        ler mais
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                </Stack>
            ) : null}
        </>
    );
};

export default PostCard;
