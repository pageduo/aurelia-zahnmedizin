import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import TechScrollytelling from "@/components/home/TechScrollytelling";
import ServicesHorizontal from "@/components/home/ServicesHorizontal";
import CardStack from "@/components/home/CardStack";
import Stats from "@/components/home/Stats";
import NewsTeaser from "@/components/home/NewsTeaser";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <TechScrollytelling />
      <ServicesHorizontal />
      <CardStack />
      <Stats />
      <NewsTeaser />
      <CTABand />
    </>
  );
}
