const resolvers = {
  Query: {
    hello: () => {
      return "hello world";
    },
  },
  Mutation: {
    test: (_parrent, _args, _context, _info) => {
      console.log(_info);
      return "world";
    },
  },
};
export default resolvers;
