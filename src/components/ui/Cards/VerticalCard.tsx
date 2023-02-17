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
    <div className="py-4 px-8 bg-darkCyan text-center rounded-lg">
      <img src={icon} alt={"icon of" + icon} className="mx-auto mt-[72px]" />
      <div className="flex flex-col mt-14 mb-[51px] gap-6">
        <h3 className="font-serif text-white text-2xl font-bold">{title}</h3>
        <p className="text-white text-[15px] leading-[25px]">{description}</p>
      </div>
    </div>
  )
};