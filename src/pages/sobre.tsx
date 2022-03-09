import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Sobre from "../components/Sobre";

function PlanoDeSaude() {
    return (
        <Layout slide={{ index: 2, name: "sobre" }}>
            <SEO
                title={"Sobre"}
                description={"Jorge - Conheça um pouco mais sobre."}
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
                                <BreadcrumbLink>Sobre</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Flex>
            </Box>
            <Sobre />
        </Layout>
    );
}

export default PlanoDeSaude;
