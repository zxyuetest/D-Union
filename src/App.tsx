import React, { useState } from 'react';
import Home from './components/Home';
import Dues from './components/Dues';
import Activities from './components/Activities';
import Suggestions from './components/Suggestions';
import Points from './components/Points';
import Matchmaking from './components/Matchmaking';
import Insurance from './components/Insurance';
import Counseling from './components/Counseling';
import LegalAid from './components/LegalAid';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'dues': return <Dues onBack={() => setCurrentView('home')} />;
      case 'activities': return <Activities onBack={() => setCurrentView('home')} />;
      case 'suggestions': return <Suggestions onBack={() => setCurrentView('home')} />;
      case 'points': return <Points onBack={() => setCurrentView('home')} />;
      case 'matchmaking': return <Matchmaking onBack={() => setCurrentView('home')} />;
      case 'insurance': return <Insurance onBack={() => setCurrentView('home')} />;
      case 'counseling': return <Counseling onBack={() => setCurrentView('home')} />;
      case 'legal_aid': return <LegalAid onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        {renderView()}
      </div>
    </div>
  );
}
