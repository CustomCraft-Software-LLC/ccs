import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, Text, Button, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';

// Define types for the navigation state and context
type Route = 'Home' | 'Details';

interface NavigationContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const NavigationContainer: React.FC = () => {
  const { currentRoute, navigate } = useContext(NavigationContext)!;

  const renderScreen = () => {
    switch (currentRoute) {
      case 'Home':
        return (
          <View style={styles.screen}>
            <Text style={styles.text}>Home Screen</Text>
            <TouchableOpacity onPress={() => navigate('Details')} style={styles.button}>
              <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Details':
        return (
          <View style={styles.screen}>
            <Text style={styles.text}>Details Screen</Text>
            <TouchableOpacity onPress={() => navigate('Home')} style={styles.button}>
              <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return <View style={styles.screen}><Text style={styles.text}>Not Found</Text></View>;
    }
  };

  return renderScreen();
};

const styles = {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  } as ViewStyle,
  text: {
    fontSize: 24,
    marginBottom: 20,
  } as TextStyle,
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  } as ViewStyle,
  buttonText: {
    color: '#fff',
    fontSize: 16,
  } as TextStyle,
};

export { NavigationContainer };