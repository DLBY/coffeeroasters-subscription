import { Steps, Button } from "@/components";
import { howItWorks } from '../data/howItWorks';

export const HowItWorks = () => {
  return (
    <section className="px-6 my-[200px]">
      <h3 className="font-serif font-bold text-2xl text-center text-grey">
        How it works
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {howItWorks.map((step, index) => (
          <Steps
            key={index}
            stepNumber={step.number}
            stepTitle={step.title}
            stepDescription={step.desc}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-16">
        <Button link="/plan" text="Create your plan" className="text-lightCream bg-darkCyan hover:bg-cyan px-8 py-4 rounded-md transition-colors font-serif text-lg leading-[25px]" />
      </div>
    </section>
  )
}