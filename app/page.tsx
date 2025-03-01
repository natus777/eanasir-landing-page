import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Ea Nasir - $COPPER",
  description: "The latest coin that brings you $COPPER",
  openGraph: {
    type: "website",
    url: "https://eanasir.io",
    title: "Ea Nasir - $COPPER",
    description: "The latest coin that brings you $COPPER",
    images: [
      {
        url: "https://i.ibb.co/qY7077sj/image.png",
        width: 1200,
        height: 630,
        alt: "Ea Nasir - $COPPER",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://eanasir.io",
    title: "Ea Nasir - $COPPER",
    description: "The latest coin that brings you $COPPER",
    images: [
      "https://i.ibb.co/qY7077sj/image.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <TestimonialSection />
      <CommunitySection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
