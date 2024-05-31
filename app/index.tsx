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
      <Text className="mb-4 text-xl">This is the my first react native project and I'm very exited to continue my mobile devlopment journey . Feel free to check out </Text>
      <Button 
      title="start" 
      onPress={()=>route.replace('HomeScreen')}
      />

    </View>
  );
}
