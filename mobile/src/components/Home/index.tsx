import React, { useEffect, useState } from "react"
import { 
  Wrapper, 
  Title, 
  Input, 
  Content, 
  Button, 
  ButtonText, 
  Description,
  Text,
  Result,
  ResultText
} from "./styles"

import { TouchableWithoutFeedback } from "react-native"

const Home = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const [result, setResult] = useState(0)
  const [colorImc, setColorImc] = useState<string>("#000")

  useEffect(() => {
    if (result > 0) {
      if (result < 18.5) {
        setColorImc("#ff0000")
      }else if (result < 24.9) {
        setColorImc("#0050ff")
      }else if (result < 29.9) {
        setColorImc("#ffdd00")
      }else if (result < 39.9) {
        setColorImc("orange")
      }else if (result > 40) {
        setColorImc("red")
      }
    }
  }, [result])

  const imc = (weight: number, height: number) => weight / height ** 2

  function handleSubmit() {
    if (height && weight) {
      return setResult(imc(weight, height))
    }
    setResult(0)
  }

  return (
    <Wrapper>
      <Content>
        <Title>Calculadora de IMC</Title>
        <Description>
          O IMC significa índice de massa corporal, que é utilizado para calcular 
          o peso ideal de uma pessoa.
        </Description>
        <Input 
          placeholder="Sua altura" 
          onChangeText={ text => setHeight(+text) }
        />
        <Input 
          placeholder="Seu peso" 
          onChangeText={ text => setWeight(+text) }
        />
        <TouchableWithoutFeedback onPress={ handleSubmit }>
          <Button>
            <ButtonText>
              Calcular IMC
            </ButtonText>
          </Button>
        </TouchableWithoutFeedback>
        {!!result && (
            <Result>
              <ResultText>O seu imc é {result.toFixed(2)}</ResultText>
              <Text style={{color: colorImc}}>
                {
                  0 < result &&
                      result < 18.5 ? "Magreza" : 
                      result < 24.5 ? "Peso normal": 
                      result < 29.9 ? "Sobrepeso" : 
                      result < 39.9 ? "Obesidade 2": 
                      result > 40 && "Obesidade 3"
                }
              </Text>
            </Result>
          )}
      </Content>
    </Wrapper>
  )
}
  
export default Home