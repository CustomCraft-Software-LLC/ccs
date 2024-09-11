import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ViewStyle, TextStyle } from 'react-native';

interface HomeScreenProps {
  title: string;
  onPressButton: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ title, onPressButton }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Button title="Press me" onPress={onPressButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  } as ViewStyle,
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  } as ViewStyle,
  title: {
    fontSize: 24,
    color: '#fff',
  } as TextStyle,
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});

export default HomeScreen;