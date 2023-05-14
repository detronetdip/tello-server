import { prisma } from "../prisma_connection";

export const userPost = async (postData: {
  userId: string;
  text: string;
  imageUrl?: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      id: postData.userId,
    },
  });
  const post = await prisma.post.create({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    data: {
      content: postData.text,
      media: postData.imageUrl,
      userId: user.id,
      type:
        postData.imageUrl && postData.text
          ? "MEDIA_WITH_CONTENT_ONLY"
          : postData.imageUrl && !postData.text
          ? "MEDIA_ONLY"
          : "CONTENT_ONLY",
    },
  });
  return post;
};
