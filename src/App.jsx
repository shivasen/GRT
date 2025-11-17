import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import PopularTours from './components/PopularTours';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <PopularTours />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
