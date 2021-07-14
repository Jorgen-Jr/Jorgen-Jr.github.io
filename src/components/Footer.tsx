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
import icon_twitter from "./../assets/image/social-icons/twitter.png";
// import icon_rss from "./../assets/image/social-icons/rss.png";
import profile_pic from "./../assets/image/profile_pic.png";

const Footer = () => {
    return (
        <Box
            as="footer"
            background="#053a63"
            fontFamily="FiraCode, sans, serif"
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
                        minH="350px"
                        background={useColorModeValue("#FFF", "#092a44")}
                        borderRadius="15px"
                        boxShadow="lg"
                        borderColor={useColorModeValue("#EAEAEA", "#092a44")}
                        borderWidth="1px"
                        mt="-90px"
                        overflow="hidden"
                    >
                        <Flex flexDir="column" alignContent="center">
                            <Box p="40px">
                                <Image
                                    borderRadius="50%"
                                    boxSize="150px"
                                    margin="auto"
                                    src={profile_pic}
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
                                flexDir="column"
                                alignContent="center"
                                textAlign="center"
                                color={useColorModeValue("#333", "#e1e1e1")}
                            >
                                <Heading fontSize="21px">
                                    Oi, me chamo Jorge
                                </Heading>
                                <Text>
                                    Proprietário deste site e desenvolvedor
                                    fullstack focado em tecnologias para a web
                                    :)
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>

                <Flex
                    flexDir="column"
                    p={["40px 0", "40px 0", "40px"]}
                    fontFamily="Mont Serrat"
                >
                    <Box maxW="350px" lineHeight="2em">
                        <Heading fontFamily="Mont Serrat" lineHeight="1.2em">
                            Me encontre nas redes sociais
                        </Heading>
                        <Text>Tenho certeza que tem ideias para discutir.</Text>
                    </Box>

                    <Flex flexDir="row">
                        <Link
                            href="https://t.me/JojiJ"
                            target="_BLANK"
                            p="10px 10px 0 0"
                        >
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
                            href="mailto:jorgenjr@pm.me"
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
                        <Link
                            href="https://www.instagram.com/jorge.njr/"
                            target="_BLANK"
                            p="10px"
                        >
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_instagram}
                            ></Image>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jorgen-nascimento/"
                            target="_BLANK"
                            p="10px"
                        >
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_linkedn}
                            ></Image>
                        </Link>
                        {/* <Link href="./" target="_BLANK" p="10px">
                            <Image
                                boxSize="30px"
                                backgroundColor="#727475"
                                borderRadius="50%"
                                src={icon_rss}
                            ></Image>
                        </Link> */}
                        <Link
                            href="https://twitter.com/Jorgesnjr"
                            target="_BLANK"
                            p="10px"
                        >
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
                        href="https://github.com/Jorgen-Jr/room"
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
