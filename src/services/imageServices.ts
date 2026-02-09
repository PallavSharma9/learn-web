import { storage } from "@/lib/appwrite";

const BUCKET_ID = import.meta.env.VITE_BUCKET_ID;

export const getImageUrl = (fileId: string) => {
  return storage.getFileView(BUCKET_ID, fileId);
};
