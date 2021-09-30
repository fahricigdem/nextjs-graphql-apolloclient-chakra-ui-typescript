import { Flex, Heading, Text, Box } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <>
    <Box
      position="fixed"
      top="0"
      bg="gray.400"
      width="100vw"
      align="center"
      justify="center"
      h="2rem"
    >
      <Text>GraphQL Fetch Data Versuche...</Text>
    </Box>

    <Flex
      justifyContent="center"
      alignItems="center"
      //height="100vh"

      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      //position="fixed"
      //top="0"
      pt="1rem"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  </>
);

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
