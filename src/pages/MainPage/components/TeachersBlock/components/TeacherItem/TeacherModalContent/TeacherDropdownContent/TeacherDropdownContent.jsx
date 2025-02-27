import React, { useRef, useState } from 'react';

import { ArrowDown } from 'assets/icons';

import { useOutsideClick } from 'hooks/useOutsideClick';

import styles from './TeacherDropdownContent.module.scss';

export const TeacherDropdownContent = ({
  teacher,
  activeTab,
  setActiveTab,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { tabs } = teacher;

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const getDropdownListClassname = () => {
    return `${styles.selectTeachersList} ${isDropdownOpen ? styles.active : ''}`;
  };

  const getDropdownItemClassname = (tabName) => {
    return `${styles.selectTeachersListItem} ${activeTab === tabName ? styles.active : ''}`;
  };

  const createDropdownBtnClickHandler = (tabName) => {
    return () => {
      setActiveTab(tabName);
      handleDropdownClose();
    };
  };

  useOutsideClick({
    ref: dropdownRef,
    handler: handleDropdownClose,
    condition: isDropdownOpen,
    exceptElementRef: buttonRef,
  });

  return (
    <div className={styles.selectTeachers} ref={dropdownRef}>
      <button
        type="button"
        className={styles.selectTeachersBtn}
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        <span>{tabs.find((tab) => tab.name === activeTab)?.title}</span>
        <span>
          <ArrowDown className={styles.arrow} />
        </span>
      </button>

      {isDropdownOpen && (
        <div className={getDropdownListClassname()}>
          {tabs.map(({ name: tabName, title }) => (
            <button
              key={tabName}
              type="button"
              className={getDropdownItemClassname(tabName)}
              onClick={createDropdownBtnClickHandler(tabName)}
            >
              {title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
