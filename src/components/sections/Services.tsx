import Section from '../ui/Section';
import Button from '../ui/Button';
import { GymIcon, NutritionIcon, LifestyleIcon } from '../ui/Icon';

const Services = () => {
  const services = [
    {
      id: 'online-coaching',
      title: 'Online Coaching',
      description: 'Personalized training and nutrition guidance with regular check-ins and adjustments based on your progress.',
      icon: <LifestyleIcon size={32} className="text-accent" />,
      features: [
        'Custom workout programs',
        'Nutrition guidance',
        'Weekly check-ins',
        'Form correction',
        'Progress tracking',
      ],
    },
    {
      id: 'meal-planning',
      title: 'Meal Planning',
      description: 'Flexible meal plans designed around your preferences and lifestyle that help you reach your goals without feeling restricted.',
      icon: <NutritionIcon size={32} className="text-accent" />,
      features: [
        'Personalized meal plans',
        'Calorie and macro targets',
        'Grocery shopping lists',
        'Recipe suggestions',
        'Dining out guidelines',
      ],
    },
    {
      id: 'gym-programs',
      title: 'Gym Programs',
      description: 'Structured workout programs that focus on progressive overload and efficient training to maximize your results.',
      icon: <GymIcon size={32} className="text-accent" />,
      features: [
        'Strength training',
        'Hypertrophy focus',
        'Exercise demonstrations',
        'Progression strategies',
        'Workout tracking tools',
      ],
    },
  ];

  return (
    <Section
      id="services"
      title="My Services"
      subtitle="Tailored fitness solutions to help you reach your goals"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-background border border-accent/20 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium mb-3 text-gray-800">What&apos;s included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="mr-2 text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                <Button href={`/#${service.id}`} variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
