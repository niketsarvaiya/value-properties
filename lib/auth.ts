import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Mock users — replace with DB lookup later
const MOCK_USERS = [
  { id: "u1", email: "sreeja@valueproperties.in", name: "Sreeja", password: "sreeja2024", role: "ADMIN" },
  { id: "u2", email: "client@demo.com", name: "Demo Client", password: "demo123", role: "CLIENT" },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = MOCK_USERS.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user) return null;

        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string; id?: string }).role = token.role as string;
        (session.user as { role?: string; id?: string }).id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
});
