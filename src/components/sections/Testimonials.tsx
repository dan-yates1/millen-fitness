import Image from "next/image"; // Import Image component
import Section from "../ui/Section";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      text: "Working with Millen completely changed my approach to fitness. His program allowed me to enjoy my social life while still making incredible progress. I lost 15kg in 6 months without ever feeling like I was on a diet.",
      image: "/testimonials/placeholder-1.jpg", // Placeholder image path
    },
    {
      id: 2,
      name: "Mark T.",
      text: "As someone who has tried countless fitness programs, Millen&apos;s approach stands out. The workouts are efficient, the nutrition plan is flexible, and the results speak for themselves. I&apos;ve gained significant muscle while maintaining a lifestyle I enjoy.",
      image: "/testimonials/placeholder-2.jpg", // Placeholder image path
    },
    {
      id: 3,
      name: "Emma R.",
      text: "I was skeptical about online coaching at first, but Millen proved me wrong. His attention to detail and consistent check-ins kept me accountable. The meal plans were easy to follow and I never felt deprived. Highly recommend!",
      image: "/testimonials/placeholder-3.jpg", // Placeholder image path
    },
  ];

  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="Real results from real people following my programs"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-background border border-accent/20 rounded-lg p-6 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-highlight/20 mb-4 overflow-hidden">
                {/* Placeholder for testimonial image */}
                <div className="w-full h-full bg-highlight/40 flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-800 ">
                {testimonial.name}
              </h3>
              <div className="mb-4 text-accent font-bold">
                {/* Star rating */}
                <span>★★★★★</span>
              </div>
              <p className="italic text-gray-700 ">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Transformation Card 1 */}
          <div className="bg-background border border-accent/20 rounded-lg overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9 w-full h-64"> {/* Added relative positioning */}
              <Image
                src="/testimonials/transformation-1.jpg"
                alt="Before and after photo showing client's 12-week body transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-medium text-gray-800">
                12-Week Transformation
              </p>
              <p className="text-accent text-sm">
                Results from the Strength Fundamentals program
              </p>
            </div>
          </div>
          {/* Transformation Card 2 */}
          <div className="bg-background border border-accent/20 rounded-lg overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9 w-full h-64"> {/* Added relative positioning */}
              <Image
                src="/testimonials/transformation-2.jpg"
                alt="Before and after photo showing client's 8-week body transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-medium text-gray-800">
                8-Week Transformation
              </p>
              <p className="text-accent text-sm">
                Results from the Fat Loss Nutrition Guide
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
