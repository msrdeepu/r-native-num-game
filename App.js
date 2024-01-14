import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGame from "./screens/StartGame";
import MainGame from "./screens/MainGame";
import GameOver from "./screens/GameOver";
import PrimaryBtn from "./components/PrimaryBtn";

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
      <PrimaryBtn primarybtntext={"Confirm"} />
      <PrimaryBtn primarybtntext={"Reset"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
