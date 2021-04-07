import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

import contact_icon from "./../assets/image/icons/contact.webp";
import whatsappicon from "./../assets/image/icons/whatsapp.webp";

const Contato = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numero_telefone: "",
    assunto: "",
    conteudo: "",
  });

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contato",
        "data-envio": new Date().toLocaleString(),
        ...formData,
      }).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => console.error(error));
  };

  return (
    <Flex justifyContent="center" flexDirection="column">
      <Flex justifyContent="center">
        <Image
          alt="Ícone de Contato"
          boxSize="42px"
          objectFit="contain"
          src={contact_icon}
        />
      </Flex>

      <Flex
        justifyContent="center"
        textTransform="uppercase"
        m="15px"
        textAlign="center"
      >
        <Box>
          <Heading fontWeight="light" size="lg">
            <Text as="span">Entre em</Text>
            <Text as="span" fontWeight="bold">
              {" "}
              Contato
            </Text>
          </Heading>
        </Box>
      </Flex>

      <Flex justifyContent="center">
        <Box
          maxW="450px"
          textAlign="center"
          color={useColorModeValue("#666", "#CCC")}
          m={["15px", "0"]}
        >
          <Text>
            Entre em contato conosco através de nossos telefones oficiais, ou
            nos envie uma mensagem preenchendo nosso formulário ou via WhatsApp.
          </Text>
        </Box>
      </Flex>

      <Flex
        justifyContent="space-evenly"
        mt="100px"
        flexDirection={["column", "column", "column", "row"]}
        m={["15px", "15px", "15px", "0"]}
      >
        <Flex
          flexDirection="column"
          textAlign={["left", "left", "center", "left"]}
        >
          <Box>
            <Text fontWeight="bold" mt="25px" fontSize="18px" color="#444">
              Telefone:
            </Text>
            <Text mt="10px" mb="10px" color="#555" fontSize="16px">
              <a
                aria-label="Enviar mensagem via Whatsapp"
                href="https://api.whatsapp.com/send?phone=++55279&text=Olá estou interessado(a) em seu produto/serviço..."
                target="_BLANK"
                style={{ textDecoration: "none" }}
              >
                <Flex justifyContent={["unset", "unset", "center", "unset"]}>
                  (XX) X XXXX-XXXX
                  <Image
                    alt="Ícone do Whatsapp"
                    src={whatsappicon}
                    boxSize="16px"
                    ml="5px"
                  />
                </Flex>
              </a>
              (XX) XXXX-XXXX
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mt="25px" fontSize="18px" color="#444">
              Endereço:
            </Text>
            <Text mt="10px" mb="10px" color="#555" fontSize="16px">
              Rua dos pinhais XXXX, <br></br>Edifício Corporate Pilotis X Sala
              XXX, <br></br>XXXXXX XXXX, XXXXXX
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mt="25px" fontSize="18px" color="#444">
              Email:
            </Text>
            <Text mt="10px" mb="10px" color="#555" fontSize="16px">
              XXXXX@xxxxxxxxx.com.br
            </Text>
          </Box>
        </Flex>

        <form
          name="contato"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contato" />
          <Flex
            flexDirection="column"
            maxW="800px"
            m={["auto", "auto", "auto", "unset"]}
          >
            <Input
              aria-label="Seu name para contato."
              name="name"
              placeholder="Seu Nome*"
              m={["5px", "20px"]}
              minHeight="50px"
              focusBorderColor="lime"
              borderColor="lightgray"
              flex={1}
              value={formData.name}
              onChange={(evt) => {
                setFormData({ ...formData, name: evt.target.value });
              }}
              w="auto"
            />
            <Flex flexDirection={["column", "row"]}>
              <Input
                aria-label="Seu endereço de email."
                name="email"
                placeholder="Seu Email*"
                type="email"
                m={["5px", "20px"]}
                minHeight="50px"
                focusBorderColor="lime"
                borderColor="lightgray"
                flex={1}
                value={formData.email}
                onChange={(evt) => {
                  setFormData({ ...formData, email: evt.target.value });
                }}
                w="auto"
              />

              <Input
                aria-label="Numero para Contato."
                name="numero-telefone"
                type="phone"
                placeholder="Numero para contato*"
                m={["5px", "20px"]}
                minHeight="50px"
                focusBorderColor="lime"
                borderColor="lightgray"
                flex={1}
                value={formData.numero_telefone}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    numero_telefone: evt.target.value,
                  });
                }}
                w="auto"
              />
            </Flex>

            <Flex flexDirection="column">
              <Input
                aria-label="Assunto do email"
                name="assunto"
                placeholder="Assunto..."
                m={["5px", "20px"]}
                height="50px"
                focusBorderColor="lime"
                borderColor="lightgray"
                value={formData.assunto}
                onChange={(evt) => {
                  setFormData({ ...formData, assunto: evt.target.value });
                }}
                w="auto"
              />
              <Textarea
                aria-label="Conteúdo do email"
                name="conteudo"
                placeholder="Conteudo..."
                m={["5px", "20px"]}
                focusBorderColor="lime"
                borderColor="lightgray"
                w="auto"
                minH="150px"
                value={formData.conteudo}
                onChange={(evt) => {
                  setFormData({ ...formData, conteudo: evt.target.value });
                }}
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
                Enviar Mensagem
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Contato;
