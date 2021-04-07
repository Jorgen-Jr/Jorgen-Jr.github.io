import { Flex, useDisclosure } from "@chakra-ui/react";

import React from "react";

import ModalContact from "./ModalContact";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH="20vh"
      alignItems={["center"]}
      justifyContent="space-evenly"
      mt="50px"
      mb="50px"
    >
      <ModalContact isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Home;
