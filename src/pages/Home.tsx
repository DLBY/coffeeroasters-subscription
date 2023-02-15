import { Hero, Collection } from "@/components";

export const Home = () => {
  return (
    <>
      <Hero title="Great coffee &nbsp;
    made simple." subtitle="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
    coffees from our best roasters delivered directly to your door, at your schedule." cta={{ text: "Create your plan", link: "/plan" }} className="bg-cover bg-hero-mobile text-white md:bg-hero-tablet lg:bg-hero-desktop" />
      <Collection />
    </>
  );
}