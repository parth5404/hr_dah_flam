import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
providers: [
  CredentialsProvider({
    name: "Credentials (Guest)",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Guest" },
      password: { label: "Password", type: "password" , placeholder: "Guest"}
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
