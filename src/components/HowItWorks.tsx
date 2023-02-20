import { Steps, Button } from "@/components";
import { howItWorks } from '../data/howItWorks';
import clsx from "clsx";

export const HowItWorks = () => {
  return (
    <section className="px-6 md:px-[39px] xl:px-[165px] my-[200px]">
      <h3 className="font-serif font-bold text-2xl text-center text-grey md:text-left">
        How it works
      </h3>

      <div className="relative hidden md:block md:mt-20 h-[2px] w-3/4 bg-paleOrange">
        <div className="hidden md:block absolute h-[31px] w-[31px] bg-lightCream border-2 rounded-full border-darkCyan -top-[16px] left-0"></div>
        <div className="hidden md:block absolute left-1/2 h-[31px] w-[31px] bg-lightCream border-2 rounded-full border-darkCyan -top-[16px]"></div>
        <div className="hidden md:block absolute right-0 h-[31px] w-[31px] bg-lightCream border-2 rounded-full border-darkCyan -top-[16px]"></div>
      </div>

      <div className={clsx("grid grid-cols-1 gap-14 mt-16", "md:grid-cols-3 md:gap-5 xl:gap-24 relative")}>
        {howItWorks.map((step, index) => (
          <Steps
            key={index}
            stepNumber={step.number}
            stepTitle={step.title}
            stepDescription={step.desc}
          />
        ))}
      </div>
      <div className={clsx("flex flex-col items-center mt-16", "md:items-start md:mt-11 xl:mt-16")}>
        <Button link="/plan" text="Create your plan" className="text-lightCream bg-darkCyan hover:bg-cyan px-8 py-4 rounded-md transition-colors font-serif text-lg leading-[25px]" />
      </div>
    </section>
  )
}