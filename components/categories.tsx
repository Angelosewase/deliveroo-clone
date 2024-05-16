import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}  
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* category card */}
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>

    </ScrollView>
  )
}