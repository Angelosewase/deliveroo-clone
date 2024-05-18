import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  const route = useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-gray-50"
    >
      <Text>Please click on the button below to navigate to the home screen</Text>
      <Button 
      title="home page" 
      onPress={()=>route.replace('HomeScreen')}
      />

    </View>
  );
}
