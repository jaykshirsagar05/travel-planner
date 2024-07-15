import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PlanTrip.css';

const PlanTrip = () => {
  const { t } = useTranslation();
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, departureDate, returnDate });
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="plan-trip-header">
      <h2 id="plan-trip-header">{t('plan_trip')}</h2>
      <label htmlFor="destination">{t('destination')}</label>
      <input 
        type="text" 
        id="destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
        required 
      />

      <label htmlFor="departure-date">{t('departure_date')}</label>
      <input 
        type="date" 
        id="departure-date" 
        value={departureDate} 
        onChange={(e) => setDepartureDate(e.target.value)} 
        required 
      />

      <label htmlFor="return-date">{t('return_date')}</label>
      <input 
        type="date" 
        id="return-date" 
        value={returnDate} 
        onChange={(e) => setReturnDate(e.target.value)} 
        required 
      />

      <button type="submit">{t('submit')}</button>
    </form>
  );
};

export default PlanTrip;
