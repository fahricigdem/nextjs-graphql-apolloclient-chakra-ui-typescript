import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    py="1rem"
    position="fixed"
    bottom="0"
    bg="gray.400"
    w="100vw"
    justify="center"
    {...props}
  />
);
