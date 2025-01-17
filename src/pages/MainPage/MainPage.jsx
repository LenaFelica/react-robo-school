import React from 'react';

import { PromoBlock } from './components/PromoBlock/PromoBlock';
import { AboutBlock } from './components/AboutBlock';
import { ProfitBlock } from './components/ProfitBlock';
import { TeachersBlock } from './components/TeachersBlock';
import { PackageBlock } from './components/PackageBlock';
import { CourseBlock } from './components/CourseBlock';

export const MainPage = () => {
  return (
    <>
      <PromoBlock />
      <AboutBlock />
      <ProfitBlock />
      <TeachersBlock />
      <PackageBlock />
      <CourseBlock />
    </>
  );
};
