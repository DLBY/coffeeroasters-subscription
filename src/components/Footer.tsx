import { IconFacebook, IconInstagram, IconTwitter, WhiteLogo } from '@/components';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={clsx("px-10 pb-[72px]", "xl:px-20 xl:pb-[88px]")}>
      <div className={clsx("bg-darkGreyBlue px-14 py-[54px]", "xl:px-[85px]")}>
        <div className={clsx("md:flex md:flex-col md:items-center md:justify-between", "xl:flex-row")}>
          <div className="flex justify-center items-center">
            <a href="#">
              <WhiteLogo />
            </a>
          </div>
          <div className="my-12 md:mt-8 xl:my-0">
            <ul className={clsx("flex flex-col uppercase", "md:flex-row md:justify-center")}>
              <li className="text-grey text-center hover:text-lightCream transition-colors text-[14px] leading-[15px] tracking-[0.92px]">
                <a href="/">Home</a>
              </li>
              <li className={clsx("text-grey text-center  hover:text-lightCream transition-colors text-[14px] leading-[15px] tracking-[0.92px] mt-6", "md:mt-0 md:ml-6")}>
                <a href="/about">About us</a>
              </li>
              <li className={clsx("text-grey text-center  hover:text-lightCream transition-colors text-[14px] leading-[15px] tracking-[0.92px] mt-6", "md:mt-0 md:ml-6")}>
                <a href="/plan">Create your plan</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <a href="https://www.facebook.com/" target="_blank" className="text-white fill-lightCream  hover:fill-paleOrange transition-colors">
              <IconFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" className="text-white fill-lightCream hover:fill-paleOrange transition-colors ml-6">
              <IconTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="text-white fill-lightCream hover:fill-paleOrange transition-colors ml-6">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}