import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppText from "./components/AppText";

import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="email" size={150} color="hotpink" />
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "skyblue",
          borderRadius: 50,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 100,
          shadowColor: "gray",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 60,
        }}
      />

      <AppText
        style={{
          fontSize: 40,
          fontFamily: "Chalkboard SE",
          fontWeight: 600,
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline line-through",
          textAlign: "center",
          lineHeight: 40
        }}
      >
        
        I love React Native! My first react native app here is some more text
      </AppText>

      <View
        style={{
          backgroundColor: "skyblue",
          width: 100,
          height: 100,
          paddingRight: 20,
        }}
      >
        <View style={{ backgroundColor: "gold", height: 50, width: 50 }} />
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View>
    </View>
  );
}
