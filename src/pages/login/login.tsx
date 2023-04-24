import { ButtonsContainer, EmailInput, GoogleLogo, InvalidEmailMessage, InvalidPasswordMessage, LoginButton, LoginContainer, MainContainer, MessageContainer, PasswordInput, SignUp, SubTitle, Title } from "./login-style";
import { useContext, useState, useRef } from "react";
import { UserContext } from "../../contexts/userContext";
import googleLogo from '../../assets/google-logo.png'
import { useNavigate } from "react-router-dom";

function Login() {

  const { handleLogin } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const [validEmail, setValidEmail] = useState(true)

  const [validPassword, setValidPassword] = useState(true)

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const userLogin = () => {
    if (email.trim() === '') {
      setValidEmail(false)
      if (emailRef.current) {
        emailRef.current.focus()
      }
    }
    else if (password.trim() === '') {
      setValidPassword(false)
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    }
    else {
      handleLogin(email, password)
    }
  }

  return (
    <MainContainer>
      <LoginContainer>
        <GoogleLogo alt="logotipo google" src={googleLogo} />
        <Title>Fazer login</Title>
        <SubTitle>Prosseguir no YouTube</SubTitle>
        <EmailInput 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          validEmail={validEmail}
          ref={emailRef}
        />
        <MessageContainer>
          <InvalidEmailMessage invalid={validEmail}>
            Digite um e-mail
          </InvalidEmailMessage>
        </MessageContainer>
        <PasswordInput 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          validPassword={validPassword} 
        />
        <MessageContainer>
          <InvalidPasswordMessage invalid={validPassword}>
            Digite a sua senha
          </InvalidPasswordMessage>
        </MessageContainer>
        <ButtonsContainer>
          <SignUp onClick={() => navigate('/sign-up')}>
            Criar conta
          </SignUp>
          <LoginButton 
            onClick={userLogin}
          >
            Próxima
          </LoginButton>
        </ButtonsContainer>
      </LoginContainer>
    </MainContainer>
  )
}

export default Login;