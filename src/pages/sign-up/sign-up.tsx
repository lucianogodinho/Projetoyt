import { 
  ButtonsContainer, 
  CheckBoxContainer, 
  ComparePassword, 
  GoogleLogo, 
  MainContainer, 
  MessageContainer, 
  PasswordContainer, 
  PasswordSpan, 
  SignIn, 
  SignUpButton, 
  SignUpContainer, 
  SubTitle, 
  Title, 
  UserEmailInput, 
  InputEmpty, 
  UserNameInput, 
  UserPasswordInput 
} from "./sign-up-style";
import googleLogo from '../../assets/google-logo.png'
import { useState, useContext, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";



function SignUp() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [UserNameValid, setUserNameValid] = useState(true)
  const [UserEmailValid, setUserEmailValid] = useState(true)
  const [UserPasswordValid, setUserPasswordValid] = useState(true)

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const comparePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current !== null) {
      nameRef.current.focus();
    }
  },[])

  const { handleCreateUser } = useContext(UserContext)

  const createUser = () => {
    if (userName.trim() !== '') {
      setUserNameValid(true)
    }
    if (userEmail.trim() !== '') {
      setUserEmailValid(true)
    }
    if (userPassword.trim() !== '' && comparePassword.trim() !== '') {
      setUserPasswordValid(true)
    }
    if (userName.trim() === '' && userEmail.trim() === '' && userPassword.trim() === '') {
      setUserNameValid(false)
      setUserEmailValid(false)
      setUserPasswordValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (userName.trim() === '') {
      setUserNameValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (userEmail.trim() === '') {
      setUserNameValid(true)
      setUserEmailValid(false)
      if (emailRef.current) {
        emailRef.current.focus()
      }
    }
    else if (userPassword.trim() === '') {
      setUserNameValid(true)
      setUserEmailValid(true)
      setUserPasswordValid(false)
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    }
    else if (comparePassword.trim() === '') {
      setUserNameValid(true)
      setUserEmailValid(true)
      setUserPasswordValid(false)
      if (comparePasswordRef.current) {
        comparePasswordRef.current.focus()
      }
    }
    else {
      handleCreateUser(userName,userEmail,userPassword)
    }
    
  }
  
  return (
    <MainContainer>
      <SignUpContainer>
        <GoogleLogo alt="Logotipo google" src={googleLogo} />
        <Title>Criar sua conta nesse projeto</Title>
        <SubTitle>Prosseguir no Youtube</SubTitle>
        <UserNameInput
          valid={UserNameValid} 
          type="text"
          placeholder="Nome Sobrenome"
          value={userName}
          ref={nameRef}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <MessageContainer>
          <InputEmpty valid={UserNameValid}>
            Digite o seu nome
          </InputEmpty>
        </MessageContainer>
        <UserEmailInput
          valid={UserEmailValid} 
          type="email"
          placeholder="Seu endereço de e-mail"
          value={userEmail}
          ref={emailRef}
          onChange={(e) => {
            setUserEmail(e.target.value)
          }}
        />
        <MessageContainer>
          <InputEmpty valid={UserEmailValid}>
            Digite o seu e-mail
          </InputEmpty>
        </MessageContainer>
        <PasswordContainer>
          <UserPasswordInput
            valid={UserPasswordValid} 
            type={showPassword? 'text' : 'password'} 
            placeholder="Senha"
            value={userPassword}
            ref={passwordRef}
            onChange={(e) => {
              setUserPassword(e.target.value)
            }}
            maxLength={8}
          />
          <ComparePassword
            valid={UserPasswordValid}  
            type={showPassword? 'text' : 'password'} 
            placeholder="Confirmar"
            value={comparePassword}
            ref={comparePasswordRef}
            onChange={(e) => {
              setComparePassword(e.target.value)
            }}
            maxLength={8}
          />
        </PasswordContainer>
        <MessageContainer>
          <InputEmpty valid={UserPasswordValid}>
            Digite uma senha e confirme
          </InputEmpty>
        </MessageContainer>
        <PasswordSpan>
          Use 8 caracteres com uma combinação de letras, números e símbolos.
        </PasswordSpan>
        <CheckBoxContainer>
          <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword}/>
          <label htmlFor="show-password">Mostrar senha</label>
        </CheckBoxContainer>
        <ButtonsContainer>
          <SignIn onClick={() => navigate('/login')}>Faça login em vez disso</SignIn>
          <SignUpButton onClick={createUser}>Próxima</SignUpButton>
        </ButtonsContainer>
      </SignUpContainer>
    </MainContainer>
  )
}

export default SignUp;