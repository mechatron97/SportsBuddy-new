import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { OnboardingData } from '@/assets/data/data'

const Slider = () => {
  return (
    <View>
      <FlatList data={OnboardingData} renderItem={(item, index) => <SliderItem item={item} index={index} />}></FlatList>
    </View>
  )
}

export default Slider