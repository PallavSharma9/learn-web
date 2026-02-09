import { databases } from "@/lib/appwrite";

const DATABASE_ID = import.meta.env.VITE_DB_ID;
const TABLE_ID = import.meta.env.VITE_COURSE_TABLE_ID;

export const getCourses = async () => {
  const res = await databases.listDocuments(DATABASE_ID, TABLE_ID);

  return res.documents;
};
