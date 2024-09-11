import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TopNavigationProps {
  title: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title, onBackPress, onMenuPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {onMenuPress && (
        <TouchableOpacity onPress={onMenuPress} style={styles.button}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TopNavigation;