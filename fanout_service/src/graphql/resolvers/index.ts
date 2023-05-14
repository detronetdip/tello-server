import { countFriends } from "../../controller/countFriends";
import { myPosts } from "../../controller/mypost";
import { userDetails } from "../../controller/userDetails";

const resolvers = {
  DetailsOfUser: {
    totalFriends: countFriends,
  },
  Query: {
    test: () => {
      return "hello world";
    },
    userDetails: userDetails,
    myposts: myPosts,
  },
  Mutation: {
    test: (
      _parrent: unknown,
      _args: unknown,
      _context: unknown,
      _info: unknown
    ) => {
      console.log(_info);
      return "world";
    },
  },
};
export default resolvers;
