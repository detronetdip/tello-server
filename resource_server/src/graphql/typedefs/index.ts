import { gql } from "apollo-server-express";

const typedefs = gql`
  type Query {
    hello: String
  }
`;
export default typedefs;
