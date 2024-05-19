import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "@/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItemsWithId ,removeFromBasket} from "@/features/basketSlice";

type props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: props) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
 const   dispatch = useDispatch()
 const items = useSelector( (state:any) => selectBasketItemsWithId(state, id))

  const addItemToBasket =()=>{
    dispatch(addToBasket({id ,name, description, price, image}))
  }

  const removeItemFromBasket =()=>{

    if(!(items.length >0)) return;
    dispatch(removeFromBasket({id}))
  }
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
            <TouchableOpacity 
            disabled={!(items.length > 0)}
            onPress={removeItemFromBasket}
            >
              <MinusCircleIcon size={40} 
              color={items.length >0 ? "#00CCBB":"gray"} />
            </TouchableOpacity>
                <Text>
                    {items.length}
                </Text>
            <TouchableOpacity onPress={addItemToBasket }>
              <PlusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
