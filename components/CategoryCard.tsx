import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}:{imgUrl:string,title:string}) => {
  return (
    <TouchableOpacity className='relative mr-2' >
        <Image 
         source={{
            uri:imgUrl
         }}
         className='h-20 w-20 rounded'
        />
      <Text className='absolute text-white bottom-1 left-1 font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard