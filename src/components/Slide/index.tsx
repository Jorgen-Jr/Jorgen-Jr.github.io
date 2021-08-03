import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import "./style.css";
import { Box } from "@chakra-ui/react";

const Slide = ({ children, id }: IProps) => {
    return (
        <>
            <Box
                className="slide-anchor"
                id={id}
                style={{ paddingTop: id !== "home" ? "40px" : "1px" }}
                opacity={0}
            ></Box>
            <div
                className={id !== "home" ? "slide-container" : null}
                id={"slide_" + id}
            >
                {children}
            </div>
        </>
    );
};

interface IProps {
    children: ReactNode;
    id: string;
}

Slide.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default Slide;
