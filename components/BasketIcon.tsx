import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '@/features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation<any>()
  const basketTotal = useSelector(selectBasketTotal)

  if(items.length === 0) return null
  
  return (
    <View className='absolute bottom-10 w-full z-50'>
       <TouchableOpacity 
       onPress={()=>navigation.navigate('BasketScreen')}
       className='mx-4 p-4 rounded-lg bg-[#00CCBB] flex-row items-center space-x-1'>
        <Text className='text-white  font-extrabold text-lg bg-[#01A296] py-1 px-2 '>
          {items.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>${(basketTotal * 1.27).toFixed(2)}</Text>
       </TouchableOpacity>
    </View>
  )
}

export default BasketIcon