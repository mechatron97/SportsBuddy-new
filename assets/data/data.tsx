import {AnimationObject} from 'lottie-react-native';

interface OnboardingItem {
  id: string;
  animation: AnimationObject;
  title: string;
  description: string;
  textColor: string;
  backgroundColor: string;
}

export const data: OnboardingItem[] = [
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