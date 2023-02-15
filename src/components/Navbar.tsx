import { BurgerMenu, Logo } from '@/components'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      {/* Container */}
      <div className='flex items-center justify-between container mx-auto px-6 py-11'>
        {/* Logo */}
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex md:justify-between">
          <li className='uppercase font-bold tracking-wide pr-8'>
            <a className="text-xs text-grey hover:text-darkGreyBlue transition-colors	" href="/">Home</a>
          </li>
          <li className='uppercase font-bold tracking-wide text-grey pr-8 hover:text-darkGreyBlue transition-colors	'>
            <a className="text-xs text-grey hover:text-darkGreyBlue" href="/about">About us</a>
          </li>
          <li className='uppercase font-bold tracking-wide text-grey hover:text-darkGreyBlue'>
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