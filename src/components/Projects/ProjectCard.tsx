import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
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

import { Project } from "../../types";

import { motion } from "framer-motion";

const MotionStack = motion.custom(Stack);

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project: project,
}) => {
    return (
        <Link
            to={project.slug || null}
            style={{
                textDecoration: "none",
                margin: "15px",
            }}
        >
            <MotionStack
                borderRadius="md"
                w={["auto", "auto", "300px"]}
                h="100%"
                overflow="hidden"
                position="relative"
                textAlign="center"
                cursor="pointer"
                shadow="md"
                background={useColorModeValue("white", "#102435")}
                whileHover={{
                    scale: 1.5,
                    zIndex: 1,
                    transition: { duration: 0.4, type: "spring", bounce: 0.5 },
                }}
            >
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    margin="auto"
                >
                    {project.icon ? (
                        <Image
                            src={project.icon}
                            alt={project.name}
                            boxSize="150px"
                            minH="53px"
                            maxH="150px"
                            height="auto"
                            width="auto"
                            p="5px"
                        />
                    ) : (
                        <Flex
                            flexGrow={1}
                            minH="80px"
                            justifyContent="center"
                            alignContent="center"
                            flexDir="column"
                        >
                            <Heading
                                fontFamily="FiraCode"
                                fontWeight="bolder"
                                fontSize="24px"
                            >
                                {project.name}
                            </Heading>
                        </Flex>
                    )}
                    <Box p="10px">
                        <Flex
                            flexGrow={1}
                            justifyContent="space-between"
                            flexDir="column"
                        >
                            <Text mt="10px" p="10px" pb="25px" zIndex={0}>
                                {project.short_description}
                            </Text>
                            <Flex justifyContent="center" alignItems="center">
                                Clique Para Saber Mais
                                <Box>
                                    <ChevronRightIcon boxSize="32px" />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </MotionStack>
        </Link>
    );
};
