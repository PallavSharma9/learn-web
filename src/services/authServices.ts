import { account } from "@/lib/appwrite";
import { ID } from "appwrite";

export const signup = async (email: string, password: string, name: string) => {
  await account.create(ID.unique(), email, password, name);
};

export const login = async (email: string, password: string) => {
  return await account.createEmailPasswordSession(email, password);
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};

export const logout = async () => {
  await account.deleteSession("current");
};
