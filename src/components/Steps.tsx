interface StepsProps {
  title?: string;
  stepNumber: string;
  stepTitle: string;
  stepDescription: string;
}

export const Steps = ({
  title,
  stepNumber,
  stepTitle,
  stepDescription,
}: StepsProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-16">
        <div className="flex items-center justify-center">
          <span className="text-paleOrange font-bold font-serif text-7xl">
            {stepNumber}
          </span>
        </div>
        <h3 className="font-serif font-bold text-[28px] leading-[32px] text-darkGreyBlue text-center mt-6">
          {stepTitle}
        </h3>
        <p className="text-center text-[15px] leading-[25px] mt-6">
          {stepDescription}
        </p>
      </div>
    </div>
  );
};