import React, { ReactNode, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useScrollRestoration } from "gatsby";

import "./style.css";
import Footer from "../Footer";
import Header from "../Header";
import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

//Syntax highlighting component
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children, slide }: IProps) => {
    let isAtTop = false;
    if (typeof window !== `undefined`) {
        isAtTop = window.scrollY < 50 ? true : false;
        if (slide.index !== 0) {
            isAtTop = false;
        }
    }

    const toTopAnimation = useAnimation();

    useEffect(() => {
        if (!isAtTop) {
            toTopAnimation.start({
                opacity: [0.8, 1],
                y: [150, 0],
                transition: {
                    duration: 0.4,
                },
            });
        } else {
            toTopAnimation.start({
                opacity: [0.8, 1],
                y: [0, 150],
                transition: {
                    duration: 0.4,
                },
            });
        }
    });

    const { colorMode } = useColorMode();

    const backgroundColor = useColorModeValue("#FFF", "#1A202C");

    return (
        <>
            <Header slide={slide.index} slide_name={slide.name} />
            <MotionBox
                key={colorMode}
                initial={{ opacity: 0, backgroundColor }}
                animate={{ opacity: 1, backgroundColor }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                color={useColorModeValue("black", "#DDD")}
                style={{
                    transition: "background-color 0.5s ease-in-out",
                }}
            >
                <Box className="content-container">{children}</Box>

                {/* <MotionFlex
                    position="fixed"
                    flexDir="column"
                    zIndex={1}
                    right={15}
                    bottom={15}
                    borderRadius="15px"
                    initial={{ y: 150, opacity: 0.8 }}
                    animate={toTopAnimation}
                    whileHover={{
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            type: "spring",
                            bounce: 0.5,
                        },
                        cursor: "pointer",
                    }}
                    // transition="0.2s"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Link to="#" aria-label="Voltar para o topo da página.">
                        <MotionFlex
                            w="50px"
                            h="50px"
                            mt="5px"
                            borderRadius="15px"
                            background={useColorModeValue("white", "#333")}
                            boxShadow={useColorModeValue(
                                "0 0 10px #CCC",
                                "0 0 10px #222",
                            )}
                            whileHover={{
                                opacity: 1,
                                scale: [1, 1.2, 1.3],
                                borderRadius: ["15px", "50%"],
                                transition: {
                                    duration: 0.4,
                                    type: "spring",
                                    bounce: 0.5,
                                },
                                cursor: "pointer",
                            }}
                            // transition="0.2s"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <MotionBox
                                whileHover={{
                                    opacity: 1,
                                    scale: [1, 1.2, 1.3],
                                    transition: {
                                        duration: 1,
                                        type: "spring",
                                        bounce: 0.5,
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <ArrowUpIcon w={"32px"} h={"32px"} />
                            </MotionBox>
                        </MotionFlex>
                    </Link>
                </MotionFlex> */}
            </MotionBox>
            <Footer />
        </>
    );
};

interface IProps {
    children: ReactNode;
    slide: { index: number; name: string };
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    slide: PropTypes.number.isRequired,
};

export default Layout;
