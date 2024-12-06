import React from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import { NavbarMobile } from './devices/mobile/NavbarMobile';
import { NavbarDesktop } from './devices/desktop/NavbarDesktop';

const navbarItems = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const Navbar = ({ isOpen, onClose }) => {
  const { isTablet } = useWindowSize();

  return (
    <>
      {isTablet ? (
        <NavbarMobile
          navbarItems={navbarItems}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : (
        <NavbarDesktop navbarItems={navbarItems} />
      )}
    </>
  );
};
