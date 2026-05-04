

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise, { client } from "./mongo";
const db = client.db('online-book-browsing-platform')
export const auth = betterAuth({
  // database: mongodbAdapter(async () => {
  //   const client = await clientPromise;
  //   return client.db("online-book-browsing-platform");
  // }),
  database: mongodbAdapter(db, {
    client
    
  }),
  emailAndPassword: {
    enabled: true,
  },

   socialProviders: {
        google: { 
            enabled: true,
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});