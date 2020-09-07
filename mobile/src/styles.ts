import styled from "styled-components/native"
import { Platform, StatusBar } from "react-native"

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight: 0}px;
  background: #334;
`