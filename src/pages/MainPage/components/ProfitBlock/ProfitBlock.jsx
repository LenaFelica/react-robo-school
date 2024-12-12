import React from 'react';

import { Container } from 'components/Container';
import { Tooltip } from 'components/Tooltip';
import { CustomIcon } from 'assets/icons';

import styles from './ProfitBlock.module.scss';

const profitItems = [
  {
    id: 1,
    subtitle: 'Удостоверение',
    description:
      'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
  },
  {
    id: 2,
    subtitle: 'Знания',
    description:
      'По основам разработки учебно-методических комплексов по робототехнике и программированию',
  },
  {
    id: 3,
    subtitle: 'Практику ',
    description:
      'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',
    tooltip: 'При наличии свободных мест',
  },
];

export const ProfitBlock = () => {
  return (
    <section className={styles.profit}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Что вы получите после курса</h2>
          <div className={styles.items}>
            {profitItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <h3 className={styles.subtitle}>
                  {item.subtitle}
                  {item.tooltip && (
                    <Tooltip text={item.tooltip} icon={CustomIcon} />
                  )}
                </h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
