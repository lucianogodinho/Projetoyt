import { ButtonsContainer, CheckBoxContainer, EmailInput, GoogleLogo, InvalidEmailMessage, InvalidPasswordMessage, LoginButton, LoginContainer, MainContainer, MessageContainer, PasswordInput, SignUp, SubTitle, Title } from "./login-style";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import googleLogo from '../../assets/google-logo.png'
import { useNavigate } from "react-router-dom";

function Login() {

  const { handleLogin } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const [validEmail, setValidEmail] = useState(true)

  const [formatEmailValid, setFormatEmailValid] = useState(true)

  const [validPassword, setValidPassword] = useState(true)

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus()
    }
  },[])

  const userLogin = () => {
    if (email.trim() !== '') {
      setValidEmail(true)
    }
    if (password.trim() !== '') {
      setValidPassword(true)
    }
    if (email.trim() === '' && password.trim() === '') {
      setValidEmail(false)
      setValidPassword(false)
      if (emailRef.current) {
        emailRef.current.focus()
      }
    }
    else if (email.trim() === '') {
      setValidEmail(false)
      if (emailRef.current) {
        emailRef.current.focus()
      }
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormatEmailValid(false)
      setValidEmail(false)
      if (emailRef.current) {
        emailRef.current.focus()
      }
    }
    else if (password.trim() === '' || password.length < 8) {
      setValidPassword(false)
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    }
    else {
      handleLogin(email, password)
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
          placeholder="E-mail"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              userLogin()
            }
          }}
        />
        <MessageContainer>
          <InvalidEmailMessage invalid={validEmail}>
            {
            formatEmailValid?
            'Digite o seu e-mail'
            :
            'O formato desse e-mail é inválido. Digite um e-mail válido.'
            }
          </InvalidEmailMessage>
        </MessageContainer>
        <PasswordInput 
          type={showPassword? 'text' : 'password'} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              userLogin()
            }
            if (e.key === " ") {
              e.preventDefault();
            }
          }}
          ref={passwordRef}
          validPassword={validPassword}
          placeholder="Senha"
          maxLength={8} 
        />
        <MessageContainer>
          <InvalidPasswordMessage invalid={validPassword}>
            Digite a sua senha com 8 caracteres
          </InvalidPasswordMessage>
        </MessageContainer>
        <CheckBoxContainer>
          <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
          <label htmlFor="show-password">Mostrar senha</label>
        </CheckBoxContainer>
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