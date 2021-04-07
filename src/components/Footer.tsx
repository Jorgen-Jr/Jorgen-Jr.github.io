import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";

const MotionText = motion.custom(Text);

const FooterMenu = ({ children, title, ...props }) => {
  return (
    <Box {...props}>
      <Heading as="h1" mb="12px" fontFamily="Roboto" size="lg">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" background="#053a63" fontFamily="Roboto, sans, serif">
      <Flex
        justifyContent="space-evenly"
        p="15px"
        flexDirection={["column", "row"]}
        alignItems={["center", "unset"]}
      >
        <Flex alignItems="center">
          <Text fontFamily="FiraCode" color="#EEE" fontSize="xl">
            Jorge.room{" "}
            <MotionText
              as="span"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [1, 0],
                type: "Spring",
              }}
              transition={{
                repeat: Infinity,
              }}
            >
              |{" "}
            </MotionText>
          </Text>
        </Flex>

        <Flex>
          <FooterMenu title="Mapa do Site" color="#CCC" p="20px">
            <List fontWeight="bold" color="#888">
              <ListItem pt="5px" pb="5px">
                <Link
                  href="#"
                  alt="Ir para o início da página."
                  color="white"
                  _hover={{
                    color: "#CCC",
                    textDecoration: "none",
                  }}
                >
                  Inicio
                </Link>
              </ListItem>
              <ListItem pt="5px" pb="5px">
                <Link
                  href="#"
                  alt="Ir para a seção de projetos."
                  color="white"
                  _hover={{
                    color: "#CCC",
                    textDecoration: "none",
                  }}
                >
                  Projetos
                </Link>
              </ListItem>
              <ListItem pt="5px" pb="5px">
                <Link
                  href="#"
                  alt="Ir para a seção Sobre."
                  color="white"
                  _hover={{
                    color: "#CCC",
                    textDecoration: "none",
                  }}
                >
                  Sobre
                </Link>
              </ListItem>
            </List>
          </FooterMenu>
        </Flex>
      </Flex>

      <Flex
        background="#092a44"
        color="#CCC"
        fontWeight="bolder"
        justifyContent={["center", "space-around"]}
        alignItems={["center"]}
        padding={["10px", "0"]}
        height={["auto", "60px"]}
        textTransform="uppercase"
        flexDirection={["column", "row"]}
      >
        <Flex alignItems="center" p={["10px", "0"]}>
          <Text>
            <a
              href="https://github.com/Jorgen-Jr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github-link">
                <span style={{ width: "15px" }}> </span>{" "}
                <span>
                  Made with{" "}
                  <span role="img" aria-label="heart emoji" color="red">
                    ❤️
                  </span>{" "}
                  by Jorge © {new Date().getFullYear()}
                </span>
              </div>
            </a>
          </Text>
        </Flex>

        <Flex alignItems="center" p={["10px", "0"]}>
          <Flex alignItems="center">
            <Text> </Text>
            {/* <Image
              ml="8px"
              mr="8px"
              src={footer_logo}
              alt="Empresa Criadora"
              size="40px"
              objectFit="contain"
            ></Image> */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
