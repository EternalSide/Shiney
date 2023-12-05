import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
      adapter: PrismaAdapter(prisma),
      providers: [
            GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID as string,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }),
      ],
      debug: process.env.NODE_ENV === "development",
      session: {
            strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
