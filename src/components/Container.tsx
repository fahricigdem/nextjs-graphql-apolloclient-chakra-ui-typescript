import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light:
      "linear-gradient(135deg, #111 25%, transparent 25%,  #faf 75%, #111)",
    dark: "repeating-linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #444cf7 75%, #111), repeating-linear-gradient(45deg, #111 25%, #111 25%, #111 75%, #111 75%, #111)",
  };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      width="100vw"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      //bg={bgColor[colorMode]}
      color={color[colorMode]}
      //opacity="0.8"
      //bg="gray.50"
      //bgGradient="repeating-linear(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7) "
      bgGradient={bgColor[colorMode]}
      backgroundSize="5px 5px"
      backgroundPosition="0 0, 10px 10px"
      {...props}
    />
  );
};
