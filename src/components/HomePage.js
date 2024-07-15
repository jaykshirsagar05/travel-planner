import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main id="home" role="main">
      <h1>{t('welcome')}</h1>
      <button>{t('start_planning')}</button>
    </main>
  );
};

export default HomePage;
