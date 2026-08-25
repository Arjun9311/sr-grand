import { CateringSection } from "@/components/sections/catering-section";
import { FeaturedDishesCarousel } from "@/components/sections/featured-dishes-carousel";
import { FinalCta } from "@/components/sections/final-cta";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { GoogleMapSection } from "@/components/sections/google-map-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationPreview } from "@/components/sections/location-preview";
import { SocialProofBand } from "@/components/sections/social-proof-band";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhySection } from "@/components/sections/why-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBand />
      <FeaturedDishesCarousel />
      <WhySection />
      <CateringSection />
      <GalleryPreview />
      <TestimonialsSection />
      <LocationPreview />
      <FinalCta />
      <GoogleMapSection />
    </>
  );
}
