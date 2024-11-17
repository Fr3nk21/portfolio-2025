import ScrollingCarousel from '@/components/ui/carousel';
import ScrollSection from '@/components/layout/scrollSection';
import HeroSection from '@/components/layout/heroSection';
import TextSection from '@/components/layout/textSection';
import LogosSection from '@/components/layout/logosSection';
import ImageLeftSection from '@/components/layout/imageLeft';
import TestimonialSection from '@/components/layout/testimonialSection';
import ContactSection from '@/components/layout/contactSection';

export default function Home() {
  return (
    <main className="no-scrollbar relative w-full overflow-x-hidden bg-black">
      <div className="mx-auto max-w-[1920px]">
        {/* SECTION 1 */}
        <HeroSection />

        {/* SECTION 2 */}
        <TextSection />

        {/* SECTION 3 */}
        <ScrollingCarousel />

        {/* SECTION 4 */}
        <LogosSection />

        {/* SECTION 5 */}
        <ImageLeftSection />

        {/* SECTION 6 */}
        <ScrollSection />

        {/* SECTION 7 */}
        <TestimonialSection />

        {/* SECTION 8 */}
        <TextSection />

        {/* SECTION 9 */}
        <ScrollingCarousel />

        {/* SECTION 10 */}
        <ContactSection />
      </div>
    </main>
  );
}
