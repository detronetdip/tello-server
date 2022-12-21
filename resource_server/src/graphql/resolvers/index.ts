import { countFriends } from "../../controller/countFriends";
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
  },
  Mutation: {
    test: (_parrent: any, _args: any, _context: any, _info: any) => {
      console.log(_info);
      return "world";
    },
  },
};
export default resolvers;
