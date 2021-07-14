import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFound: React.FC = () => {
    return (
        <Layout slide={-1}>
            <SEO
                title={"Sucesso!"}
                description={"Jorge.room - Sucesso de formulário"}
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
                                <Link to="https://jorgen-jr.github.io/#">
                                    Início
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="#">
                                    Resultado
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>

                    <Box minH="80vh">
                        <Heading color={useColorModeValue("#333", "#3874b7")}>
                            Muito obrigado pelo seu contato!
                        </Heading>
                        <Text fontSize="medium">
                            Sua mensagem foi registrada com sucesso Clique{" "}
                            <Link
                                to="https://jorgen-jr.github.io/"
                                style={{
                                    color: "#3874b7",
                                    textDecoration: "none",
                                }}
                            >
                                aqui
                            </Link>{" "}
                            para voltar a página inicial.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Layout>
    );
};

export default NotFound;
