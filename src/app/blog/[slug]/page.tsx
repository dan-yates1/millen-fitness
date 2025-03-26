"use client";

"use client";

import { useParams } from "next/navigation";
import Image from "next/image"; // Import the Image component
import Layout from "@/components/Layout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { GymIcon, NutritionIcon, LifestyleIcon } from "@/components/ui/Icon";
import Link from "next/link";

// Sample blog posts data (in a real app, this would come from a database or CMS)
const blogPosts = [
  {
    id: "nutrition-myths",
    title: "Top 5 Nutrition Myths Debunked",
    excerpt:
      "Separating fact from fiction when it comes to nutrition advice and diet trends.",
    content: `
      <h2>Myth #1: Carbs Are Bad For You</h2>
      <p>Contrary to popular belief, carbohydrates are not inherently bad for you. They are actually your body's preferred source of energy. The key is choosing the right types of carbs - whole grains, fruits, vegetables, and legumes provide essential nutrients and fiber.</p>
      
      <h2>Myth #2: Eating Fat Makes You Fat</h2>
      <p>Dietary fat doesn't automatically turn into body fat. In fact, healthy fats are essential for hormone production, brain health, and nutrient absorption. Focus on unsaturated fats from sources like avocados, nuts, seeds, and olive oil.</p>
      
      <h2>Myth #3: You Need to Eat Every 2-3 Hours</h2>
      <p>There's no scientific evidence that eating frequent small meals boosts your metabolism. What matters most is your total daily calorie intake, not the timing or frequency of your meals.</p>
      
      <h2>Myth #4: Detox Diets Cleanse Your Body</h2>
      <p>Your body has its own detoxification system - your liver and kidneys. No juice cleanse or detox tea can do a better job than these organs. The best way to support your body's natural detox processes is to eat a balanced diet, stay hydrated, and limit alcohol and processed foods.</p>
      
      <h2>Myth #5: All Calories Are Created Equal</h2>
      <p>While calorie balance matters for weight management, the source of those calories also matters. 200 calories from broccoli affects your body differently than 200 calories from candy due to differences in nutrients, fiber content, and how your body processes them.</p>
    `,
    date: "March 15, 2025",
    category: "nutrition",
    icon: <NutritionIcon size={20} className="text-accent" />,
    imageUrl: "/blog/blog-example.jpg", // Add image URL
  },
  {
    id: "workout-efficiency",
    title: "Maximizing Workout Efficiency",
    excerpt:
      "How to get the most out of your gym sessions with less time and more results.",
    content: `
      <h2>Focus on Compound Movements</h2>
      <p>Compound exercises like squats, deadlifts, bench press, and pull-ups work multiple muscle groups simultaneously, giving you more bang for your buck. They also burn more calories and stimulate more muscle growth than isolation exercises.</p>
      
      <h2>Implement Progressive Overload</h2>
      <p>To continue making progress, you need to gradually increase the demands on your body. This could mean adding weight, increasing reps, reducing rest time, or improving form. Track your workouts to ensure you're progressing.</p>
      
      <h2>Optimize Rest Periods</h2>
      <p>For strength training, rest 2-3 minutes between sets. For hypertrophy (muscle building), 60-90 seconds is optimal. For endurance or circuit training, keep rest periods under 30 seconds. Using a timer can help you stay on track.</p>
      
      <h2>Consider Supersets and Circuit Training</h2>
      <p>Pairing exercises that work different muscle groups (supersets) or performing a series of exercises with minimal rest (circuit training) can help you accomplish more work in less time while keeping your heart rate elevated.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>A focused 30-minute workout with proper form and intensity will yield better results than an unfocused hour of exercise. Be present, minimize distractions, and make every rep count.</p>
    `,
    date: "March 8, 2025",
    category: "gym",
    icon: <GymIcon size={20} className="text-accent" />,
    imageUrl: "/blog/blog-example.jpg", // Add image URL
  },
  {
    id: "weekend-balance",
    title: "Balancing Fitness and Social Life",
    excerpt:
      "Strategies for maintaining your fitness goals while enjoying your weekends.",
    content: `
      <h2>Plan Ahead</h2>
      <p>If you know you&apos;ll be going out for dinner or drinks, adjust your nutrition earlier in the day. This doesn&apos;t mean starving yourself, but rather making mindful choices that allow flexibility later.</p>
      
      <h2>Choose Your Indulgences Wisely</h2>
      <p>Instead of saying "yes" to everything, be selective about what's truly worth it to you. Maybe skip the bread basket if you're really looking forward to dessert, or have a few drinks you really enjoy rather than mindlessly consuming whatever's available.</p>
      
      <h2>Stay Active in Social Settings</h2>
      <p>Suggest activities that keep you moving - a hike with friends, dancing, bowling, or a recreational sports game. You'll maintain your fitness while creating memorable experiences.</p>
      
      <h2>Practice the 80/20 Rule</h2>
      <p>If you're consistent with your nutrition and training 80% of the time, the other 20% won't significantly impact your results. This sustainable approach prevents the all-or-nothing mentality that leads to giving up.</p>
      
      <h2>Recover Effectively</h2>
      <p>If you do overindulge, don't punish yourself with extreme restriction or excessive exercise. Instead, focus on hydration, protein intake, and getting back to your regular routine with your next meal or workout.</p>
    `,
    date: "February 28, 2025",
    category: "lifestyle",
    icon: <LifestyleIcon size={20} className="text-accent" />,
    imageUrl: "/blog/blog-example.jpg", // Add image URL
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.id === slug);

  // If no matching post is found, show a message
  if (!post) {
    return (
      <Layout>
        <Section className="pt-162">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
            <Button href="/blog" variant="secondary">
              Back to Blog
            </Button>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section className="pt-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-accent hover:underline mb-6"
          >
            <span className="mr-2">←</span> Back to Blog
          </Link>

          {/* Blog post header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="mr-2">{post.icon}</div>
              <span className="text-sm uppercase tracking-wider text-accent font-medium">
                {post.category}
              </span>
              <span className="mx-2 text-accent">•</span>
              <span className="text-sm text-accent">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {post.title}
            </h1>
            <p className="text-xl text-gray-700">
              {post.excerpt}
            </p>
          </div>

          {/* Featured image */}
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 rounded-lg mb-8 overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}

          {/* Blog post content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-accent prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author section */}
          <div className="mt-12 p-6 bg-highlight/5 rounded-lg border border-accent/10">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-highlight/20 mr-4 flex items-center justify-center">
                <span className="text-xl font-bold">MF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Millen Galliven</h3>
                <p className="text-accent">
                  Fitness Trainer & Online Transformation Coach
                </p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(
                  (relatedPost) =>
                    relatedPost.id !== post.id &&
                    relatedPost.category === post.category
                )
                .slice(0, 2)
                .map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-background border border-accent/20 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2">{relatedPost.icon}</div>
                      <span className="text-xs uppercase tracking-wider text-accent">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {relatedPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-accent hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
