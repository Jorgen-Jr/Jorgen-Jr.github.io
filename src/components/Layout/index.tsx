import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./style.css";
import Footer from "../Footer";
import Header from "../Header";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";

const MotionBox = motion.custom(Box);
const MotionFlex = motion.custom(Flex);

//Syntax highlighting component
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children, slide }: IProps) => {
    let isAtTop = false;

    if (typeof window !== `undefined`) {
        isAtTop = window.pageYOffset < 50 ? true : false;
        if (slide !== 0) {
            isAtTop = false;
        }
    }

    const toTopAnimation = useAnimation();

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

    return (
        <>
            <Header slide={slide} />
            <Box className="content-container">{children}</Box>
            <Footer />

            <MotionFlex
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
                    transition: { duration: 0.4, type: "spring", bounce: 0.5 },
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
                            "0 0 10px #222"
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
            </MotionFlex>
        </>
    );
};

interface IProps {
    children: ReactNode;
    slide: number;
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    slide: PropTypes.number.isRequired,
};

export default Layout;
