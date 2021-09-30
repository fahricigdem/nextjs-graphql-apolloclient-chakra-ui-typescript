import Link from "next/link";
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
  Link as ChakraLink,
} from "@chakra-ui/react";

const Character = ({ data }) => {
  //console.log(data);
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.100", dark: "gray.800" };

  const color = { light: "black", dark: "white" };

  const shadow = {
    light: "#aaaaaa",
    dark: "#000000",
  };

  return (
    <Link href={data.id}>
      <Stack
        direction={["row", "row", "row"]}
        w="90%"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        _hover={{ borderLeft: "solid 5px #ff1111", cursor: "pointer" }}
        boxShadow={[
          "5px 5px 5px 5px" + shadow[colorMode],
          "5px 5px 5px 5px" + shadow[colorMode],
          "30px 30px 30px 30px" + shadow[colorMode],
        ]}
        align="center"
      >
        <Image
          src={data.image}
          alt={data.name}
          boxSize="28%"
          objectFit="cover"
        />
        <Box px="2" py="1">
          <Heading size="md">{data.name}</Heading>
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
          {/* <br />
        <Text color="gray.500">Origin:</Text>
        <Text>{data.origin.name}</Text>
        <br />
        <Text color="gray.500">Last seen:</Text>
        <Text>{data.location.name}</Text> */}
        </Box>
      </Stack>
    </Link>
  );
};

export default Character;
