import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import Table from "../components/Table";

import "./markdown.css";

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark;

  const theme = {
    colors: {
      primary: project.frontmatter.theme_color_primary || "#db98b5",
      secondary: project.frontmatter.theme_color_secondary || "#36557b",
      fontColor: project.frontmatter.theme_color_fontcolor || "#053a63",
    },
  };

  return (
    <Layout slide={-1}>
      <SEO
        title={project.frontmatter.name}
        description={"Jorge's Room - " + project.frontmatter.short_description}
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
                <BreadcrumbLink>
                  <Link to="/#">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/#projetos">Projetos</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  {project.frontmatter.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <Flex
            flexDir="column"
            position="relative"
            w="100%"
            height="auto"
            justifyContent="center"
            alignItems="center"
            p="30px"
            color="#EEE"
          >
            <Box
              backgroundColor="#000"
              backgroundImage="linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )"
              position="absolute"
              h="100%"
              w="200%"
              left={-100}
              bottom={0}
              zIndex={-1}
              opacity={0.9}
              overflow="hidden"
            >
              {project.frontmatter.cover ? (
                <>
                  <Box
                    position="absolute"
                    background="linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )"
                    w="100%"
                    h="100%"
                    top={0}
                    left={0}
                  ></Box>
                  <Image
                    src={project.frontmatter.cover}
                    alt={"Capa do project " + project.frontmatter.name}
                    objectFit="cover"
                    boxSize="100%"
                  />
                </>
              ) : (
                <Box
                  boxSize="100%"
                  bgColor={project.frontmatter.theme_color_primary}
                >
                  {" "}
                </Box>
              )}
            </Box>
            <Flex justifyContent="center">
              <Image
                alt={project.frontmatter.name}
                src={
                  project.frontmatter.icon ? project.frontmatter.icon : projects
                }
                maxH="90px"
                objectFit="contain"
              />
            </Flex>

            <Flex justifyContent="center" mt="15px">
              <Box maxW="450px" textAlign="center" color="#CCC">
                <Text></Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir={["column"]}>
          <section title="Tabela ">
            <Flex justifyContent="center">
              <Image
                alt={"Illustração do project " + project.frontmatter.name}
                src={project.frontmatter.illustration}
                maxH="500px"
              />
            </Flex>

            <Flex
              justifyContent="center"
              wrap="wrap"
              alignItems="baseline"
            ></Flex>
          </section>

          {/* Dados Adcionais */}

          <Flex
            m="10px 0"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            pos="relative"
          >
            {/* Background */}
            <Flex
              pos="absolute"
              w="200%"
              bgColor={theme.colors.secondary}
              h={"110%"}
              mt="110px"
              ml="-50%"
              zIndex={-1}
              transform="rotate(2deg)"
            ></Flex>

            <Box
              color={theme.colors.fontColor}
              p="20px"
              bgColor={theme.colors.secondary}
              borderRadius="lg"
              maxWidth="1000px"
              className="plano_body"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query Servico($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
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
        cover
        illustration
        theme_color_primary
        theme_color_secondary
        theme_color_fontcolor
      }
      fields {
        slug
      }
    }
  }
`;
