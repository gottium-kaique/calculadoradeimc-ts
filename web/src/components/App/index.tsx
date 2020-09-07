import React, { 
  FormEvent, 
  useRef, 
  useState,
  useEffect,
} from "react"

import GlobalStyle from "../../assets/css/global"

import { 
  Wrapper, 
  Box, 
  Input, 
  Button, 
  Result,
} from "./styles"

const App = () => {
  const heightRef = useRef<any>({value: 0})
  const weightRef = useRef<any>({value: 0})
  const [result, setResult] = useState(0)
  const [imcColor, setColorImc] = useState<string>("")

  const imc = (weight: number, height: number) => weight / height ** 2

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (heightRef.current.value && weightRef.current.value) {
      return setResult(imc(+(weightRef.current.value), +(heightRef.current.value)))
    }

    setResult(0)
  }

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

  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <Box>
          <h1>Calculadora de IMC</h1>
          <h3>
            O IMC significa índice de massa corporal, que é utilizado para calcular 
            o peso ideal de uma pessoa.
          </h3>
          <form onSubmit={ handleSubmit }>
            <span style={{fontWeight:600,}}>Sua altura: </span>
            <Input 
              type="number" 
              placeholder="Sua altura" 
              step="0.1" 
              ref={ heightRef }
            />
            <br/>
            <span style={{fontWeight: 600,}}>Seu peso: </span>
            <Input 
              type="number" 
              placeholder="Seu peso" 
              step="0.1"
              ref={ weightRef }
            />
            <br/>
            <Button>
              Calcular IMC
            </Button>
          </form>
          {!!result && (
            <Result>
              <h2>O seu imc é {result.toFixed(2)}</h2>
              <h3 style={{color: imcColor}}>
                {
                  0 < result &&
                      result < 18.5 ? "Magreza" : 
                      result < 24.5 ? "Peso normal": 
                      result < 29.9 ? "Sobrepeso" : 
                      result < 39.9 ? "Obesidade 2": 
                      result > 40 && "Obesidade 3"
                }
              </h3>
            </Result>
          )}
        </Box>
      </Wrapper>
    </>
  )
}

export default App