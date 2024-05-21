import { View, Text, TouchableOpacity, Image,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "@/features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "@/features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "@/sanity";

export default function BasketScreen() {
  const navigation = useNavigation<any>();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total= useSelector(selectBasketTotal)
  const dispatch = useDispatch();

  const [groupedItemsInTheBasket, setGroupedItemsInTheBasket] = useState<
    Array<any>
  >([]);

  useMemo(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInTheBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">

        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full absolute top-3 right-5 text-gray-100"
          >
            <XCircleIcon color={"#00CCBB"} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className=" flex-row items-center space-x-4 py-3 bg-white my-5 px-3">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4  rounded-full "
          />

          <Text className="flex-1">Deliver in 50-70 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB] ">change</Text>
          </TouchableOpacity>
        </View>

       <ScrollView className="divide divide-gray-400">
          {
            Object.entries(groupedItemsInTheBasket).map(([key,items])=>(
                <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                    <Text className="text-[#00CCBB]">{items.length}</Text>
                    <Image 
                        source={{
                            uri:urlFor(items[0]?.image).url(),
                        }}
                        className="h-12 w-12 rounded-full"
                     />
                     <Text>{items[0]?.name}</Text>
                     <Text className="text-gray-600">
                     ${(items[0]?.price * 1.27).toFixed(2)}
                     </Text>

                     <TouchableOpacity>
                        <Text className="text-[#00CCBB]"
                        onPress={()=>dispatch(removeFromBasket({id:key}))}>
                            remove
                        </Text>
                     </TouchableOpacity>

                </View>
          ))}
       </ScrollView>
       <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row  justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">
                 ${(total * 1.27).toFixed(2)}
                </Text>
            </View>  

            <View className="flex-row  justify-between">
                <Text className="text-gray-400">Delivery fee</Text>
                <Text className="text-gray-400">
                 ${2.99}
                </Text>
            </View> 


            <View className="flex-row  justify-between">
             <Text >Basket Total</Text>
                <Text className="font-extrabold">
                 ${(Number((((total) * 1.27).toFixed(2))) + 2.99).toFixed(2)}
                </Text>
            </View>

            <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4 " onPress={()=>navigation.navigate("PreparingOrderScreen")}>
                <Text className="text-center text-white texl-xl font-bold">
                    Place order
                </Text>
            </TouchableOpacity>
       </View>
      </View>
    </SafeAreaView>
  );
}
