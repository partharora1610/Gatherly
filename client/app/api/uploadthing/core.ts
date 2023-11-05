import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
import { auth } from "@clerk/nextjs";

const handleAuth = () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error();
  }
  return { userId: userId };
};

export const ourFileRouter = {
  serverImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      console.log("File upload completed...");
    }),

  messageFile: f(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      console.log("File upload completed...");
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
