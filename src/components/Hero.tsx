import { Flex, Heading, Text, Box, Link } from "@chakra-ui/react";

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
      py="1"
    >
      <Link href="/">GraphQL Data Fetching...</Link>
    </Box>

    <Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      pt="4rem"
      pb="1rem"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  </>
);

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
