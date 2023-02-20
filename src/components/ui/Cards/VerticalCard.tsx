import clsx from 'clsx';

interface VerticalCardProps {
  icon: string;
  title: string;
  description: string;
}

export const VerticalCard = ({
  icon,
  title,
  description,
}: VerticalCardProps) => {
  return (
    <div className={clsx(
      "py-4 px-8 bg-darkCyan text-center rounded-lg",
      "md:flex md:flex-row md:items-center md:gap-[55px] md:text-left md:px-10 md:py-6",
      "xl:flex xl:flex-col xl:gap-14 xl:text-center"
    )}>
      <img src={icon} alt={"icon of" + icon} className={clsx("mx-auto mt-[72px]", "md:mt-0 xl:mt-[72px]")} />
      <div className="flex flex-col mt-14 mb-[51px] gap-6 xl:mt-auto">
        <h3 className="font-serif text-white text-2xl font-bold">{title}</h3>
        <p className="text-white text-[15px] leading-[25px] xl:text-[16px] xl:leading-[26px]">{description}</p>
      </div>
    </div>
  )
};