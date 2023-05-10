import styled from "styled-components";

interface ValidEmailProps {
  validEmail: boolean
}

interface ValidPasswordProps {
  validPassword: boolean
}

interface invalidMessageProps {
  invalid: boolean
}

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  width: 480px;
  height: 530px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 45px;
  box-sizing: border-box;

  @media(max-width: 834px) {
    width: 550px;
    height: 530px;
    padding: 60px 10px;
  }

  @media(max-width: 414px) {
    width: 350px;
    height: 530px;
    padding: 60px 10px;
  }
`;

export const GoogleLogo = styled.img`
  width: 70px;
  height: 25px;
`;
export const Title = styled.h2`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 400;
  margin: 10px 0;
`;
export const SubTitle = styled.h4`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0 30px 0;
`;

export const EmailInput = styled.input<ValidEmailProps>`
  width: 100%;
  height: 50px;
  border: ${({validEmail}) => validEmail? '1px solid #d3d3d3' : '1px solid red'};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({validEmail}) => validEmail? '#1a75ff' : 'red'};
    border-width: 2px;
    outline: none;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
`;

export const InvalidEmailMessage = styled.span<invalidMessageProps>`
  display: ${({invalid}) => invalid? 'none' : 'block'};
  font-size: 14px;
  color: red;
`;

export const InvalidPasswordMessage = styled.span<invalidMessageProps>`
  display: ${({invalid}) => invalid? 'none' : 'block'};
  font-size: 14px;
  color: red;
`;

export const PasswordInput = styled.input<ValidPasswordProps>`
  width: 100%;
  height: 50px;
  border: ${({validPassword}) => validPassword? '1px solid #d3d3d3' : '1px solid red'};
  border-radius: 5px;
  margin-top: 10px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({validPassword}) => validPassword? '#1a75ff' : 'red'};
    border-width: 2px;
    outline: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  box-sizing: border-box;
  margin-top: 30px;
`;

export const SignUp = styled.span`
  color:  #1a75ff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #005ce6;
  }
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 100%;
  border: none;
  background-color: #1a75ff;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-color: #005ce6;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 5px;
`;