import { BurgerMenu, Logo } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      {/* Container */}
      <div className={clsx(
        'flex items-center justify-between container mx-auto px-6 pt-8 pb-10',
        'md:px-6 md:pt-10 md:pb-[53px]',
        'lg:py-12',
      )}>
        {/* Logo */}
        <a href="/">
          <Logo />
        </a>
        {/* Menu */}
        <ul className="hidden md:flex md:justify-between">
          <li className='uppercase font-bold tracking-wider pr-8'>
            <a className="text-xs text-grey hover:text-darkGreyBlue transition-colors	" href="/">Home</a>
          </li>
          <li className='uppercase font-bold tracking-wider text-grey pr-8 hover:text-darkGreyBlue transition-colors	'>
            <a className="text-xs text-grey hover:text-darkGreyBlue" href="/about">About us</a>
          </li>
          <li className='uppercase font-bold tracking-wider text-grey hover:text-darkGreyBlue'>
            <a className="text-xs text-grey hover:text-darkGreyBlue transition-colors	" href="/plan">Create your plan</a>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </nav>
  )
}