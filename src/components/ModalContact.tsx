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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

import contact_icon from "../assets/image/icons/contact.webp";

interface ModalContactProps {
    isOpen: any;
    onClose: any;
    produto?: any;
}

const ModalContact = ({ isOpen, onClose, produto }: ModalContactProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        numero_telefone: "",
        mensagem: "Vamos entrar em contato... ",
        produto_desejado: produto ? produto : null,
    });

    const handleSubmit = () => {
        console.log("ok...");
        fetch("https://jorgenjr.netlify.app/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": "contato",
                "data-envio": new Date().toLocaleString(),
                ...formData,
            }).toString(),
        })
            .then(() => console.log("Requisição Enviada com Sucesso!"))
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInRight"
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />

                    <ModalBody mb="30px">
                        <Flex justifyContent="center" flexDirection="column">
                            <Flex justifyContent="center">
                                <Image
                                    alt="Ícone de contato"
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
                                        <Text as="span">Entrar em</Text>
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
                                    <Text>Entre em contato</Text>
                                </Box>
                            </Flex>

                            <form
                                name="contato"
                                method="POST"
                                action="https://jorgenjr.netlify.app/sucesso/"
                                onSubmit={handleSubmit}
                                data-netlify="true"
                            >
                                <Flex
                                    flexDirection="column"
                                    m={["auto", "auto", "auto", "unset"]}
                                >
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="contato"
                                    />

                                    <Input
                                        aria-label="Seu name para contato."
                                        name="name"
                                        placeholder="Seu Nome*"
                                        minHeight="50px"
                                        mt="20px"
                                        mb={["5px", "10px"]}
                                        focusBorderColor="lime"
                                        value={formData.name}
                                        onChange={(evt) => {
                                            setFormData({
                                                ...formData,
                                                name: evt.target.value,
                                            });
                                        }}
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
                                            value={formData.email}
                                            onChange={(evt) => {
                                                setFormData({
                                                    ...formData,
                                                    email: evt.target.value,
                                                });
                                            }}
                                            w="auto"
                                        />
                                    </Flex>

                                    <Flex
                                        flexDirection="column"
                                        mb={["5px", "10px"]}
                                    >
                                        <Textarea
                                            aria-label="Mensagem Adcional"
                                            name="mensagem"
                                            placeholder="Mensagem Adcional..."
                                            focusBorderColor="lime"
                                            minH="150px"
                                            mb={["5px", "10px"]}
                                            value={formData.mensagem}
                                            onChange={(evt) => {
                                                setFormData({
                                                    ...formData,
                                                    mensagem: evt.target.value,
                                                });
                                            }}
                                        />
                                    </Flex>
                                    <ModalFooter>
                                        <Button mr={3} onClick={onClose}>
                                            Fechar
                                        </Button>
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
                                    </ModalFooter>
                                </Flex>
                            </form>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalContact;
