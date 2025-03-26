"use client";

import { FormEvent } from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { EmailIcon, InstagramIcon } from "../ui/Icon";

const Contact = () => {
  // This is a placeholder function - in a real implementation, this would handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have questions or ready to start your fitness journey? Reach out today!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="mb-6">
            Ready to transform your body and life? Fill out the form or contact
            me directly through one of the channels below.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="bg-highlight/20 p-3 rounded-full mr-4">
                <EmailIcon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:contact@millenfitness.com"
                  className="text-accent hover:underline"
                >
                  contact@millenfitness.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-highlight/20 p-3 rounded-full mr-4">
                <InstagramIcon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium">Instagram</h4>
                <a
                  href="https://www.instagram.com/millenfitness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @millenfitness
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background border border-accent/20 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-3">Response Time</h4>
            <p>
              I typically respond to all inquiries within 24-48 hours. For
              urgent matters, please reach out via Instagram DM.
            </p>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-background border border-accent/20 rounded-lg p-6 shadow-sm"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                required
              >
                <option value="">Select a subject</option>
                <option value="online-coaching">Online Coaching</option>
                <option value="meal-planning">Meal Planning</option>
                <option value="gym-programs">Gym Programs</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Tell me about your fitness goals..."
                required
              ></textarea>
            </div>

            <Button type="submit" variant="secondary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
