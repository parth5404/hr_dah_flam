import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
providers: [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Username" },
      password: { label: "Password", type: "password" , placeholder: "Password"}
    },
    async authorize(credentials, req) {
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      //console.log(credentials);
      if (user) {
        return user
      } else {
        return null
      }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
