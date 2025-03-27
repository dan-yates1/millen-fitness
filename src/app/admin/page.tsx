 import Layout from "@/components/Layout";
 import Section from "@/components/ui/Section";
 // getServerSession is not used currently, remove import
 // Import your NextAuth options if they are in a separate file, otherwise use the handler directly
 // import { authOptions } from "@/app/api/auth/[...nextauth]/route" // Assuming you might extract options later

// Note: We will protect this page using Middleware later.
// This component itself doesn't need to be a Client Component for basic display.

export default async function AdminPage() {
  // Optional: Fetch session on the server to display user info if needed
  // const session = await getServerSession(authOptions); // Use if options are extracted
  // For now, we know it's protected, so just display content.

  return (
    <Layout>
      <Section title="Admin Dashboard" subtitle="Manage website content">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Admin!</h2>
          <p className="mb-4">
            This is the protected admin area. You can add content management features here later.
          </p>
          {/* Example: Display user info if session fetched */}
          {/* {session && (
            <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800">
              {JSON.stringify(session, null, 2)}
            </pre>
          )} */}

          {/* TODO: Add links/components for managing Blog, Programs, etc. */}
        </div>
      </Section>
    </Layout>
  );
}
