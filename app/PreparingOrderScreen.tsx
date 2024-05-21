import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from 'expo-router'


const PreparingOrderScreen = () => {
    const navigation = useNavigation<any>()

    useEffect(()=> {
        setTimeout(()=>{
           navigation.navigate("DeliveryScreen")
        },4000)
    },[])
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image 
         source={require('@/assets/images/orderLoading.gif')}
         animation={"slideInUp"}
         iterationCount={1}
         className='h-96 w-96'
      />

      <Animatable.Text
      animation={"slideInUp"}
      iterationCount={1}
      className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for the restaurnant to accept the order
      </Animatable.Text>

      <Progress.Circle  size={60} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen