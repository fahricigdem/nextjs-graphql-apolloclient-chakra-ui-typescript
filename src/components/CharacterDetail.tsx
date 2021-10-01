import {
  QuestionIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { Box, Text, useColorMode, Stack, Image } from "@chakra-ui/react";
import * as React from "react";

const Character = ({ data }) => {
  //console.log(data);
  const { colorMode } = useColorMode();

  const bgColor = { light: "#E9D8FDdd", dark: "#1A365D66" };

  const color = { light: "black", dark: "white" };

  const shadow = {
    light: "#87f6",
    dark: "#880080f0",
  };

  return (
    <Stack
      direction={["column"]}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      boxShadow={[" 0px 0px 8px 8px" + shadow[colorMode]]}
    >
      <Image src={data.image} alt={data.name} objectFit="cover" />
      <Box px="4" py="2">
        <Text>
          {data.status == "Alive" ? (
            <TriangleUpIcon color="green" />
          ) : data.status == "Dead" ? (
            <TriangleDownIcon color="red" />
          ) : (
            <QuestionIcon color="yellow.500" />
          )}{" "}
          {data.status}-{data.species}-{data.gender}
        </Text>
        <br />
        <Text color="gray.500">Origin:</Text>
        <Text>{data.origin.name}</Text>
        <br />
        <Text color="gray.500">Last seen:</Text>
        <Text>{data.location.name}</Text>
      </Box>
    </Stack>
  );
};

export default Character;
