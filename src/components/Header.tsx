import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

import {
    Box,
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    List,
    ListItem,
    useColorMode,
    Button,
    useColorModeValue,
    Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { headerItens } from "../dumb_data";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import { Link } from "gatsby";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Header = ({ slide, slide_name }: IProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [title, setTitle] = useState("");

    const { colorMode, toggleColorMode } = useColorMode();

    let isAtTop = false;

    if (typeof window !== `undefined`) {
        isAtTop = window.pageYOffset < 50 ? true : false;
        if (slide !== 0) {
            isAtTop = false;
        }
    }

    const [menu_items] = useState(headerItens.filter((item) => item.published));

    const btnRef = useRef();

    const [links, setLinks] = useState(menu_items);

    function setActiveLink(index: Number): void {
        const new_links = links.map((link, link_index) => {
            if (index === link_index) {
                link.active = true;
                return link;
            } else {
                link.active = false;
                return link;
            }
        });
        setLinks(new_links);
    }

    useEffect(() => {
        getTitle();
        setActiveLink(slide);
    }, [slide]);

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = () => {
                const height =
                    document.documentElement.scrollHeight -
                    document.documentElement.clientHeight;
                const scrolled = (window.pageYOffset / height) * 100;
                document.getElementById("progressBar").style.width =
                    scrolled + "%";
            };
        }
    }, []);

    function createTitle(char) {
        setTitle(char);
    }

    function getTitle() {
        const toBeDone = slide_name.split("");

        let cached = "";

        toBeDone.forEach((char: string, index: number) => {
            setTimeout(() => {
                cached += char;
                createTitle(cached);
            }, index * 120);
        });
    }

    return (
        <Box>
            <MotionFlex
                color={useColorModeValue("black", "#DDD")}
                initial={
                    isAtTop
                        ? { x: -20, opacity: 0 }
                        : {
                              x: 0,
                              opacity: 1,
                          }
                }
                animate={{
                    x: [isAtTop ? -20 : 0, 0],
                    opacity: [isAtTop ? 0 : 1, 1],
                    type: "spring",
                }}
                pt={["10px", isAtTop ? "25px" : "10px"]}
                pb={isAtTop ? "1px" : "5px"}
                background={
                    isAtTop
                        ? "unset"
                        : useColorModeValue(
                              "RGBA(255,255,255,0.8)",
                              "RGBA(0,0,0,0.6)",
                          )
                }
                mt={["1px", isAtTop ? "auto" : "2px"]}
                w="100%"
                pl={["15px", "15px", "30px", "80px"]}
                position="fixed"
                transition="0.2s"
                zIndex={1}
            >
                <Flex
                    alignContent={["space-around", "space-around", "end"]}
                    justifyContent={["space-between", "space-between", "end"]}
                    pr={["15px", "0"]}
                    w="100%"
                    position="sticky"
                    fontSize={["unset", "unset", "0.7rem", "unset"]}
                    as="nav"
                >
                    <Flex
                        alignContent="center"
                        justifyContent="center"
                        flexDir="column"
                        minW="150px"
                        w={["100%", "100%", "unset"]}
                    >
                        <Link to="/">
                            <Text fontFamily="FiraCode" fontSize="xl">
                                Jorge.{title}
                                <MotionText
                                    as="span"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [1, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                    }}
                                >
                                    |{" "}
                                </MotionText>
                            </Text>
                        </Link>
                    </Flex>

                    <Box
                        display={["none", "none", "flex"]}
                        w={["full", "auto"]}
                        alignItems="center"
                        flexGrow={1}
                        transition="0.2s"
                        mt={["40px", "0"]}
                        position={["absolute", "relative"]}
                    >
                        {links.map((link, index) => (
                            <MotionFlex
                                key={index}
                                animate={{
                                    x: [isAtTop ? -20 : 0, 0],
                                    opacity: [isAtTop ? 0 : 1, 1],
                                    type: "spring",
                                }}
                                alignItems="end"
                                ml={["0", "40px"]}
                                maxHeight="500px"
                            >
                                <Link
                                    to={
                                        link.url
                                            ? link.url
                                            : index === slide
                                              ? "#"
                                              : "/#" + link.target_id
                                    }
                                    color={
                                        link.active
                                            ? "#C000C4"
                                            : useColorModeValue("black", "#DDD")
                                    }
                                    style={{
                                        fontWeight: "bolder",
                                        width: "full",
                                        padding: "10px",
                                        color: link.active
                                            ? "#C000C4"
                                            : useColorModeValue(
                                                  "black",
                                                  "#DDD",
                                              ),
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </MotionFlex>
                        ))}
                    </Box>

                    <Flex
                        pr={["15px", "30px"]}
                        justifyContent="flex-end"
                        width={["0", "100%", "100%", "0"]}
                    >
                        <Button
                            onClick={toggleColorMode}
                            aria-label="Alterar para tema claro ou escuro."
                        >
                            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                        </Button>
                    </Flex>

                    <Box
                        display={["block", "block", "none"]}
                        pr={["15px", "30px"]}
                        alignSelf="center"
                        ref={btnRef}
                        onClick={onOpen}
                    >
                        <title>Menu</title>
                        <ChevronDownIcon boxSize={["24px", "32px"]} />
                    </Box>
                </Flex>
            </MotionFlex>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton
                        backgroundColor={useColorModeValue("white", "#333")}
                        border="none"
                    />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <List>
                            {links.map((link, index) => (
                                <ListItem
                                    key={index}
                                    pt="15px"
                                    pb="15px"
                                    w="100%"
                                >
                                    <Link
                                        aria-label={link.label}
                                        onClick={() => onClose()}
                                        backgroundColor="blue"
                                        key={index}
                                        w="100%"
                                        p="15px"
                                        h="15px"
                                        href={
                                            link.url
                                                ? link.url
                                                : index === slide
                                                  ? "#"
                                                  : "/#" + link.target_id
                                        }
                                        color={
                                            link.active
                                                ? useColorModeValue(
                                                      "#003761",
                                                      "#0274cc",
                                                  )
                                                : useColorModeValue(
                                                      "black",
                                                      "#DDD",
                                                  )
                                        }
                                        fontWeight="bolder"
                                        _hover={{
                                            textDecoration: "none",
                                            color: "darkgray",
                                        }}
                                        _visited={{
                                            color: "gray",
                                        }}
                                    >
                                        <ChevronRightIcon boxSize={["24px"]} />
                                        {link.label}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Box
                position="fixed"
                h={["1px", "3px"]}
                top="0"
                w="100%"
                zIndex={1}
                background={
                    isAtTop
                        ? "RGBA(0,0,0,0)"
                        : useColorModeValue(
                              "RGBA(255,255,255,0.8)",
                              "RGBA(0,0,0,0.6)",
                          )
                }
            >
                <Box
                    w="0"
                    h={["1px", "3px"]}
                    id="progressBar"
                    background="#00DBDE"
                    backgroundImage={useColorModeValue(
                        "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
                        "linear-gradient(90deg, #3da491 0%, #485aa6 100%)",
                    )}
                    transition="0.2s"
                ></Box>
            </Box>
        </Box>
    );
};

interface IProps {
    slide: number;
    slide_name: string;
}

Header.propTypes = {
    slide: PropTypes.number.isRequired,
};

export default Header;
