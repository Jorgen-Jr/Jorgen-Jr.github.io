import {
    Box,
    Image,
    Table,
    TableCaption,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

import trueIcon from "../assets/image/icons/true_icon.png";
import falseIcon from "../assets/image/icons/false_icon.png";

interface TableProps {
    theme?: {
        colors: {
            primary: string;
            secondary: string;
            fontColor: string;
        };
    };
    data: {
        title: string;
        headers: {
            id: string;
            title: string;
            description: string;
            observation: string;
            backgroundColor: string;
        }[];
        rows: any[];
    };
    props?: any;
}

const TableComponent = ({ theme, data, props }: TableProps) => {
    const { headers, title, rows } = data;

    return (
        <Box overflowX="auto" maxW="1250px" borderRadius="md">
            <Table
                variant="unstyled"
                w="auto"
                borderRadius="md"
                overflow="hidden"
                shadow="md"
                margin={["0", "10px"]}
                {...props}
            >
                <TableCaption
                    placement="top"
                    fontSize={["23px", "23px", "32px"]}
                    fontWeight="bolder"
                    color={theme.colors.fontColor}
                    textAlign={["left", "left", "left", "center"]}
                >
                    {title}
                </TableCaption>
                <Thead>
                    <Tr bgColor={theme.colors.primary}>
                        {headers.map((header, index) => (
                            <Th
                                fontSize={["14px", "14px", "14px", "16px"]}
                                color="white"
                                key={index}
                                textAlign="center"
                                bgColor={
                                    header.backgroundColor
                                        ? header.backgroundColor
                                        : "inherit"
                                }
                            >
                                <Text
                                    fontWeight="lighter"
                                    fontSize={["12px", "12px", "12px", "14px"]}
                                >
                                    {header.description}
                                </Text>
                                <Text
                                    fontWeight="bolder"
                                    fontSize={["14px", "14px", "14px", "unset"]}
                                >
                                    {header.title}
                                </Text>
                                <Text
                                    fontWeight="lighter"
                                    fontSize={["12px", "12px", "12px", "14px"]}
                                    fontStyle="italic"
                                >
                                    {header.observation}
                                </Text>
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody
                    fontSize={["14px", "14px", "16px"]}
                    fontWeight="900"
                    color={theme.colors.fontColor}
                    bgColor="white"
                >
                    {rows.map((row, rowIndex) => (
                        <Tr
                            key={rowIndex}
                            bgColor={
                                rowIndex % 2
                                    ? theme.colors.secondary
                                    : "inherit"
                            }
                            color={rowIndex % 2 ? "white" : "inherit"}
                        >
                            {Object.keys(row).map((cell, index) => (
                                <Td
                                    key={index}
                                    bgColor={
                                        row[cell].backgroundColor
                                            ? row[cell].backgroundColor
                                            : index === 0 && !(rowIndex % 2)
                                            ? theme.colors.primary
                                            : "inherit"
                                    }
                                    textAlign="center"
                                    color={
                                        row[cell].color
                                            ? row[cell].color
                                            : index === 0 && !(rowIndex % 2)
                                            ? "white"
                                            : "inherit"
                                    }
                                    minW="150px"
                                    maxW={index === 0 ? "300px" : "unset"}
                                >
                                    {typeof row[cell] === typeof {} ? (
                                        row[cell].type === "boolean" ? (
                                            row[cell].value ? (
                                                <Image
                                                    alt={"Possui " + cell}
                                                    src={trueIcon}
                                                    margin="auto"
                                                />
                                            ) : (
                                                <Image
                                                    alt={"Não possui" + cell}
                                                    src={falseIcon}
                                                    margin="auto"
                                                />
                                            )
                                        ) : (
                                            row[cell].value
                                        )
                                    ) : (
                                        row[cell]
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default TableComponent;
