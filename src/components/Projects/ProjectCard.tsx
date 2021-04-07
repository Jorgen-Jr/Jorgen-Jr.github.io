import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Project } from "../../types";

import plans from "../../assets/image/icons/plans.png";
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
      href={project.link ? "./project/" + project.link : null}
      ariaLabel={"Visitar " + project.name}
      style={{
        textDecoration: "none",
      }}
    >
      <MotionStack
        borderRadius="md"
        w={["auto", "auto", "300px"]}
        m="20px"
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
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Image
            src={project.icon ? project.icon : plans}
            alt={project.name}
            boxSize="150px"
            minH="53px"
            height="auto"
          />
          <Box p="10px">
            <Flex flexGrow={1} justifyContent="space-between" flexDir="column">
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
