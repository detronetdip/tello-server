
const typedefs = `
  type Query {
    test: String
    userDetails(uid: String): DetailsOfUser
    myposts(uid: String): [MyPosts]
  }
  input TestInput {
    t1: String
    t2: String
  }
  type Mutation {
    test(obj: TestInput): String
  }

  type Comments{
    id: String,
    content:String
    userId:String
    postId:String
  }

  type MyPosts{
    id: String
    userId:String
    media:String
    content:String
    createdAt:String
    type: String
    comments:[Comments]
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
