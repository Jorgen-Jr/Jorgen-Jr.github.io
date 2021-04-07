import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFound: React.FC = () => {
  return (
    <Layout slide={-1}>
      <SEO
        title={"Não Encontrado"}
        description={"Jorge.room - Página Não Encontrada"}
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
                <BreadcrumbLink to="/#">
                  <Link to="/#">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink to="#">Não Encontrado</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <Box minH="80vh">
            <h1>
              Ops! Essa página não existe, clique <Link to="/">aqui</Link> para
              voltar a página inicial.
            </h1>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default NotFound;
