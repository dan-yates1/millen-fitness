import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/hero-bg-2.jpeg')` }}
    >
      {/* Dark overlay for the background image */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-3xl text-white">
          {" "}
          {/* Ensure text is white for readability */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Body,{" "}
            <span className="text-accent">Transform Your Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            I help people stay lean without sacrificing their weekend. Online
            coaching, meal planning, and gym programs tailored to your
            lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/#services" variant="secondary" size="lg">
              Explore Services
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              size="lg"
              className="text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
