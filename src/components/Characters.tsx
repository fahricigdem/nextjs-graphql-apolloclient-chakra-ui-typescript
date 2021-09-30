import {
  QuestionIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Text,
  Heading,
  useColorMode,
  Stack,
  Image,
  Wrap,
} from "@chakra-ui/react";
import * as React from "react";

const Characters = ({ data }) => {
  console.log(data);
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  const renderedData = data.characters.results.map((data, index) => {
    return (
      <Stack
        direction={["column", "column", "row"]}
        w="90%"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        _hover={{ borderLeft: "solid 5px #ff1111" }}
      >
        <Image
          src={data.image}
          alt={data.name}
          objectFit="cover"
          //boxSize="40%"
        />
        <Box key={index} px="4" py="2">
          <Heading size="lg">{data.name}</Heading>
          <Text>
            {data.status == "Alive" ? (
              <TriangleUpIcon color="green" />
            ) : data.status == "Dead" ? (
              <TriangleDownIcon color="red" />
            ) : (
              <QuestionIcon color="yellow.500" />
            )}{" "}
            {data.status}-{data.species}
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
  });

  return <>{renderedData}</>;
};

export default Characters;
