import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  { title: 'Welcome to DriveWise', description: 'Your ultimate driving companion.' },
  { title: 'Track Your Journeys', description: 'Keep a log of all your trips.' },
  { title: 'Stay Safe', description: 'Get real-time alerts and tips.' },
];

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {activeSlide === slides.length - 1 && (
        <View style={styles.mainPage}>
          <Text style={styles.mainText}>DriveWise App Running</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  mainPage: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
    color: '#000',
  },
});

export default App;
