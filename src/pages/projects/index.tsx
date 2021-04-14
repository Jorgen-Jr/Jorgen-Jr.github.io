import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import Projects from "../../components/Projects";
import { Project } from "../../types";

function ProjectsFeed() {
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
                            layout: { eq: "project" }
                            active: { eq: true }
                        }
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
        `
    );

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
        <Layout slide={4}>
            <SEO
                title={"Projetos - Jorge.room"}
                description={"Jorge - Conheça os projetos."}
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
                                <Link to="/#">Projetos</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Flex>
                <Projects projects={projects} />
            </Box>
        </Layout>
    );
}

export default ProjectsFeed;
