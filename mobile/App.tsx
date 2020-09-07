import React from "react"
import { Wrapper } from "./src/styles"
import { StatusBar, Text } from "react-native"

import Home from "./src/components/Home"

import { 
  useFonts, 
  Montserrat_400Regular as Montserrat, 
  Montserrat_600SemiBold 
} from "@expo-google-fonts/montserrat"

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat,
    "Montserrat Semibold": Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="#334" translucent />
      <Wrapper>
        <Home/>
      </Wrapper>
    </>
  )
}

export default App