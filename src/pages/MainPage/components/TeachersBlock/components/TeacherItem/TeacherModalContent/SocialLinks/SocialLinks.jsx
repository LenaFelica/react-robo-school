import React from 'react';

import styles from './SocialLinks.module.scss';

export const SocialLinks = ({ links }) => {
  if (!links || links?.length === 0) {
    return null;
  }

  links = links.filter(({ imagePath }) => Boolean(imagePath));

  return (
    <div className={styles.socialLinks}>
      {links.map(({ href, imagePath }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <img src={imagePath} alt={href} />
        </a>
      ))}
    </div>
  );
};
