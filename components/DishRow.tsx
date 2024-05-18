import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "@/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

type props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: props) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border border-gray-200  p-4 ${isPressed && 'border-b-0'}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              ${(price * 1.27).toFixed(2)}
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white  px-4" >
          <View className="flex-row space-x-2 items-center pb-3">
            <TouchableOpacity>
              <MinusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
                <Text>
                    0
                </Text>
            <TouchableOpacity>
              <PlusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
