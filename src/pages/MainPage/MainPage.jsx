import React from 'react';

import { PromoBlock } from './components/PromoBlock/PromoBlock';
import { AboutBlock } from './components/AboutBlock';

export const MainPage = () => {
  return (
    <>
      <PromoBlock />
      <AboutBlock />
      {/* <ProfitBlock />
      <TeachersBlock />
      <PackageBlock />
      <CourseBlock /> */}
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
