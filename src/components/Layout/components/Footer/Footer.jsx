import React from 'react';

import { Container } from 'components/Container/Container';

import { Logo } from '../Logo/Logo';
import { PhoneCall } from '../PhoneCall/PhoneCall';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container isWide>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <Logo />
            <PhoneCall />
          </div>
          <div className={styles.copyright}>© ROBO.SCHOOL</div>
        </div>
      </Container>
    </footer>
  );
};
