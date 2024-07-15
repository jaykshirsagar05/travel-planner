import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header role="banner">
      <nav aria-label="Main Navigation">
        <ul>
          <li><button onClick={() => changeLanguage('en')}>EN</button></li>
          <li><button onClick={() => changeLanguage('fr')}>FR</button></li>
        </ul>
        <ul>
          <li><a href="#home">{t('home')}</a></li>
          <li><a href="#plan-trip">{t('plan_trip')}</a></li>
          <li><a href="#trip-details">{t('trip_details')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
