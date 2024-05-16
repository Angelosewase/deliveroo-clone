import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "@/components/categories";
import FeaturedRow from "@/components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="mt-10 mb-24">
      {/* Header */}
      <View className="flex-row pb-3 items-center px-4 space-x-2  bg-white">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-sm -mb-1">Deliver now</Text>
          <Text className="font-bold text-lg">
            Current location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 bg-white ">
        <View className=" bg-gray-200 flex-row space-x-2 p-3 flex-1 items-center">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="h-5 "
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      <ScrollView >
        {/* categories */}
        <Categories />
        {/* featured rows */}
        <FeaturedRow id={123} title="Featured" description="Paid placements from our parteners"/>
        <FeaturedRow id={1234} title="Tasty discounts" description="Everyone have been enjoying htis tasty discounts"/>
        <FeaturedRow id={12345} title="Offers Near You! " description="Why not support your local restaurants tonight! "/>
      </ScrollView>
    </SafeAreaView>
  );
}
