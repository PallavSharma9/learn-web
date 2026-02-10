import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_DB_ID;
const SYLLABUS_TABLE_ID = import.meta.env.VITE_SYLLABUS_TABLE_ID;

export const getSyllabusByCourse = async (courseId: string) => {
  const res = await databases.listDocuments(DATABASE_ID, SYLLABUS_TABLE_ID, [
    Query.equal("courseId", courseId),
    Query.orderAsc("order"),
  ]);

  return res.documents;
};
