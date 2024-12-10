import React, { useEffect, useState } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';
import { lockScroll, unlockScroll } from 'utils/scrollLock';
import { IconButton } from 'components/IconButton/IconButton';
import { BurgerIcon, PhoneIcon } from 'assets/icons';
import { Container } from 'components/Container/Container';

import { Logo } from '../Logo';
import { Navbar } from './components/Navbar';
import { PhoneCall } from '../PhoneCall';

import styles from './Header.module.scss';

export const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const { isTablet } = useWindowSize();

  useEffect(() => {
    if (!isShowMobileMenu) {
      unlockScroll();
      return;
    }

    lockScroll();
  }, [isShowMobileMenu]);

  const handleMenuOpen = () => {
    setIsShowMobileMenu(true);
  };

  const handleMenuClose = () => {
    setIsShowMobileMenu(false);
  };

  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />
          <Navbar isOpen={isShowMobileMenu} onClose={handleMenuClose} />
          {isTablet ? (
            <div className={styles.buttons}>
              <IconButton href="tel:88000001122" icon={<PhoneIcon />} isLink />
              <IconButton onClick={handleMenuOpen} icon={<BurgerIcon />} />
            </div>
          ) : (
            <PhoneCall />
          )}
        </div>
      </Container>
    </header>
  );
};
