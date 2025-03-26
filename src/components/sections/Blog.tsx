import Section from '../ui/Section';
import Button from '../ui/Button';
import { GymIcon, NutritionIcon, LifestyleIcon } from '../ui/Icon';

const Blog = () => {
  const blogPosts = [
    {
      id: 'nutrition-myths',
      title: 'Top 5 Nutrition Myths Debunked',
      excerpt: 'Separating fact from fiction when it comes to nutrition advice and diet trends.',
      date: 'March 15, 2025',
      category: 'nutrition',
      icon: <NutritionIcon size={20} className="text-accent" />,
    },
    {
      id: 'workout-efficiency',
      title: 'Maximizing Workout Efficiency',
      excerpt: 'How to get the most out of your gym sessions with less time and more results.',
      date: 'March 8, 2025',
      category: 'gym',
      icon: <GymIcon size={20} className="text-accent" />,
    },
    {
      id: 'weekend-balance',
      title: 'Balancing Fitness and Social Life',
      excerpt: 'Strategies for maintaining your fitness goals while enjoying your weekends.',
      date: 'February 28, 2025',
      category: 'lifestyle',
      icon: <LifestyleIcon size={20} className="text-accent" />,
    },
  ];

  return (
    <Section
      id="blog"
      title="Fitness Blog"
      subtitle="Latest tips, insights, and advice to help you on your fitness journey"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <span className="text-xs text-gray-600">{post.date}</span>
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
      
      <div className="mt-10 text-center">
        <Button href="/blog" variant="primary">
          View All Posts
        </Button>
      </div>
    </Section>
  );
};

export default Blog;
