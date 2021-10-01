import React from "react";

//import { EXCHANGE_RATES as QUERY, client } from "../queries/exchangeRates";
import { CHARACTERS as QUERY, client } from "../queries/characters";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

//import ExchangeRate from "../components/ExchangeRate";
import Characters from "../components/Characters";

const Index = ({ data }) => {
  //console.log(data);

  return (
    <Container minH="100vh">
      <DarkModeSwitch />
      <Hero title={"The Rick and Morty"} />

      <Main>
        {/* <ExchangeRate data={data} /> */}
        <Characters data={data} />
      </Main>

      <Footer>Next ❤️ Chakra ❤️ Apollo client ❤️ GraphQL</Footer>
    </Container>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

export default Index;
