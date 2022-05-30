import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiCall from "../../../utils/apiCall";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };
        try {
          const result = apiCall.post("user/login", payload);
          const userData = (await result).data;
          console.log("userData -->", userData);
        } catch (error) {
          console.log("NextAuth Api Error -->", error);
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
});
