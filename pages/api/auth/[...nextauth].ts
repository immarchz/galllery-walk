import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "212046405718-q27da2u3ri4lmgjq454soc3d5eor9d1i.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
