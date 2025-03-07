import React, { useEffect, useState } from 'react';

import { Select } from 'components/Select';
import { useWindowSize } from 'hooks/useWindowSize';

import { teachersImages } from 'assets/images';

import { SocialLinks } from './SocialLinks';
import { TabButtons } from './TabButtons';

import styles from './TeachersModalContent.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const { isMobile } = useWindowSize();
  const { name, desc, imageName, tabs, links } = teacher;

  const createTabOptions = () => {
    return tabs.map(({ name, title }) => ({
      value: name,
      label: title,
    }));
  };

  const [options] = useState(() => createTabOptions());
  const [activeTab, setActiveTab] = useState(options[0] || null);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0]?.data || []);

  const handleTabChange = (option) => {
    setActiveTab(option);
  };

  useEffect(() => {
    if (!activeTab) {
      return;
    }
    const newTabContent = tabs.find((tab) => tab.name === activeTab.value);
    if (newTabContent) {
      setActiveTabContent(newTabContent.data);
    }
  }, [activeTab, tabs]);

  if (!teacher) {
    return <div>Учитель не найден</div>;
  }

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

      <div className={styles.contentBottom}>
        {isMobile ? (
          <Select
            options={options}
            value={activeTab}
            onChange={handleTabChange}
          />
        ) : (
          <TabButtons
            options={options}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        )}

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
