import React, { useEffect, useState } from 'react';

import { Select } from 'components/Select';

import { teachersImages } from 'assets/images';

import { SocialLinks } from './SocialLinks';

import styles from './TeachersModalContent.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  if (!teacher) {
    return <div>Учитель не найден</div>;
  }

  const { name, desc, imageName, tabs, links } = teacher;

  const options = tabs.map(({ name, title }) => ({
    value: name,
    label: title,
  }));

  const [activeTab, setActiveTab] = useState(options[0] || null);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0]?.data || []);

  useEffect(() => {
    if (!activeTab) {
      return;
    }
    const newTabContent = tabs.find((tab) => tab.name === activeTab.value);
    if (newTabContent) {
      setActiveTabContent(newTabContent.data);
    }
  }, [activeTab, tabs]);

  const createActiveTabClassname = (name) => {
    return `${styles.tabsMenuBtn} ${activeTab?.value === name ? styles.active : ''}`;
  };

  const createTabClickHandler = (option) => () => setActiveTab(option);

  return (
    <div className={styles.teacherModalContent}>
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

      <div className={styles.mobileSelect}>
        <Select options={options} value={activeTab} onChange={setActiveTab} />
      </div>

      <div className={styles.contentBottom}>
        <div className={styles.tabsMenu}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={createActiveTabClassname(option.value)}
              onClick={createTabClickHandler(option)}
            >
              {option.label}
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
