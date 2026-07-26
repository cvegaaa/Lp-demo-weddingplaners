import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Packages from '@/components/sections/Packages';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
