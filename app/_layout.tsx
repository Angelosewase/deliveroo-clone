import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack>
    
        <Stack.Screen name="index" />
        <Stack.Screen name="HomeScreen" />
        <Stack.Screen name="RestaurantScreen" />
    
    </Stack>
    </Provider>
  );
}
