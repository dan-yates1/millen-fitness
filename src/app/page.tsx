import type { Metadata } from "next";
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Programs from '@/components/sections/Programs';
import Testimonials from '@/components/sections/Testimonials';
import InstagramFeed from '@/components/sections/InstagramFeed'; // Import InstagramFeed
import Contact from '@/components/sections/Contact';
import Script from 'next/script'; // Import Script component

// Define specific metadata for the homepage
export const metadata: Metadata = {
  title: "Millen Fitness | Online Transformation Coach | Get Lean", // More specific title
  description:
    "Transform your body with Millen Galliven, online coach specializing in sustainable fat loss without sacrificing your lifestyle. Personalized plans & support.", // Slightly refined description
  keywords: ["online coach", "transformation coach", "fat loss", "get lean", "fitness", "meal planning", "gym programs", "Millen Galliven"],
  openGraph: {
    title: "Millen Fitness | Online Transformation Coach | Get Lean",
    description: "Sustainable fat loss coaching by Millen Galliven. Achieve your fitness goals without extreme diets.",
    url: "https://millen-fitness.vercel.app/", // Replace with your actual domain
    siteName: "Millen Fitness",
    images: [
      {
        url: "https://millen-fitness.vercel.app/logo.svg", // Replace with a relevant OG image URL
        width: 1200, // Example width
        height: 630, // Example height
        alt: "Millen Fitness Logo",
      },
    ],
    locale: "en_GB", // Or en_US, etc.
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millen Fitness | Online Transformation Coach | Get Lean",
    description: "Sustainable fat loss coaching by Millen Galliven. Achieve your fitness goals without extreme diets.",
    // siteId: "@YourTwitterHandle", // Add your Twitter handle if available
    // creator: "@YourTwitterHandle",
    images: ["https://millen-fitness.vercel.app/logo.svg"], // Replace with a relevant Twitter image URL
  },
  // Add other metadata fields as needed, e.g., alternates for different languages
  // alternates: {
  //   canonical: "https://www.millenfitness.com",
  // },
};


export default function Home() {
  return (
    <> {/* Add React Fragment wrapper */}
    <Layout>
      <Hero />
      <About />
      <Services />
      <Programs />
      <Testimonials />
      {/* <Blog /> */}
      <InstagramFeed />
      <Contact />
    </Layout>
    {/* Add JSON-LD Schema Markup */}
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness", // Or use "ProfessionalService" or "HealthAndBeautyBusiness" if more specific
          "name": "Millen Fitness",
          "image": "https://millen-fitness.vercel.app/logo.svg", // Replace with your logo URL
          "@id": "https://millen-fitness.vercel.app", // Replace with your domain
          "url": "https://millen-fitness.vercel.app", // Replace with your domain
          "telephone": "+440000000000", // Replace with your actual phone number if applicable
          "description": metadata.description, // Use description from metadata
          "address": { // Add address if you have a physical location, otherwise omit or use virtual location
            "@type": "PostalAddress",
            "streetAddress": "", // e.g., "123 Fitness Lane"
            "addressLocality": "", // e.g., "London"
            "postalCode": "", // e.g., "SW1A 0AA"
            "addressCountry": "GB" // Or relevant country code
          },
          "openingHoursSpecification": [ // Optional: Add if you have specific hours
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [ // Add links to social media profiles
            "https://www.instagram.com/millenfitness/"
            // Add other profiles like Facebook, LinkedIn, etc.
          ]
        }),
      }}
    />
    </> // Close React Fragment wrapper
  );
}
