// This is now a Server Component

import React from 'react'; // Keep React import for JSX
import Link from "next/link";
import Layout from "@/components/Layout";
import Section from "@/components/ui/Section";
import { GymIcon, NutritionIcon, LifestyleIcon } from "@/components/ui/Icon"; // Import Icons here
import ProgramListClient from '@/components/programs/ProgramListClient'; // Import the new Client Component

// Metadata export remains here
export const metadata = {
  title: "Programs - Millen Fitness",
  description: "Free fitness programs and resources from Millen Fitness",
};

// Define the structure of a program
interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.JSX.Element; // Icon elements are defined here
}

// Define the programs data here in the Server Component
const allPrograms: Program[] = [
  {
    id: "strength-fundamentals",
    title: "Strength Fundamentals",
    category: "gym",
    description:
      "A 12-week program focused on building foundational strength with compound movements.",
    icon: <GymIcon size={24} className="text-accent" />, // Define icon element
  },
  {
    id: "hypertrophy-basics",
    title: "Hypertrophy Basics",
    category: "gym",
    description:
      "An 8-week program designed to maximize muscle growth with volume-focused training.",
    icon: <GymIcon size={24} className="text-accent" />, // Define icon element
  },
  {
    id: "fat-loss-nutrition",
    title: "Fat Loss Nutrition Guide",
    category: "nutrition",
    description:
      "A comprehensive guide to sustainable fat loss with flexible dieting principles.",
    icon: <NutritionIcon size={24} className="text-accent" />, // Define icon element
  },
  {
    id: "muscle-building-meals",
    title: "Muscle Building Meal Plan",
    category: "nutrition",
    description:
      "A 4-week meal plan designed to support muscle growth while minimizing fat gain.",
    icon: <NutritionIcon size={24} className="text-accent" />, // Define icon element
  },
  {
    id: "weekend-warrior",
    title: "Weekend Warrior Guide",
    category: "lifestyle",
    description:
      "Learn how to balance social events and fitness goals without compromising either.",
    icon: <LifestyleIcon size={24} className="text-accent" />, // Define icon element
  },
  {
    id: "habit-formation",
    title: "Habit Formation System",
    category: "lifestyle",
    description:
      "A step-by-step system for building sustainable fitness habits that last a lifetime.",
    icon: <LifestyleIcon size={24} className="text-accent" />, // Define icon element
  },
];

export default function ProgramsPage() {
  // This component now only renders the layout and passes data down
  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-6 pt-16 pb-6">
        <Link
          href="/#programs"
          className="inline-flex items-center text-accent hover:underline"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>

      <Section
        title="All Programs"
        subtitle="Download these resources to kickstart your fitness journey"
        className="pt-0"
      >
        {/* Render the Client Component and pass the programs data */}
        <ProgramListClient initialPrograms={allPrograms} />
      </Section>
    </Layout>
  );
}
