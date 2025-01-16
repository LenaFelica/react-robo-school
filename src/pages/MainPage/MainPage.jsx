import React from 'react';

import { PromoBlock } from './components/PromoBlock/PromoBlock';
import { AboutBlock } from './components/AboutBlock';
import { ProfitBlock } from './components/ProfitBlock';
import { TeachersBlock } from './components/TeachersBlock';
import { PackageBlock } from './components/PackageBlock';

export const MainPage = () => {
  return (
    <>
      <PromoBlock />
      <AboutBlock />
      <ProfitBlock />
      <TeachersBlock />
      <PackageBlock />
      <p>something</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
    </>
  );
};
