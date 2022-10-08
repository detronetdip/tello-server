const resolvers = {
  Query: {
    // All queries will go here
    hello: () => {
      return "hello world";
    },
  },
  Mutation: {
    // All mutations will go here
    test: (_parrent, _args, _context, _info) => {
      console.log(_info);
      return "world";
    },
  },
};
export default resolvers;
