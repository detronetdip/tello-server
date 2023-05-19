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
  if (feed.length === 0) {
    const following = await prisma.friends.findMany({
      where: { AND: [{ userId: _args.uid }, { isAccepted: true }] },
      select: { friendId: true },
    });

    const followers = await prisma.friends.findMany({
      where: { AND: [{ friendId: _args.uid }, { isAccepted: true }] },
      select: { userId: true },
    });

    const followingPosts = await prisma.post.findMany({
      where: { userId: { in: following.map((user) => user.friendId) } },
      include: { user: true },
      take: 5,
      orderBy: { createdAt: "desc" },
    });

    const followersPosts = await prisma.post.findMany({
      where: { userId: { in: followers.map((user) => user.userId) } },
      include: { user: true },
      take: 5,
      orderBy: { createdAt: "desc" },
    });
    const followerPosts = followersPosts.map((p) => {
      const { id, ...post } = p;
      return { id, post: { id, ...post } };
    });
    const followPosts = followingPosts.map((p) => {
      const { id, ...post } = p;
      return { id, post: { id, ...post } };
    });
    return [...followerPosts, ...followPosts];
  }
  return feed;
};
