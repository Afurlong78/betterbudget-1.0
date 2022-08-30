import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
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

  font-family: "Poppins", sans-serif;
`;

export const InputBtn = styled.button`
  height: 100%;
  width: 3rem;
  background: black;
  color: white;

  border-radius: 10px;
  border: 2px solid black;
  margin-right: 10px;

  font-family: "Poppins", sans-serif;

  &:hover {
    background: white;
    color: black;
  }
`;

export const SubmitBtn = styled.button`
  height: 3rem;
  width: 10rem;

  background: black;
  color: white;

  border: 2px solid black;
  border-radius: 10px;

  font-family: "Poppins", sans-serif;

  &:hover {
    background: white;
    color: black;
  }
`;

// export const ContentRow = styled.div`

//   display:flex;
//   justify-content:center;
//   align-items:center;

//   background: background: rgba(0, 0, 0, 0.2);
// `

// export const NewContentContainer = styled.div`

// `

//----------------------------------------------------------//
//----------------------------------------------------------//
//----------------------------------------------------------//
//----------------------------------------------------------//

export const FormIconColumn = styled.div`
  height: 100%;
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px 0px 0px 10px;
  background: #747474;

  /* border-top: 8px solid #e5e5e5;
  border-left: 8px solid #e5e5e5;
  border-bottom: 8px solid #e5e5e5; */

  color: white;
`;

export const FormIcon = styled.div`
  height: 90%;
  width: 90%;

  color: white;

  display: flex;
  justify-content: end;
  align-items: center;
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

  border-top: 2px solid #cecece;
  border-right: 2px solid #cecece;
  border-left: 2px solid black;
  border-bottom: 2px solid #cecece;
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

  color: black;
`;

export const FormHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;

  padding-top: 15px;
  padding-left: 15px;

  color: black;
`;

export const FormBtnRow = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBtn = styled.button`
  height: 3rem;
  width: 10rem;

  color: black;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  padding: 10px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`;

export const FormTextContainer = styled.div`
  height: 3rem;
  width: 6rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;
