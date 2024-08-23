import { Stack, useRouter } from "expo-router";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import LottieView, { AnimationObject } from "lottie-react-native";
import CustomButton from "../components/CustomButton"; // Assuming you have a CustomButton component

// Screen dimensions for responsive design
const { width, height } = Dimensions.get("window");

interface OnboardingItem {
  id: string;
  animation: AnimationObject;
  title: string;
  description: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingItem[] = [
  {
    id: '1',
    animation: require('../assets/animations/cycling.json'),
    title: 'Welcome to SportsBuddy',
    description: 'Track your workouts and reach your fitness goals with ease.',
    textColor: '#fff',
    backgroundColor: '#FF6F61',
  },
  {
    id: '2',
    animation: require('../assets/animations/football.json'),
    title: 'Join a Community',
    description: 'Connect with others and share your progress.',
    textColor: '#000',
    backgroundColor: '#FFD700',
  },
  {
    id: '3',
    animation: require('../assets/animations/swimming.json'),
    title: 'Achieve Your Goals',
    description: 'Stay motivated and keep pushing your limits.',
    textColor: '#fff',
    backgroundColor: '#1E90FF',
  },
];

const StepIndicator = ({ currentStep, steps }: { currentStep: number; steps: number }) => (
  <View style={styles.indicatorContainer}>
    {Array.from({ length: steps }).map((_, index) => (
      <View
        key={index}
        style={[
          styles.indicator,
          currentStep === index ? styles.activeIndicator : styles.inactiveIndicator,
        ]}
      />
    ))}
  </View>
);

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      router.push("/auth/signIn");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={[styles.screen, { backgroundColor: item.backgroundColor }]}>
      <LottieView
        source={item.animation}
        autoPlay
        loop
        style={{ width: 250, height: 250 }}
      />
      <Text style={[styles.title, { color: item.textColor }]}>{item.title}</Text>
      <Text style={[styles.description, { color: item.textColor }]}>{item.description}</Text>
      
      <StepIndicator currentStep={currentIndex} steps={data.length} />
      <View style={styles.buttonContainer}>
        {currentIndex > 0 && (
          <CustomButton onPress={handlePrev} text="Back" />
        )}
        <CustomButton onPress={handleNext} text={currentIndex === data.length - 1 ? "Get Started" : "Next"} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index); // Update index after user scrolls manually
        }}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  screen: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 20
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  inactiveIndicator: {
    backgroundColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});
