import { prisma } from "../prisma_connection/index";

export const countFriends = async (_parrent: any) => {
  const data = await prisma.friends.groupBy({
    by: ["userId"],
    _count: {
      id: true,
    },
  });
  return data[0]._count.id;
};
