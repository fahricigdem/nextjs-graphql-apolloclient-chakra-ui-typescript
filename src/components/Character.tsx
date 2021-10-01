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

  const bgColor = { light: "#E9D8FDee", dark: "#1A365D88" };

  const color = { light: "black", dark: "white" };

  const shadow = {
    light: "#87f6",
    dark: "#aa008090",
  };

  return (
    <Link href={data.id}>
      <Stack
        direction={["row", "row", "row"]}
        w="90%"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        _hover={{
          boxShadow: `0px 12px 20px ${shadow[colorMode]}`,
          cursor: "pointer",
          color: "#ff0080",
        }}
        _active={{
          borderLeft: "solid 8px #aa0080",
          borderRight: "solid 8px #aa0080",
          cursor: "pointer",
          color: "#ff0080",
        }}
        boxShadow={["0px 4px 10px" + shadow[colorMode]]}
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
