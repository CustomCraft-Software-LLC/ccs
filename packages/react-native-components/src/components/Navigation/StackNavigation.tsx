import React, { useState } from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

type Screen = 'Home' | 'Details';
type Params = { [key: string]: any };

const StackNavigation: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Home');
  const [params, setParams] = useState<Params | undefined>(undefined);

  const navigate = (screen: Screen, params?: Params) => {
    setCurrentScreen(screen);
    setParams(params);
  };

  const goBack = () => {
    setCurrentScreen('Home');
    setParams(undefined);
  };

  return (
    <>
      {currentScreen === 'Home' && <HomeScreen onNavigate={navigate} />}
      {currentScreen === 'Details' && <DetailsScreen params={params} onBack={goBack} />}
    </>
  );
};

export default StackNavigation;