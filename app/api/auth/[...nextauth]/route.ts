// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import { handlers } from "@/auth";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   pages: {
//     signIn: "/login", // 로그인 페이지 경로
//   },
//   session: {
//     strategy: "jwt", // JWT 세션 전략 사용
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id; // 사용자 ID를 토큰에 추가
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id; // 세션에 사용자 ID 추가
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

export const { GET, POST } = handlers;
