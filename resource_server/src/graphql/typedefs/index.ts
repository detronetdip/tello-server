import { gql } from "apollo-server-express";

const typedefs = gql`
  type Query {
    test: String
    friendsOfUser(uid: String): [UserFriends]
  }
  input TestInput {
    t1: String
    t2: String
  }
  type Mutation {
    test(obj: TestInput): String
  }
  type User{
    id: String
    username: String
    firstname: String
    lastname: String
    createdAt: String
    updatedAt: String
  }
  type friendConnection{
    id: String,
    userId: String,
    friendId: String,
    createdAt: String,
    updatedAt: String,
    isAccepted: Boolean,
    block: Boolean,
    follower:User
  }
  type UserFriends {
    id: String
    username: String
    firstname: String
    lastname: String
    createdAt: String
    updatedAt: String
    followers: [friendConnection]
  }
`;
export default typedefs;
