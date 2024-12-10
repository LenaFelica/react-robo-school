import React from 'react';

import { Link } from 'components/Link';

import styles from './NavbarDesktop.module.scss';

export const NavbarDesktop = ({ navbarItems }) => {
  return (
    <nav>
      <ul className={styles.navbarDesktop}>
        {navbarItems.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
