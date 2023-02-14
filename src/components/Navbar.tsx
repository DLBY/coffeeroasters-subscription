import { BurgerMenu, Logo } from '@/components'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      {/* Container */}
      <div className='flex container mx-auto px-6'>
        {/* Logo */}
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>
        {/* Menu */}
        <ul className="hidden md:block">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/plan">Plan</a>
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