import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="HomeScreen" />
        <Stack.Screen name="RestaurantScreen" />
        <Stack.Screen
          name="BasketScreen"
          options={{
            presentation: "modal",
            headerShown: false,
            animation:"slide_from_bottom"
          }}
        />
        <Stack.Screen name="PreparingOrderScreen" options={{
          headerShown:false,
          presentation:"fullScreenModal",
          animation:"slide_from_bottom"
        }}/>
        <Stack.Screen name="DeliveryScreen" options={{
          headerShown:false
        }} />
      </Stack>
    </Provider>
  );
}
