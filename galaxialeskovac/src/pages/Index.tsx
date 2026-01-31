import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AttractionsSection from '@/components/AttractionsSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import WhyUsSection from '@/components/WhyUsSection';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen relative">
      {/* Background star field */}
      <StarField />
      
      {/* Navigation */}
      <Navbar onBookingClick={openBooking} />
      
      {/* Main content */}
      <main>
        <HeroSection onBookingClick={openBooking} />
        <ExperienceSection />
        <AttractionsSection />
        <PackagesSection onBookingClick={openBooking} />
        <TestimonialsSection />
        <WhyUsSection />
        <GallerySection />
        <FAQSection />
        <CTABanner onBookingClick={openBooking} />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Modal */}
      <BookingForm isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Index;
