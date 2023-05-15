import { getDataFromSET, setDataToSET } from "../cache";
import { prisma } from "../prisma_connection";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const generateNewsFeed = async ({ userId, id }) => {
  const friendsCaheKey = `FRIENDS-${userId}`;
  let friends = await getDataFromSET(friendsCaheKey);
  if (friends.length===0) {
    const myFriends = await prisma.friends.findMany({
      where: {
        AND: [{ isAccepted: true }, { OR: [{ userId }, { friendId: userId }] }],
      },
    });
    friends = myFriends.map((e) =>
      e.userId === userId ? e.friendId : e.userId
    );
    await setDataToSET(friendsCaheKey,friends,30);
    
  }
};
