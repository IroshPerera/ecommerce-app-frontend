import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavBarProps {
  containerStyles: string;
}

export const NavBar: React.FC<NavBarProps> = ({ containerStyles, onClick }) => {

  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/blog', title: 'Blog' },
    { path: '/mail', title: 'Contact' },
  ]

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? 'active-link' : ''} px-3 py-2 rounded-full`
          }
          onClick={onClick}  
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}
