import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Programs from '@/components/sections/Programs';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Programs />
      <Testimonials />
      <Blog />
      <Contact />
    </Layout>
  );
}
