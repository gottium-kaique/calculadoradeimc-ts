import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"

export const Text = styled.Text`
  font-family: "Montserrat";
  color: #fff;
`

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Button = styled(LinearGradient).attrs({
  colors: ["#FF7373", "#FDDB33"],
  start: [0, 2],
  end: [1, 0],
})`
  padding: 12px 20px;
  border-radius: 8px;
  margin-top: 12px;
  width: 150px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
  keyboardType: "numeric",
})`
  padding: 12px 20px;
  background: #334;
  border-radius: 8px;
  margin-top: 10px;
  color: #fff;
`

export const Title = styled(Text)`
  font-size: 24px;
  font-family: "Montserrat Semibold";
`

export const Description = styled(Text)`
  margin: 12px 0;
  font-size: 16px;
`

export const Content = styled.View`
  padding: 30px;
  border-radius: 24px;
  elevation: 12;
  box-shadow: 0 2px 5px rgba(0,0,0,0.30);
  background: #445;
  width: 310px;
`

export const ButtonText = styled(Text)`
  color: #000;
  font-family: "Montserrat Semibold";
  font-size: 16px;
`

export const Result = styled.View`
  margin-top: 20px;
  background: #334;
  border-radius: 12px;
  padding: 20px;
`

export const ResultText = styled(Text)`
  font-size: 20px;
`