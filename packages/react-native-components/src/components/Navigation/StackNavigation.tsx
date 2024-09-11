import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

type Screen = 'Home' | 'Details';

const StackNavigation: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Home');
  const [params, setParams] = useState<any>(null);

  const navigate = (screen: Screen, params?: any) => {
    setCurrentScreen(screen);
    setParams(params);
  };

  const goBack = () => {
    // Simple back navigation: go back to Home screen
    if (currentScreen !== 'Home') {
      setCurrentScreen('Home');
      setParams(null);
    }
  };

  return (
    <>
      {currentScreen === 'Home' && <HomeScreen onNavigate={navigate} />}
      {currentScreen === 'Details' && <DetailsScreen params={params} onBack={goBack} />}
    </>
  );
};

export default StackNavigation;