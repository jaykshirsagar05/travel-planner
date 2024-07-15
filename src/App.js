import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlanTrip from './components/PlanTrip';
import TripDetails from './components/TripDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Travel Planner</title>
          <meta name="description" content="A travel planner application demonstrating internationalization and accessibility with React." />
        </Helmet>
        <Header />
        <main>
          <HomePage />
          <PlanTrip />
          <TripDetails />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
