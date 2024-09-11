import React, { useState } from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

type Screen = 'Home' | 'Details';

interface Params {
  itemId?: number;
  [key: string]: any; // Allows for additional parameters if needed
}

const StackNavigation: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Home');
  const [params, setParams] = useState<Params | undefined>(undefined);

  const navigate = (screen: Screen, params?: Params) => {
    setCurrentScreen(screen);
    setParams(params); // Sets params only if provided, otherwise undefined
  };

  const goBack = () => {
    if (currentScreen !== 'Home') {
      setCurrentScreen('Home');
      setParams(undefined);
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