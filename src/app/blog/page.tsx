import Link from 'next/link'; // Import Link
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { GymIcon, NutritionIcon, LifestyleIcon } from '@/components/ui/Icon';

export const metadata = {
  title: 'Blog - Millen Fitness',
  description: 'Fitness tips, insights, and advice from Millen Fitness',
};

const blogPosts = [
  {
    id: 'nutrition-myths',
    title: 'Top 5 Nutrition Myths Debunked',
    excerpt: 'Separating fact from fiction when it comes to nutrition advice and diet trends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'March 15, 2025',
    category: 'nutrition',
    icon: <NutritionIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
  {
    id: 'workout-efficiency',
    title: 'Maximizing Workout Efficiency',
    excerpt: 'How to get the most out of your gym sessions with less time and more results.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'March 8, 2025',
    category: 'gym',
    icon: <GymIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
  {
    id: 'weekend-balance',
    title: 'Balancing Fitness and Social Life',
    excerpt: 'Strategies for maintaining your fitness goals while enjoying your weekends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 28, 2025',
    category: 'lifestyle',
    icon: <LifestyleIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
  {
    id: 'protein-intake',
    title: 'Optimal Protein Intake for Muscle Growth',
    excerpt: 'Understanding how much protein you really need for building muscle effectively.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 20, 2025',
    category: 'nutrition',
    icon: <NutritionIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
  {
    id: 'cardio-myths',
    title: 'Cardio Myths That Need to Die',
    excerpt: 'Common misconceptions about cardiovascular exercise and what science actually says.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 15, 2025',
    category: 'gym',
    icon: <GymIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
  {
    id: 'mindful-eating',
    title: 'The Power of Mindful Eating',
    excerpt: 'How being present during meals can transform your relationship with food.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    date: 'February 5, 2025',
    category: 'lifestyle',
    icon: <LifestyleIcon size={20} className="text-accent" />,
    imageUrl: '/blog/blog-example.jpg', // Add image URL
  },
];

export default function BlogPage() {
  return (
    <Layout>
      {/* Back Link - Moved above Section */}
      <div className="container mx-auto px-6 pt-16 pb-6"> {/* Added container and padding */}
        <Link
          href="/#blog"
          className="inline-flex items-center text-accent hover:underline" // Style matches slug page
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>

      <Section
        title="All Blog Posts" // Updated title
        subtitle="Latest tips, insights, and advice to help you on your fitness journey"
        className="pt-0" // Removed top padding as it's handled above
      >
        {/* Category Filters */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-highlight/10 rounded-full">
            <button className="px-4 py-2 rounded-full bg-accent text-white">All</button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Gym</button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Nutrition</button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Lifestyle</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-background border border-accent/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder for blog post image */}
              <div className="h-48 bg-highlight/10 flex items-center justify-center">
                <span className="text-xl font-bold">Blog Image</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    {post.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <span className="mx-2 text-accent">•</span>
                  <span className="text-xs text-accent">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="mb-4 text-gray-700">{post.excerpt}</p>
                
                <Button href={`/blog/${post.id}`} variant="outline" className="w-full text-gray-800">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Removed Button from here */}
      </Section>
    </Layout>
  );
}
