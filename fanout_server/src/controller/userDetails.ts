import { prisma } from "../prisma_connection/index";

export const userDetails = async (
  _parrent: any,
  _args: any,
  _context: any,
  _info: any
) => {
  const data = await prisma.user.findFirst({
    where: {
      id: _args.uid,
    },
    include: {
      followers: {
        where: {
          isAccepted: true,
        },
        
        include: {
          follower: true,
        },
      },
    },
  });
  return data;
};
