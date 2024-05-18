import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "@/sanity";
import { useNavigation } from "@react-navigation/native";
type props = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  addresses: string;
  short_description: string;
  dishes: Array<string>;
  long: number;
  lat: number;
};

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  addresses,
  short_description,
  dishes,
  long,
  lat,
}: props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("RestaurantScreen", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          addresses,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow
    "
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-sm text-gray-500">Nearby . {addresses} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
