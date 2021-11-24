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

import ModalContact from "../ModalContact";

import { motion } from "framer-motion";

const MotionFlex = motion.custom(Flex);
const MotionButton = motion.custom(Button);

import aux_image from "./../../assets/image/about/home_aux.jpg";
import HomeBackground from "./HomeBackground";

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
                <Box position="absolute" top={0} left={0}>
                    <HomeBackground />
                </Box>
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
                                aria-label="Bem vindo ao blog"
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
                                    letterSpacing="-1px"
                                    m="0 10px"
                                >
                                    <Box
                                        fontSize={["30px", "35px"]}
                                        textAlign={["center", "center", "left"]}
                                        fontWeight="bolder"
                                        color={useColorModeValue(
                                            "#4A6D7C",
                                            "#EF6351"
                                        )}
                                    >
                                        <Text>Bem vindo a Jorge.room</Text>
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
                                        Um blog sobre tecnologia e
                                        desenvolvimento de software.
                                    </Text>

                                    <Flex mt="30px">
                                        <MotionButton
                                            onClick={onOpen}
                                            backgroundColor="#3ABEFF"
                                            initial={{ borderRadius: 10 }}
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
                                ></MotionFlex>
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
                            opacity="0.5"
                            zIndex={-1}
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
