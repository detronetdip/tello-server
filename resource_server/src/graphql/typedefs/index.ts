import { gql } from "apollo-server-express";

const typedefs = gql`
  type Query {
    hello: String
  }
  input TestInput {
    t1: String
    t2: String
  }
  type Mutation {
    test(obj: TestInput): String
  }
`;
export default typedefs;
