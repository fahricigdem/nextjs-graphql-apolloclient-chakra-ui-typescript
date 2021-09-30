import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    //width="95%"
    maxWidth="48rem"
    //mt="-45vh"
    py="1rem"
    px="1rem"
    alignItems="center"
    {...props}
  />
);
