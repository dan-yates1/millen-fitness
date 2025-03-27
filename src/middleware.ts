// src/middleware.ts
import { withAuth } from "next-auth/middleware"

// withAuth provides middleware protection out-of-the-box
// It redirects unauthenticated users to the sign-in page
export default withAuth({
  // Optional: Add callbacks for more control if needed
  // callbacks: {
  //   authorized: ({ token }) => {
  //     // Example: Check for a specific role or claim in the token
  //     // return !!token && token.role === "admin"
  //     return !!token // Basic check: is the user logged in?
  //   }
  // },
  // Optional: Specify custom login page if not using default
  // pages: {
  //   signIn: '/auth/signin',
  // }
})

// Matcher configures which paths the middleware applies to
export const config = {
  matcher: [
    "/admin/:path*", // Protect the admin route and any sub-paths
    // Add other protected routes here if needed
    // "/dashboard/:path*",
  ],
}
