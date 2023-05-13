
const typedefs = `
  type Query {
    test: String
    userDetails(uid: String): DetailsOfUser
  }
  input TestInput {
    t1: String
    t2: String
  }
  type Mutation {
    test(obj: TestInput): String
  }
  type User {
    id: String
    username: String
    firstname: String
    lastname: String
    createdAt: String
    updatedAt: String
  }
  type FriendConnection {
    id: String
    userId: String
    friendId: String
    createdAt: String
    updatedAt: String
    isAccepted: Boolean
    block: Boolean
    follower: User
  }
  type DetailsOfUser {
    id: String
    username: String
    firstname: String
    lastname: String
    createdAt: String
    updatedAt: String
    followers: [FriendConnection]
    totalFriends: String
  }
`;
export default typedefs;
