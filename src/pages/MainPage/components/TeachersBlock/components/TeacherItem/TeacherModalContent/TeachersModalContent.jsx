import React, { useState } from 'react';

import { teachersImages } from 'assets/images';

import { SocialLinks } from './SocialLinks';

import styles from './TeacherModalContent.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const [activeTab, setActiveTab] = useState('education');

  if (!teacher) {
    return <div>Учитель не найден</div>;
  }

  const { name, desc, imageName, tabs, links } = teacher;

  const createActiveTabClassname = (name) => {
    return `${styles.tabsMenuBtn} ${activeTab === name ? styles.active : ''}`;
  };

  const createTabClickHandler = (name) => () => setActiveTab(name);

  const activeTabContent =
    tabs.find((tab) => tab.name === activeTab)?.data || [];

  return (
    <div className={styles.modalContent}>
      <div className={styles.contentTop}>
        <img
          className={styles.contentTopImg}
          src={teachersImages[imageName]}
          alt={name}
        />
        <div className={styles.contentTopInfo}>
          <h3 className={styles.contentTopInfoTitle}>{name}</h3>
          <p className={styles.contentTopInfoDesc}>{desc}</p>
          <SocialLinks links={links} />
        </div>
      </div>

      <div className={styles.contentBottom}>
        <div className={styles.tabsMenu}>
          {tabs.map(({ name, title }) => (
            <button
              key={name}
              type="button"
              className={createActiveTabClassname(name)}
              onClick={createTabClickHandler(name)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className={styles.contentBottomTabsContent}>
          {activeTabContent.map((content, index) => {
            return (
              <div key={index} className={styles.tabContent}>
                {Boolean(content.title) && (
                  <h3 className={styles.tabContentTitle}>{content.title}</h3>
                )}
                {content.text?.map((textParagraph, indexParagraph) => (
                  <p key={indexParagraph} className={styles.tabContentInfo}>
                    {textParagraph}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
