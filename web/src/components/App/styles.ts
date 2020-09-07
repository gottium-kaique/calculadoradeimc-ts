import styled from "styled-components"

export const Wrapper = styled.div`
 h3 {
   margin: 12px 0;
 }
`

export const Box = styled.div`
  background: #445;
  padding: 30px 35px;
  width: 600px;
  border-radius: 24px;
  box-shadow: 0 6px 5px rgba(0,0,0,0.30), 0 -6px 5px rgba(0,0,0,0.10);
`

export const Input = styled.input`
  padding: 0 20px;
  border-radius: 5px;
  margin-top: 10px;
  height: 45px;
  background: #334;
  margin-left: 20px;
  color: #fff;
  &::placeholder {
    color: #fff;
    font-weight: 700;
  }
`

export const Button = styled.button`
  background-image: linear-gradient(-90deg, #FF7373 0%, #FDDB33 100%);
  border-radius: 5px;
  padding: 0 20px;
  border: 0;
  height: 45px;
  color: #1A1A1A;
  font-size: 16px;
  font-family:"Montserrat";
  margin-top: 18px;
  font-weight: 700;
  cursor: pointer;
`

export const Result = styled.div`
  padding: 20px 30px;
  background: #334;
  border-radius: 12px;
  margin-top: 10px;
`