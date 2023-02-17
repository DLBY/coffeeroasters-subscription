import { choices } from '../data/choices';
import { VerticalCard } from '@/components';
import clsx from 'clsx';

export const ChooseUs = () => {
  return (
    <section className={clsx("choose-us px-6 mt-[120px]", "md:mt-[144px] md:px-10 xl:mt-[200px]")}>
      <div className={clsx(
        "relative bg-darkGreyBlue text-lightCream text-center px-6 pt-16 h-[900px] pb-[368px] rounded-[10px]",
        "md:pt-14 md:px-[74px] md:pb-[317px] xl:pt-[100px] xl:px-[370px] md:h-[573px] lg:h-[577px]"
      )}>
        <h3 className={clsx(
          "font-serif font-bold text-[28px] leading-[28px]",
          "md:text-[32px] md:leading-[48px] xl:text-[40px]"
        )}>Why Choose Us</h3>
        <p className='text-[15px] leading-[25px] mt-6 xl:text-[16px] xl:leading-[26px] xl:mt-8'>
          A large part of our role is choosing which particular coffees will be featured
          in our range. This means working closely with the best coffee growers to give
          you a more impactful experience on every level.
        </p>
      </div>
      <div className={clsx(
        " px-6 relative grid grid-cols-1 gap-6 -mt-[620px] md:-mt-[320px] xl:-mt-[260px] md:gap-10 xl:grid-cols-3 xl:gap-14"
      )}>
        {choices.map((choice, index) => (
          <VerticalCard
            key={index}
            title={choice.name}
            description={choice.desc}
            icon={choice.icon}
          />
        ))}
      </div>
    </section>
  );
};