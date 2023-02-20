import clsx from "clsx";

interface StepsProps {
  title?: string;
  stepNumber: string;
  stepTitle: string;
  stepDescription: string;
}

export const Steps = ({
  stepNumber,
  stepTitle,
  stepDescription,
}: StepsProps) => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start ">
        <div className="flex items-center justify-center">
          <span className="text-paleOrange font-bold font-serif text-7xl">
            {stepNumber}
          </span>
        </div>
        <h3 className={clsx("font-serif font-bold text-[28px] leading-[32px] text-darkGreyBlue text-center mt-6", "md:text-left md:w-2/3", "xl:text-[32px] xl:leading-[36px] xl:mt-[38px]")}>
          {stepTitle}
        </h3>
        <p className={clsx("text-darkGreyBlue text-center text-[15px] leading-[25px] mt-6", "md:text-left xl:text-[16px] xl:leading-[26px] xl:mt-[42px]")}>
          {stepDescription}
        </p>
      </div>
    </div>
  );
};