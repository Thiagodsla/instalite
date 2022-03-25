import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        VAI CAGA
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: "100%", // ocupa 100% da tela
    alignItems: 'center', // alinha horizontal
    justifyContent: 'center', // alinha na vertical
    backgroundColor: '#f5f5'
  }
}) 

