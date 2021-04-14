import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";

import React from "react";

import ModalContact from "./ModalContact";

import { motion } from "framer-motion";

const MotionFlex = motion.custom(Flex);
const MotionButton = motion.custom(Button);

import aux_image from "./../assets/image/about/home_aux.jpg";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            minH="20vh"
            alignItems={["center"]}
            justifyContent="space-evenly"
            mt="50px"
            mb="50px"
        >
            <Box
                position="absolute"
                width="100%"
                height="750px"
                zIndex={-1}
                // backgroundColor="#8EC5FC"
                // backgroundImage="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
            >
                {/* <Image src={banner} objectFit="contain" boxSize="100%" opacity={0.3} /> */}
            </Box>

            <Flex flexDir="column">
                <Flex
                    flexDir={[
                        "column-reverse",
                        "column-reverse",
                        "column-reverse",
                        "column-reverse",
                        "row",
                    ]}
                >
                    <Flex
                        alignItems={["center"]}
                        justifyContent="space-evenly"
                        flexDir={["column"]}
                        fontFamily="Rubik"
                    >
                        <Flex
                            alignSelf={[
                                "center",
                                "center",
                                "center",
                                "baseline",
                            ]}
                            flexDir={["column", "column", "row"]}
                        >
                            <MotionFlex
                                aria-label="A HEALTHY oferece as melhores opções em planos de saúde com valores que cabem no seu bolso"
                                pt="80px"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    ease: "anticipate",
                                    duration: 1.5,
                                }}
                                maxW="1000px"
                                justifyContent={[
                                    "center",
                                    "center",
                                    "space-evenly",
                                ]}
                                alignItems="center"
                                flexDir={["column", "column", "row"]}
                            >
                                <Flex
                                    flexDir="column"
                                    maxW="400px"
                                    lineHeight="2rem"
                                    alignItems="center"
                                    letterSpacing="-2px"
                                    m="0 10px"
                                >
                                    <Box
                                        fontSize={["30px", "35px"]}
                                        textAlign={["center", "center", "left"]}
                                        fontWeight="800"
                                        color={useColorModeValue(
                                            "#4A6D7C",
                                            "#EF6351"
                                        )}
                                    >
                                        Bem vindo a Jorge.room
                                    </Box>

                                    <Text
                                        fontSize={["30px", "35px"]}
                                        textAlign={["center", "center", "left"]}
                                        color={useColorModeValue(
                                            "#475657",
                                            "#26FFE6"
                                        )}
                                        fontWeight="light"
                                    >
                                        Dolores culpa quis soluta sit ipsa. Ut
                                        inventore amet id perferendis excepturi.
                                    </Text>

                                    <Flex mt="30px">
                                        <MotionButton
                                            onClick={onOpen}
                                            borderRadius="10px"
                                            backgroundColor="#3ABEFF"
                                            whileHover={{
                                                scale: 1.3,
                                                borderRadius: 30,
                                                backgroundColor: "#26FFE6",
                                                color: "#1c3c63",
                                                transition: {
                                                    duration: 0.2,
                                                    type: "spring",
                                                    bounce: 0.5,
                                                },
                                            }}
                                        >
                                            Me envie uma mensagem :)
                                        </MotionButton>
                                    </Flex>
                                </Flex>

                                <MotionFlex
                                    flexDir="column"
                                    color="#1c3c63"
                                    m="0 10px"
                                    mt={["30px", "30px", "30px", 0]}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.4,
                                            type: "spring",
                                            bounce: 0.5,
                                        },
                                    }}
                                >
                                    {/* <Link
                                        aria-label="Ir para posts"
                                        to="#posts"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Box
                                            backgroundColor="#3ABEFF"
                                            p="1px"
                                            textAlign="center"
                                            fontSize="25px"
                                            fontWeight="bolder"
                                            borderRadius="lg"
                                            w="100%"
                                            flex={0}
                                            alignItems="center"
                                        >
                                            <Text as="span">
                                                Conheça o blog
                                            </Text>
                                        </Box>
                                    </Link> */}
                                </MotionFlex>
                            </MotionFlex>
                        </Flex>
                    </Flex>
                    <MotionFlex
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "anticipate", duration: 1.5 }}
                        zIndex={-1}
                        position="relative"
                    >
                        <Image
                            borderRadius={["15px", "50%"]}
                            display={["none", "none", "none", "none", "block"]}
                            alt="Imagem placa de circuito impresso."
                            src={aux_image}
                            objectFit="cover"
                            width="800px"
                            height={["auto", "617px"]}
                            boxShadow="md"
                            transform={["unset", "rotate(30deg)"]}
                        />
                        <Box
                            position="absolute"
                            height="650px"
                            width="850px"
                            left={["-50%", "-50%", "-50%", "-30"]}
                            top="30"
                            borderRadius="50%"
                            background={useColorModeValue("#26FFE6", "#28587B")}
                            transform="rotate(25deg)"
                            zIndex={-1}
                            boxShadow="md"
                        ></Box>
                        <Box
                            position="absolute"
                            height="2000px"
                            width="2000px"
                            left="%60"
                            // top="30"
                            borderRadius="50%"
                            background={useColorModeValue("#CDFFF9", "#4A6D7C")}
                            opacity="0.6"
                            transform="rotate(25deg)"
                            zIndex={-10}
                            boxShadow="md"
                        ></Box>
                    </MotionFlex>
                </Flex>
            </Flex>
            <ModalContact isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default Home;
