import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Contato from "../components/Contato";
import { Link } from "gatsby";

function PlanoDeSaude() {
  return (
    <Layout slide={4}>
      <SEO
        title={"Contato"}
        description={"Jorge.room - Entre em contato"}
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
                <BreadcrumbLink>
                  <Link to="/#">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contato</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Flex>
        <Contato />
      </Box>
    </Layout>
  );
}

export default PlanoDeSaude;
