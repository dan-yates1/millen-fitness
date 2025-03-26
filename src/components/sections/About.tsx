import Section from '../ui/Section';
import { GymIcon, NutritionIcon, LifestyleIcon } from '../ui/Icon';

const About = () => {
  return (
    <Section
      id="about"
      title="About Millen"
      subtitle="Fitness trainer and online transformation coach"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            As a dedicated fitness professional, I&apos;m passionate about helping people transform their bodies and lives through sustainable fitness and nutrition practices.
          </p>
          <p className="text-lg mb-6">
            My approach is centered around creating personalized plans that fit into your lifestyle, not the other way around. I believe that fitness should enhance your life, not restrict it.
          </p>
          <p className="text-lg font-medium">
            My philosophy is simple: You can achieve your fitness goals without sacrificing your social life or the foods you love. It&apos;s all about balance and making smart choices.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-highlight/20 p-3 rounded-full mr-4">
              <GymIcon size={28} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Gym Expertise</h3>
              <p>
                Specialized training programs designed to maximize results while minimizing time in the gym. Efficient workouts that fit your schedule.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-highlight/20 p-3 rounded-full mr-4">
              <NutritionIcon size={28} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Nutrition Knowledge</h3>
              <p>
                Flexible meal plans that allow you to enjoy your favorite foods while still reaching your goals. No more restrictive diets.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-highlight/20 p-3 rounded-full mr-4">
              <LifestyleIcon size={28} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Lifestyle Balance</h3>
              <p>
                Learn how to maintain your progress while still enjoying social events, weekends, and holidays. Fitness that fits into your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
