import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

interface SobreProps {}

import bookmark_icon from "./../assets/image/icons/bookmark.svg";

export const Sobre: React.FC<SobreProps> = ({}) => {
    return (
        <Flex
            minH="60vh"
            alignItems={["center"]}
            flexDirection={["column"]}
            background={useColorModeValue("#F8F9FA", "#0b3768")}
            p="25px 0"
        >
            {/* Cabeçalho */}
            <Box mb="150px">
                <Flex justifyContent="center">
                    <Image
                        alt="Ícone da seção Sobre."
                        boxSize="42px"
                        objectFit="contain"
                        src={bookmark_icon}
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
                            <Text as="span">
                                {/* Sobre{" "} */}
                                <Text as="span" fontWeight="bold">
                                    Sobre
                                </Text>
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
                        <Text>This is me right now...</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Sobre;
