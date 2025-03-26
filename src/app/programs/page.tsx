import Link from "next/link";
import Layout from "@/components/Layout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { GymIcon, NutritionIcon, LifestyleIcon } from "@/components/ui/Icon";

export const metadata = {
  title: "Programs - Millen Fitness",
  description: "Free fitness programs and resources from Millen Fitness",
};

// Re-using the same data structure
const programs = [
  {
    id: "strength-fundamentals",
    title: "Strength Fundamentals",
    category: "gym",
    description:
      "A 12-week program focused on building foundational strength with compound movements.",
    icon: <GymIcon size={24} className="text-accent" />,
  },
  {
    id: "hypertrophy-basics",
    title: "Hypertrophy Basics",
    category: "gym",
    description:
      "An 8-week program designed to maximize muscle growth with volume-focused training.",
    icon: <GymIcon size={24} className="text-accent" />,
  },
  {
    id: "fat-loss-nutrition",
    title: "Fat Loss Nutrition Guide",
    category: "nutrition",
    description:
      "A comprehensive guide to sustainable fat loss with flexible dieting principles.",
    icon: <NutritionIcon size={24} className="text-accent" />,
  },
  {
    id: "muscle-building-meals",
    title: "Muscle Building Meal Plan",
    category: "nutrition",
    description:
      "A 4-week meal plan designed to support muscle growth while minimizing fat gain.",
    icon: <NutritionIcon size={24} className="text-accent" />,
  },
  {
    id: "weekend-warrior",
    title: "Weekend Warrior Guide",
    category: "lifestyle",
    description:
      "Learn how to balance social events and fitness goals without compromising either.",
    icon: <LifestyleIcon size={24} className="text-accent" />,
  },
  {
    id: "habit-formation",
    title: "Habit Formation System",
    category: "lifestyle",
    description:
      "A step-by-step system for building sustainable fitness habits that last a lifetime.",
    icon: <LifestyleIcon size={24} className="text-accent" />,
  },
];

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-6 pt-16 pb-6">
        <Link
          href="/#programs" // Link back to the programs section on home
          className="inline-flex items-center text-accent hover:underline"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>

      <Section
        title="All Programs"
        subtitle="Download these resources to kickstart your fitness journey"
        className="pt-0" // Remove top padding as it's handled above
      >
        {/* Optional: Add filters if needed later */}
        {/* <div className="mb-8 flex justify-center"> ... filters ... </div> */}

        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-highlight/10 rounded-full">
            <button className="px-4 py-2 rounded-full bg-accent text-background">
              All
            </button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">
              Gym
            </button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">
              Nutrition
            </button>
            <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">
              Lifestyle
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(
            (
              program // Map over all programs
            ) => (
              <div
                key={program.id}
                className="bg-background border border-accent/20 rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 bg-highlight/10 p-2 rounded-full">
                    {program.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {program.title}
                </h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {program.description}
                </p>
                <Button
                  href={`/programs/${program.id}`}
                  variant="outline"
                  className="w-full text-gray-800 dark:text-white"
                >
                  Download PDF
                </Button>
              </div>
            )
          )}
        </div>
      </Section>
    </Layout>
  );
}
