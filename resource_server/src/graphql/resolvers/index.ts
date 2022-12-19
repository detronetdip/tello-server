import { friendsOfUser } from "../../controller/friendsOfUser";

const resolvers = {
  Query: {
    test: () => {
      return "hello world";
    },
    friendsOfUser: friendsOfUser,
  },
  Mutation: {
    test: (_parrent: any, _args: any, _context: any, _info: any) => {
      console.log(_info);
      return "world";
    },
  },
};
export default resolvers;
