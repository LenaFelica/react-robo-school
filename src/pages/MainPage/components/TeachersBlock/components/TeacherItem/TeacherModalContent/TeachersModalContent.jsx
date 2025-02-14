import React, { useRef, useState } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick';
import teachers from 'api/teachers.json';
import { teachersImages } from 'assets/images';
import { ArrowDown } from 'assets/icons';
import { Instagram } from 'assets/icons';
import { Facebook } from 'assets/icons';

import styles from './TeacherModalContent.module.scss';

export const TeacherModalContent = ({ teacherId }) => {
  const [activeTab, setActiveTab] = useState('education');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const teacher = teachers.find((t) => t.id === teacherId);

  if (!teacher) {
    return <div>Учитель не найден</div>;
  }

  const { name, desc, imageName, education, experience, achievements } =
    teacher;

  const tabsData = { education, experience, achievements };

  const tabs = Object.keys(tabsData).map((key) => ({
    key,
    label:
      key === 'education'
        ? 'Образование'
        : key === 'experience'
          ? 'Опыт работы'
          : 'Награды',
  }));

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsDropdownOpen(false),
    condition: isDropdownOpen,
    exceptElementRef: buttonRef,
  });

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
          <div className={styles.contentSocials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={styles.socialIcon} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown */}

      <div className={styles.selectTeachers} ref={dropdownRef}>
        <button
          type="button"
          className={styles.selectTeachersBtn}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <span className={styles.selectTeachersText}>
            {tabs.find((tab) => tab.key === activeTab)?.label}
          </span>
          <span className={styles.selectTeachersImg}>
            <ArrowDown className={styles.arrow} />
          </span>
        </button>

        {isDropdownOpen && (
          <div
            className={`${styles.selectTeachersList} ${
              isDropdownOpen ? styles.active : ''
            }`}
          >
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`${styles.selectTeachersListItem} ${
                  activeTab === key ? styles.active : ''
                }`}
                onClick={() => {
                  setActiveTab(key);
                  setIsDropdownOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.contentBottom}>
        <div className={styles.tabsMenu}>
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`${styles.tabsMenuBtn} ${
                activeTab === key ? styles.active : ''
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className={styles.contentBottomTabsContent}>
          {activeTab === 'education' && (
            <div
              className={`${styles.tabContent} ${
                activeTab === 'education' ? styles.active : ''
              }`}
            >
              {education.map((item, index) => (
                <div key={index}>
                  <div className={styles.tabContentInfo}>
                    <p className={styles.tabContentText}>{item.date}</p>
                    <p className={styles.tabContentText}>{item.university}</p>
                    <p className={styles.tabContentText}>{item.faculty}</p>
                    <p className={styles.tabContentText}>{item.form}</p>
                  </div>
                  {item.title && (
                    <>
                      <h3 className={styles.tabContentTitle}>{item.title}</h3>
                      <div className={styles.tabContentInfo}>
                        {item.courses && (
                          <p className={styles.tabContentText}>
                            {item.courses}
                          </p>
                        )}
                        {item.trainings && (
                          <p className={styles.tabContentText}>
                            {item.trainings}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div
              className={`${styles.tabContent} ${
                activeTab === 'experience' ? styles.active : ''
              }`}
            >
              {experience.map((item, index) => (
                <div key={index} className={styles.tabContentInfo}>
                  <p className={styles.tabContentText}>{item}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div
              className={`${styles.tabContent} ${
                activeTab === 'achievements' ? styles.active : ''
              }`}
            >
              {achievements.map((item, index) => (
                <div key={index} className={styles.tabContentInfo}>
                  <p className={styles.tabContentText}>{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
