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
    <Stack
      borderRadius="5px"
      w={
        post.special
          ? ["100%", "100%", "100%", "1100px"]
          : ["100%", "100%", "400px"]
      }
      m="20px"
      overflow="hidden"
      background={
        post.special ? "unset" : useColorModeValue("white", "#102435")
      }
      position="relative"
    >
      <Image
        src={post.cover}
        alt={post.title}
        minW="400px"
        minH="300px"
        loading={post.isBanner ? "eager" : "lazy"}
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

        <Flex flexGrow={1} justifyContent="space-between" flexDir="column">
          <Text
            mt="10px"
            p="10px"
            pb="25px"
            zIndex={0}
            color={useColorModeValue("#666", "#CCC")}
          >
            <div
              className="aviso-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />{" "}
            <Link
              to={post.slug}
              style={{ color: useColorModeValue("darkblue", "lightblue") }}
            >
              ler mais
            </Link>
          </Text>
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
  );
};
