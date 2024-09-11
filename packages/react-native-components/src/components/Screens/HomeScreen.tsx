import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Screen = 'Home' | 'Details';

interface Params {
  itemId?: number;
  [key: string]: any;
}

interface Props {
  onNavigate: (screen: Screen, params?: Params) => void;
}

const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => onNavigate('Details', { itemId: 42 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
});

export default HomeScreen;