import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(); // এখানে ব্র্যাকেট খালি রাখুন, সে URI থেকে নাম নিয়ে নিবে

export const auth = betterAuth({
    database: mongodbAdapter(db), 
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL
});