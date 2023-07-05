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
  min-width: 520px;
  border:1px solid #0003;
  box-shadow: 1px 1px 2px #0003;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

export const Form = styled.form`

`;

export const Loading = styled.span`
& {
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        color: #fff;
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: #FF3D00;
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
   
`


export const Label = styled.label`
  font-size: 25px;
  font-weight: 450;
  font-family: sans-serif;
  margin-top: 0;
  color: #676767;
`;


export const FormControl = styled.div`
  margin-bottom: 30px;
  font-family: sans-serif;
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