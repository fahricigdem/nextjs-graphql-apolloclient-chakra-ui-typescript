import { Box, Text } from "@chakra-ui/layout";
import * as React from "react";

const ExchangeRate = ({ data }) => {
  const renderedData = data.rates.map((data, index) => {
    return (
      <Box key={index} p="2" bg="blue.400">
        <Text>
          {data.name} ({data.currency})-{data.rate}
        </Text>
      </Box>
    );
  });
  return <>{renderedData}</>;
};

export default ExchangeRate;
