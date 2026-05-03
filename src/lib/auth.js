import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongo";

export const auth = betterAuth({
  database: mongodbAdapter(async () => {
    const client = await clientPromise;
    return client.db("online-book-browsing-platform");
  }),

  emailAndPassword: {
    enabled: true,
  },
});