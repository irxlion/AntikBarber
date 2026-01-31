// import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Signature } from '@/components/sections/Signature';

import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Signature />
        <Gallery />

        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;