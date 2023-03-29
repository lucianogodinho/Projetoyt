import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 10px 0 100px'};
  box-sizing: border-box;
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.8);
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const EmailInput = styled.input`

`;

export const PasswordInput = styled.input`

`;

export const LoginButton = styled.button`
  width: 60px;
  height: 20px;
`;
