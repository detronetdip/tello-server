import { getDataFromSET, setDataToSET } from "../cache";
import { prisma } from "../prisma_connection";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const generateNewsFeed = async ({ userId, id }) => {
  const MAX_FEED_COUNT = 3;
  const friendsCaheKey = `FRIENDS-${userId}`;
  let friends = await getDataFromSET(friendsCaheKey);
  if (friends.length === 0) {
    const myFriends = await prisma.friends.findMany({
      where: {
        AND: [{ isAccepted: true }, { OR: [{ userId }, { friendId: userId }] }],
      },
    });
    friends = myFriends.map((e) =>
      e.userId === userId ? e.friendId : e.userId
    );

    await setDataToSET(friendsCaheKey, friends, 30);
  }
  const newsFeed = friends.map((user) => ({
    userId: user,
    postId: id,
  }));

  await prisma.news_feed.createMany({
    data: newsFeed,
    skipDuplicates: true,
  });

  const userCounts = await prisma.news_feed.groupBy({
    by: ["userId"],
    _count: {
      id: true,
    },
    having: {
      userId: { _count: { gt: MAX_FEED_COUNT } },
    },
  });

  const usersWithMoreFeed = userCounts.map((u) => u.userId);
  if (usersWithMoreFeed.length > 0) {
    const batchDelete = usersWithMoreFeed.map((u) =>
      prisma.news_feed
        .findMany({
          where: { userId: u },
          orderBy: { createdAt: "asc" },
          take: MAX_FEED_COUNT,
        })
        .then((data) => {
          const ids = data.map((d) => d.id);
          return ids;
        })
        .then((ids) =>
          prisma.news_feed.deleteMany({ where: { id: { in: ids } } })
        )
    );
    await Promise.all(batchDelete);
  }
};
