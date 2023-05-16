import { prisma } from "../prisma_connection";

export const getMyNewsFeed = async (
  _parrent: unknown,
  _args: { uid: string }
) => {
  const feed = await prisma.news_feed.findMany({
    where: { userId: _args.uid },
    include: {
      post: { include: { user: true } },
    },
  });
  return feed;
};
