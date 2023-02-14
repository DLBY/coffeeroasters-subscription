import * as React from 'react';

export const BurgerMenu = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button className="inline-flex flex-col justify-between h-[15px] w-[16px]" onClick={() => setIsOpen(!isOpen)}>
      <span aria-hidden="true" className={`block h-[3px] w-full bg-darkGreyBlue rounded-[1.5px] transition ease transform duration-300 ${isOpen
        ? "rotate-45 translate-y-1.5"
        : null
        }`} />
      <span aria-hidden="true" className={`block h-[3px] w-full bg-darkGreyBlue rounded-[1.5px] transition ease transform duration-300 ${isOpen
        ? "opacity-0"
        : null
        }`} />
      <span aria-hidden="true" className={`block h-[3px] w-full bg-darkGreyBlue rounded-[1.5px] transition ease transform duration-300 ${isOpen
        ? "-rotate-45 -translate-y-1.5"
        : null
        }`} />
    </button>
  );
};
