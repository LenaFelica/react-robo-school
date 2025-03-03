import React, { useRef, useState } from 'react';

import { ArrowDown } from 'assets/icons';

import { useOutsideClick } from 'hooks/useOutsideClick';

import styles from './Select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);
  const defaultLabel = options[0]?.label;

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleButtonClick = isDropdownOpen ? closeDropdown : openDropdown;

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    closeDropdown();
  };

  useOutsideClick({
    ref: dropdownRef,
    handler: closeDropdown,
    condition: isDropdownOpen,
    exceptElementRef: buttonRef,
  });

  return (
    <div className={styles.select} ref={dropdownRef}>
      <button
        type="button"
        className={styles.selectButton}
        onClick={handleButtonClick}
        ref={buttonRef}
      >
        <span>{selectedOption ? selectedOption.label : defaultLabel}</span>
        <ArrowDown className={styles.arrow} />
      </button>

      {isDropdownOpen && (
        <ul className={styles.selectOptions}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={styles.selectOption}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
