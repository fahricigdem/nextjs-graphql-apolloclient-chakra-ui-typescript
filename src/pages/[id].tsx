import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import CharacterDetail from "../components/CharacterDetail";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { CHARACTERS } from "../queries/characters";

export async function getStaticProps(context) {
  const id = context.params.id;

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  const CHARACTER = gql`
    query {
      character(id: ${id}) {
        name
        id
        status
        species
        gender
        location {
          name
        }
        image
        origin {
          name
        }
      }
    }
  `;

  const { data } = await client.query({
    query: CHARACTER,
  });
  //console.log(data);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: CHARACTERS,
  });

  const paths = data.characters.results.map((data) => ({
    params: { id: data.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
function CharacterDinamik({ data }) {
  return (
    <Container minH="100vh">
      <DarkModeSwitch />
      <Hero title={data.character.name} />

      <Main>
        {/* <ExchangeRate data={data} /> */}
        <CharacterDetail data={data.character} />
      </Main>

      <Footer>Next ❤️ Chakra ❤️ Apollo client ❤️ GraphQL</Footer>
    </Container>
  );
}
export default CharacterDinamik;
