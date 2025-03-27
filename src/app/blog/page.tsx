// This is now a Server Component

import React from 'react'; // Keep React import for JSX
import Link from 'next/link';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { GymIcon, NutritionIcon, LifestyleIcon } from '@/components/ui/Icon'; // Import Icons here
import BlogListClient from '@/components/blog/BlogListClient'; // Import the new Client Component

// Metadata export remains here
export const metadata = {
  title: 'Blog - Millen Fitness',
  description: 'Fitness tips, insights, and advice from Millen Fitness',
};

// Define the structure of a blog post (can be shared or defined elsewhere)
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Keep content if needed for future server-side rendering, otherwise remove
  date: string;
  category: string;
  icon: React.JSX.Element; // Icon elements are defined here
  imageUrl: string;
}

// Define the blog posts data here in the Server Component
const allBlogPosts: BlogPost[] = [
    {
    id: 'nutrition-myths',
    title: 'Top 5 Nutrition Myths Debunked',
    excerpt: 'Separating fact from fiction when it comes to nutrition advice and diet trends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'March 15, 2025',
    category: 'nutrition',
    icon: <NutritionIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
  {
    id: 'workout-efficiency',
    title: 'Maximizing Workout Efficiency',
    excerpt: 'How to get the most out of your gym sessions with less time and more results.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'March 8, 2025',
    category: 'gym',
    icon: <GymIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
  {
    id: 'weekend-balance',
    title: 'Balancing Fitness and Social Life',
    excerpt: 'Strategies for maintaining your fitness goals while enjoying your weekends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 28, 2025',
    category: 'lifestyle',
    icon: <LifestyleIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
  {
    id: 'protein-intake',
    title: 'Optimal Protein Intake for Muscle Growth',
    excerpt: 'Understanding how much protein you really need for building muscle effectively.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 20, 2025',
    category: 'nutrition',
    icon: <NutritionIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
  {
    id: 'cardio-myths',
    title: 'Cardio Myths That Need to Die',
    excerpt: 'Common misconceptions about cardiovascular exercise and what science actually says.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 15, 2025',
    category: 'gym',
    icon: <GymIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
  {
    id: 'mindful-eating',
    title: 'The Power of Mindful Eating',
    excerpt: 'How being present during meals can transform your relationship with food.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 5, 2025',
    category: 'lifestyle',
    icon: <LifestyleIcon size={20} className="text-accent" />, // Define icon element
    imageUrl: '/blog/blog-example.jpg',
  },
];

export default function BlogPage() {
  // This component now only renders the layout and passes data down
  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-6 pt-16 pb-6">
        <Link
          href="/#blog"
          className="inline-flex items-center text-accent hover:underline"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>

      <Section
        title="All Blog Posts"
        subtitle="Latest tips, insights, and advice to help you on your fitness journey"
        className="pt-0"
      >
        {/* Render the Client Component and pass the posts data */}
        <BlogListClient initialPosts={allBlogPosts} />
      </Section>
    </Layout>
  );
}
