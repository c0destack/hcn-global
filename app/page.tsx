import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { About } from '@/components/sections/About';
import { Clients } from '@/components/sections/Clients';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyUs } from '@/components/sections/WhyUs';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
