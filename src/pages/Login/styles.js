import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding: 60px 0px;
  font-family: sans-serif;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 350px;
  border:1px solid #0003;
  box-shadow: 1px 1px 2px #0003;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

export const Form = styled.form`

`;


export const Label = styled.label`
  font-size: 25px;
  font-weight: 450;
  font-family: sans-serif;
  margin-top: 0;
  color: #676767;
`;

export const email = styled.label`
  margin: 30px;
  font-family: sans-serif;

`;

export const password = styled.div`
  margin-bottom: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img{
    margin-left: -35px;
    user-select: none;
  }
`;

export const labelOne = styled.label`
    font-size: 17px;
    font-family: Anybody;
`;

export const ContentW = styled.div`
  margin-top: 10px;
  font-family: Anybody;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 300px;
  height: 44px;
  border:1px solid #676767;
  border-radius: 4px;
  background-color: #fff;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Button = styled.button`
  margin-top: 35px;
  font-family: sans-serif;
  font-size: 20px;
  width: 250px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #0064fa;
  color: #fff;
  transition: all ease-in 0.3s;

  &:hover{
    opacity: 0.9;
  }
`;

export const img = styled.img`

  width: 174px;
  height: 173px;
  flex-shrink: 0;

`;