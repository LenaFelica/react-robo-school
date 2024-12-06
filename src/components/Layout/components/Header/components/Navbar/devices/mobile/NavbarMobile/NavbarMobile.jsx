import React from 'react';

import { IconButton } from 'components/IconButton';
import { CloseIcon } from 'assets/icons';
import { Link } from 'components/Link';

import styles from './NavbarMobile.module.scss';

export const NavbarMobile = ({ navbarItems, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleCloseNavbar = () => {
    onClose();
  };

  return (
    <div className={styles.navbarMobile}>
      <nav>
        <ul className={styles.navbar}>
          {navbarItems.map((link) => (
            <li key={link.id} onClick={handleCloseNavbar}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton
        icon={<CloseIcon />}
        onClick={handleCloseNavbar}
        additionalClassname={styles.closeBtn}
      />
    </div>
  );
};
