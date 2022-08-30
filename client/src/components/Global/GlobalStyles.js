import styled from "styled-components";
import { keyframes } from "styled-components";
import bg from '../../Assets/bg.jpg';

const MainContent = styled.div`
  height: 100%;
  width: 100%;

  font-family: "Poppins", sans-serif;
`;

const Canvas = styled.div`
  width: 100%;
  height: 100vh;

  background-size: cover;

  display: flex;

  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media all and (max-height: 920px) {
    height: 100%;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // @media all and (max-height: 920px) {
  //   height: 100%;
  // }
`;

export const GlobalRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: auto;
  height: auto;

  gap: 5rem;

  @media all and (max-width: 1560px) {
    gap: 1rem;
  }

  @media all and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    gap: 0rem;
  }
`;

export const ResponsiveContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowStart = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: auto;

  @media all and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  @media all and (max-width: 600px) {
    align-items: center;
  }
`;

export const RowEnd = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 100%;
  height: auto;

  @media all and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  @media all and (max-width: 600px) {
    align-items: center;
  }
`;

export const Column = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  // margin-bottom: 40px;
`;

export const Error = styled.p`
  color: red;
  font-family: "Poppins", sans-serif;

  height: 0.7rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.7rem;
`;

//---------------------------------------------------------------//
//---------------------------------------------------------------//
//------------------------FORMS----------------------------------//
//---------------------------------------------------------------//

export const FormContainer = styled.form`
  height: 35rem;
  width: 45rem;

  // background: #D5D5D5;
  background: #e5e5e5;
  border-radius: 10px;

  margin: 0 auto;
  margin-top: 180px;
  margin-bottom: 100px;

  display: flex;

  justify-content: start;
  align-items: center;

  overflow: hidden;

  z-index: 1;

  transition: all 500ms ease-in-out;

  @media all and (max-height: 920px) {
    margin-top: 180px;
  }

  @media all and (max-width: 40rem) {
    height: 35rem;
    width: 35rem;

    font-size: 0.9rem;
  }

  @media all and (max-width: 35rem) {
    width: 95%;
  }

  @media all and (max-height: 750px) {
    margin-top: 110px;
  }
`;

export const FormIconColumn = styled.div`
  height: 100%;
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px 0px 0px 10px;
  /* background: #747474; */
  background-image: linear-gradient(to bottom right, #cecece, #747474);

  /* border-top: 8px solid #e5e5e5;
  border-left: 8px solid #e5e5e5;
  border-bottom: 8px solid #e5e5e5; */

  color: white;

  @media all and (max-width: 35rem) {
    display: none;
  }
`;

export const iconAnimation = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity: 1
  }
`;

export const FormIcon = styled.div`
  height: 90%;
  width: 90%;

  color: white;

  display: flex;
  justify-content: end;
  align-items: center;

  transition: all 300ms;
  animation: 1s ease-out 0s 1 ${iconAnimation};
`;

export const FormCategoryText = styled.p`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;

  height: 3rem;
`;

export const FormInputColumn = styled.div`
  width: 29rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: white;

  border-radius: 0px 10px 10px 0px;

  border-top: 3px solid #cecece;
  border-right: 3px solid #cecece;
  border-left: 3px solid #575757;
  border-bottom: 3px solid #cecece;

  @media all and (max-width: 35rem) {
    width: 100%;
    height: 100%;

    border-left: 3px solid #cecece;
    border-radius: 10px 10px 10px 10px;
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormHeaderTextContainer = styled.div`
  height: 140px;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  color: #373737;
`;

export const headerTextAnimation = keyframes`
  0%{
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0px);
  }
`;

export const FormHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;

  letter-spacing: 0.8px;

  padding-top: 15px;
  padding-left: 15px;

  color: #373737;

  transition: all 300ms;
  animation: 1s ease-out 0s 1 ${headerTextAnimation};
`;

export const FormBtnRow = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px;
`;

export const FormBtn = styled.button`
  height: 3rem;
  width: 10rem;

  color: #373737;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  padding: 10px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  &:hover {
    border: 2px solid #373737;
    transform: scale(1.1);
    color: #373737;
    box-shadow: 4px 10px 10px 0px rgba(0, 0, 0, 0.2);
    background: white;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 75%;
  height: 3rem;
  background: #fcfcfc;
  color: black;

  border: 2px solid #9f9f9f;

  font-size: 1rem;

  font-family: "Poppins", sans-serif;

  padding-left: 5px;
`;

export const InputRow = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px;

  color: #373737;

  font-family: "Poppins", sans-serif;
`;

export const FormTextContainer = styled.div`
  height: 3rem;
  width: 6rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;

//----------------------------------------------------------//
//----------------------------------------------------------//
//---------------successful registry------------------------//
//----------------------------------------------------------//

export const SuccessfulRegistryContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: ${(props) => {
    if (props.status) {
      return `10`;
    } else {
      return `0`;
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  transition: all 300ms;

  opacity: ${(props) => {
    if (props.status) {
      return `1`;
    } else {
      return `0`;
    }
  }};
`;

export const SuccessTextContainer = styled.div`
  height: 20rem;
  width: 50%;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  color: #292929;
  letter-spacing: 0.8px;

  background: white;
  border-radius: 8px;

  font-size: 1rem;

  font-family: "Poppins", sans-serif;

  border: 2px solid #292929;
`;

export const SuccessHeaderText = styled.h3`
  color: #292929;
  letter-spacing: 0.8px;

  font-size: 2rem;

  font-family: "Poppins", sans-serif;

  margin-bottom: 30px;
`;

export const CloseSuccessfulRegistry = styled.button`
  position: absolute;

  border: none;

  background: transparent;

  top: 100px;
  right: 10px;

  height: 3rem;
  width: 3rem;

  color: white;

  transition: transform 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

const Styled = {
  MainContent,
  Canvas,
  ResponsiveContainer,
  FormContainer,
  MainContainer,
  RowStart,
  RowEnd,
  GlobalRow,
  Column,
  Error,
  FormIconColumn,
  FormIcon,
  FormCategoryText,
  FormInputColumn,
  FormInputContainer,
  FormHeaderTextContainer,
  FormHeaderText,
  FormBtnRow,
  FormBtn,
  Input,
  InputRow,
  FormTextContainer,
  SuccessfulRegistryContainer,
  SuccessTextContainer,
  CloseSuccessfulRegistry,
  SuccessHeaderText,
};

export default Styled;
