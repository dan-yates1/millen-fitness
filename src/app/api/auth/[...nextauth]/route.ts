import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

// Basic configuration for NextAuth
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
         password: { label: "Password", type: "password" }
       },
       async authorize(credentials) { // Remove unused 'req' parameter
         // Add logic here to look up the user from the credentials supplied
         // IMPORTANT: In a real application, NEVER hardcode credentials.
         // Fetch user from a database and compare hashed passwords.
         // For this initial setup, we'll use environment variables.
         // Ensure these environment variables are set!
         const adminUsername = process.env.ADMIN_USERNAME;
         const adminPassword = process.env.ADMIN_PASSWORD;

         if (!adminUsername || !adminPassword) {
           console.error("ADMIN_USERNAME or ADMIN_PASSWORD environment variables are not set.");
           return null; // Prevent login if credentials aren't configured
         }

         if (credentials?.username === adminUsername && credentials?.password === adminPassword) {
           // Any object returned will be saved in `user` property of the JWT
          // You can return custom properties here
          return { id: "1", name: "Admin User", email: "admin@example.com" }; // Dummy user object
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.error("Admin login failed for username:", credentials?.username);
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  // Optional: Add custom pages if needed
  // pages: {
  //   signIn: '/auth/signin',
  // },
  // Optional: Add callbacks for session/jwt customization if needed later
  // callbacks: {
  //   async jwt({ token, user }) {
  //     // Add custom claims to JWT
  //     return token
  //   },
  //   async session({ session, token }) {
  //     // Add custom properties to session
  //     return session
  //   }
  // }
});

export { handler as GET, handler as POST }
