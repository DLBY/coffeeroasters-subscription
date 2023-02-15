import clsx from "clsx";
import { Button } from "@/components";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  cta: {
    text: string;
    link: string;
  };
  className?: string;
}

export const Hero = ({ title, subtitle, backgroundImage, cta, className }: HeroProps) => {
  return (
    <section className="container mx-auto px-6">
      <div className={className + " " + "rounded-[10px]"}>
        <div className={clsx(
          "px-6 py-24 flex flex-col items-center text-center",
          "md:text-left md:items-start md:w-[66%] md:px-14 md:py-[104px]",
          "lg:w-[50%] lg:px-[85px] lg:py-[117px]",
        )}>
          <h1 className={clsx(
            "font-serif font-bold text-[40px] leading-10",
            "md:text-5xl lg:text-7xl",
          )}>{title}</h1>
          <p className="mt-8 text-lightCream text-[15px] leading-[25px] lg:text-base">{subtitle}</p>
          <Button link="/plan" text={cta.text} className="bg-darkCyan hover:bg-cyan px-8 py-4 mt-10 rounded-md transition-colors font-serif text-lg leading-[25px]" />
        </div>
      </div>
    </section>
  );
};