"use client";

import { FormEvent, useState } from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { EmailIcon, InstagramIcon } from "../ui/Icon";

type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      // Optionally reset the form
      // e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred.");
      console.error("Form submission error:", error);
    }
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
                name="name" // Add name attribute
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Your name"
                required
                disabled={status === "submitting"}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Add name attribute
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="your.email@example.com"
                required
                disabled={status === "submitting"}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject" // Add name attribute
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                required
                disabled={status === "submitting"}
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
                name="message" // Add name attribute
                rows={5}
                className="w-full px-4 py-2 bg-highlight/5 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Tell me about your fitness goals..."
                required
                disabled={status === "submitting"}
              ></textarea>
            </div>

            {status === "success" && (
              <p className="mb-4 text-green-600 bg-green-100 border border-green-300 p-3 rounded-lg">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mb-4 text-red-600 bg-red-100 border border-red-300 p-3 rounded-lg">
                Error: {errorMessage || "Could not send message."}
              </p>
            )}

            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
