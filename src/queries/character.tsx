import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        name
        id
        status
        species
        gender
        location {
          name
          id
        }
        image
        origin {
          name
          id
        }
        episode {
          id
          episode
          air_date
        }
      }
    }
  }
`;
