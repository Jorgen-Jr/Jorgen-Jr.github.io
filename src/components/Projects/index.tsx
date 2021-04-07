import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types";
import { SunIcon } from "@chakra-ui/icons";
import { graphql, useStaticQuery } from "gatsby";

interface ServicosProps {
  projects?: Project[];
}

export const ProjectsFeed: React.FC<ServicosProps> = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { layout: { eq: "project" }, active: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        nodes {
          id
          html
          frontmatter {
            layout
            description
            short_description
            icon
            link
            name
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const projects: Project[] = allMarkdownRemark.nodes.map((item) => {
    let project: Project = {
      icon: item.frontmatter.icon,
      name: item.frontmatter.name,
      description: item.frontmatter.description,
      short_description: item.frontmatter.short_description,
      link: item.frontmatter.link,
    };
    return project;
  });

  return (
    <Flex minH="60vh" alignItems={["center"]} flexDirection={["column"]}>
      <Flex justifyContent="center">
        <SunIcon boxSize="42px" color="#666" />
      </Flex>

      <Flex
        justifyContent="center"
        textTransform="uppercase"
        m="15px"
        textAlign="center"
      >
        <Box>
          <Heading fontWeight="light" size="lg">
            <Text as="span">Conheça os</Text>
            <Text as="span" fontWeight="bold">
              {" "}
              Projetos
            </Text>
          </Heading>
        </Box>
      </Flex>

      <Flex justifyContent="center">
        <Box
          maxW="450px"
          textAlign="center"
          colo
          color={useColorModeValue("#666", "#CCC")}
          m={["15px", "0"]}
        >
          <Text>Conheça meus projetos, que participei e desenvolvi</Text>
        </Box>
      </Flex>

      <Flex
        mt="30px"
        justifyContent="center"
        alignSelf="center"
        flexWrap="wrap"
        transition="0.2s"
        maxW={["100%", "1450px"]}
      >
        {projects.map((project, index) => (
          <ProjectCard key={"servico" + index} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectsFeed;
