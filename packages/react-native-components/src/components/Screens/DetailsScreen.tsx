import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  params?: {
    itemId?: number;
  };
  onBack: () => void;
}

const DetailsScreen: React.FC<Props> = ({ params, onBack }) => {
  const { itemId } = params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.itemIdText}>Item ID: {itemId}</Text>
      <Button title="Go Back" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#495057',
  },
  itemIdText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#6c757d',
  },
});

export default DetailsScreen;