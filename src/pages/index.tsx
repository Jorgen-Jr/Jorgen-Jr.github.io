import React, { useState } from "react";
import { PageProps, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slide from "../components/Slide";
import Home from "../components/Home";

import VisibilitySensor from "react-visibility-sensor";

import "./../styles/global.css";
import "./style.css";

import { Button, Flex, Input, Textarea } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Posts } from "../components/Posts";

import Servicos from "../components/Projects";
import Sobre from "../components/Sobre";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const HomePage: React.FC<PageProps<DataProps>> = () => {
  const [slide, setSlideIndex] = useState(0);

  return (
    <Layout slide={slide}>
      <SEO title={"Bem Vindo"} lang="pt-BR" />

      <VisibilitySensor
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(0) : null;
        }}
      >
        <Slide id="home">
          <Home />
        </Slide>
      </VisibilitySensor>

      <VisibilitySensor
        minTopValue={600}
        partialVisibility={true}
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(1) : null;
        }}
      >
        <Slide id="posts">
          <Posts />
        </Slide>
      </VisibilitySensor>

      <VisibilitySensor
        minTopValue={400}
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(1) : null;
        }}
      >
        <Slide id="projetos">
          <Servicos />
        </Slide>
      </VisibilitySensor>

      <VisibilitySensor
        minTopValue={400}
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(2) : null;
        }}
      >
        <Slide id="sobre">
          <Sobre />
        </Slide>
      </VisibilitySensor>

      {/* <VisibilitySensor
        minTopValue={400}
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(3) : null;
        }}
      >
        <Slide id="blog">
          <Convenios active={slide >= 3} />
        </Slide>
      </VisibilitySensor>

      <VisibilitySensor
        minTopValue={600}
        onChange={(isVisible: Boolean) => {
          isVisible ? setSlideIndex(4) : null;
        }}
      >
        <Slide id="contato">
          <Contato />
        </Slide>
      </VisibilitySensor> */}

      <div style={{ display: "none" }}>
        <form name="precadastro" method="POST" data-netlify="true">
          <Flex flexDirection="column" m={["auto", "auto", "auto", "unset"]}>
            <input type="hidden" name="form-name" value="precadastro" />

            <Input
              aria-label="Seu nome para contato."
              name="name"
              placeholder="Seu Nome*"
              minHeight="50px"
              mt="20px"
              mb={["5px", "10px"]}
              focusBorderColor="lime"
              w="auto"
            />
            <Flex
              flexDirection={["column", "row"]}
              mb={["5px", "10px"]}
              justifyContent="space-between"
            >
              <Input
                aria-label="Seu endereço de email."
                name="email"
                placeholder="Seu Email*"
                type="email"
                minHeight="50px"
                focusBorderColor="lime"
                w="auto"
              />

              <Input
                aria-label="Numero para Contato."
                name="numero-telefone"
                type="phone"
                placeholder="Numero para contato*"
                minHeight="50px"
                focusBorderColor="lime"
                w="auto"
              />
            </Flex>

            <Flex flexDirection="column" mb={["5px", "10px"]}>
              <Textarea
                aria-label="Mensagem Adcional"
                name="mensagem"
                placeholder="Mensagem Adcional..."
                focusBorderColor="lime"
                minH="150px"
                mb={["5px", "10px"]}
              />
            </Flex>
            <Flex justifyContent="end" mt={["5px", "0"]} mr={["5px", "20px"]}>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="blue"
                size="lg"
                border="none"
                type="submit"
              >
                Enviar
              </Button>
            </Flex>
          </Flex>
        </form>
      </div>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
