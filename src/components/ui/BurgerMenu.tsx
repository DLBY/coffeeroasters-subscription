import * as React from 'react';

export const BurgerMenu = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
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
      <div className={`absolute top-100 left-0 w-full h-full bg-gradient-to-b from-[#FEFCF7] via-[#FEFCF7] to-transparent z-10 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center h-full pt-[80px]">
          <li className="font-bold">
            <a className="text-2xl text-darkGreyBlue transition-colors font-serif" href="/">Home</a>
          </li>
          <li className="font-bold hover:text-darkGreyBlue mt-8">
            <a className="text-2xl text-darkGreyBlue transition-colors font-serif" href="/about">About us</a>
          </li>
          <li className="font-bold hover:text-darkGreyBlue mt-8">
            <a className="text-2xl text-darkGreyBlue transition-colors font-serif" href="/plan">Create your plan</a>
          </li>
        </ul>
      </div>
    </>
  );
};
