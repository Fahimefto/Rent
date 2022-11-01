import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const res = await axios.post("http://localhost:5000/user/login", {
              email: credentials.email,
              password: credentials.password,
            });

            const cookie = res.headers["access-token"];
            res.setHeader("access-token", cookie);

            return res.data;
          } catch (error) {
            console.log(error);
            throw new Error("Invalid email or password");
          }
        },
      }),
    ],
  };
};

export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
