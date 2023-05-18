import { prisma } from "../prisma_connection";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const myPosts = async (_parrent: unknown, _args: { uid: string }) => {
  console.log(_parrent, _args?.uid);
  const posts = await prisma.post.findMany({
    where: {
      userId: _args?.uid,
    },
  });
  console.log(posts,"lll")
  return posts;
};
