import React from "react";

import {
    Box,
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import icon_telegram from "./../assets/image/social-icons/telegram.png";
import icon_github from "./../assets/image/social-icons/github.png";
import icon_instagram from "./../assets/image/social-icons/instagram.png";
import icon_linkedn from "./../assets/image/social-icons/linkedn.png";
import icon_mail from "./../assets/image/social-icons/mail.png";
import icon_rss from "./../assets/image/social-icons/rss.png";
import icon_twitter from "./../assets/image/social-icons/twitter.png";

const Footer = () => {
    return (
        <Box
            as="footer"
            background="#053a63"
            fontFamily="Roboto, sans, serif"
            color="white"
            mt="90px"
        >
            <Flex
                justifyContent={["center", "center", "space-around"]}
                p="15px"
                flexDirection={["column", "column", "row"]}
                alignItems={["center", "center", "unset"]}
            >
                <Flex position="relative">
                    <Box
                        w="350px"
                        h="350px"
                        background={useColorModeValue("#e1e1e1", "#092a44")}
                        borderRadius="15px"
                        boxShadow="md"
                        mt="-90px"
                        overflow="hidden"
                    >
                        <Flex flexDir="column" alignContent="center">
                            <Box p="40px">
                                <Image
                                    borderRadius="50%"
                                    boxSize="150px"
                                    margin="auto"
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IO2MvrG7m1-23Q3wPtMKSAHaEK%26pid%3DApi&f=1"
                                ></Image>
                            </Box>
                            <Divider
                                w="80%"
                                margin="auto"
                                borderColor={useColorModeValue(
                                    "#333",
                                    "#e1e1e1"
                                )}
                            />
                            <Flex
                                p="15px 10px"
                                justifyContent="center"
                                color={useColorModeValue("#333", "#e1e1e1")}
                            >
                                <Heading>Sobre</Heading>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>

                <Flex flexDir="column" p="40px" fontFamily="Fira Code">
                    <Box maxW="350px" lineHeight="2em">
                        <Heading fontFamily="Fira Code" lineHeight="1.2em">
                            Me encontre nas redes sociais
                        </Heading>
                        <Text>Tenho certeza que tem ideias para discutir.</Text>
                    </Box>

                    <Flex flexDir="row">
                        <Link href="./" target="_BLANK" p="10px 10px 0 0">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_telegram}
                            ></Image>
                        </Link>
                        <Link
                            href="https://github.com/Jorgen-Jr/"
                            target="_BLANK"
                            p="10px"
                        >
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_github}
                            ></Image>
                        </Link>
                        <Link
                            href="mailto:##########@#########.com"
                            target="_BLANK"
                            p="10px"
                        >
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_mail}
                            ></Image>
                        </Link>
                        <Link href="./" target="_BLANK" p="10px">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_instagram}
                            ></Image>
                        </Link>
                        <Link href="./" target="_BLANK" p="10px">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_linkedn}
                            ></Image>
                        </Link>
                        <Link href="./" target="_BLANK" p="10px">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_rss}
                            ></Image>
                        </Link>
                        <Link href="./" target="_BLANK" p="10px">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_twitter}
                            ></Image>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                background="#092a44"
                color="#CCC"
                fontWeight="bolder"
                justifyContent={["left", "space-around"]}
                alignItems={["center"]}
                padding={["10px", "0"]}
                height={["auto", "60px"]}
                textTransform="uppercase"
                flexDirection={["column", "row"]}
            >
                <Flex alignItems="center" p={["10px", "0"]}>
                    <Link
                        href="https://github.com/Jorgen-Jr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Box className="github-link">
                            <Text as="span" style={{ width: "15px" }}>
                                {" "}
                            </Text>{" "}
                            <Text as="span">
                                Made with{" "}
                                <Text
                                    as="span"
                                    role="img"
                                    aria-label="heart emoji"
                                    color="red"
                                >
                                    ❤️
                                </Text>{" "}
                                by Jorge © {new Date().getFullYear()}
                            </Text>
                        </Box>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
