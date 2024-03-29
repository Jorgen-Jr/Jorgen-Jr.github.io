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

// import Servicos from "../components/Projects";
// import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Projects from "../components/Projects";

type DataProps = {
    site: {
        buildTime: string;
    };
};

const HomePage: React.FC<PageProps<DataProps>> = () => {
    const [slide, setSlideIndex] = useState({ index: 0, name: "room" });

    function setSlide(index, name) {
        setSlideIndex({ index, name });
    }

    return (
        <Layout slide={slide}>
            <SEO
                title={"Bem Vindo"}
                lang="pt-BR"
                description="Jorgen-Jr - Visite o blog pessoal e porfólio."
            />

            <VisibilitySensor
                onChange={(isVisible: Boolean) => {
                    isVisible ? setSlide(0, "room") : null;
                }}
            >
                <Slide id="home">
                    <Home />
                </Slide>
            </VisibilitySensor>

            <VisibilitySensor
                minTopValue={300}
                partialVisibility={true}
                onChange={(isVisible: Boolean) => {
                    isVisible ? setSlide(2, "blog") : null;
                }}
            >
                <Slide id="posts">
                    <Posts />
                </Slide>
            </VisibilitySensor>

            <VisibilitySensor
                minTopValue={400}
                onChange={(isVisible: Boolean) => {
                    isVisible ? setSlide(1, "projetos") : null;
                }}
            >
                <Slide id="projetos">
                    <Projects />
                </Slide>
            </VisibilitySensor>

            <VisibilitySensor
                minTopValue={600}
                onChange={(isVisible: Boolean) => {
                    isVisible ? setSlide(3, "contato") : null;
                }}
            >
                <Slide id="contato">
                    <Contato />
                </Slide>
            </VisibilitySensor>

            <div style={{ display: "none" }}>
                <form name="contato" method="POST" data-netlify="true">
                    <Flex
                        flexDirection="column"
                        m={["auto", "auto", "auto", "unset"]}
                    >
                        <input type="hidden" name="form-name" value="contato" />

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
                                aria-label="Assunto"
                                name="assunto"
                                placeholder="Assunto..."
                                focusBorderColor="lime"
                                minH="150px"
                                mb={["5px", "10px"]}
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
                        <Flex
                            justifyContent="end"
                            mt={["5px", "0"]}
                            mr={["5px", "20px"]}
                        >
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
