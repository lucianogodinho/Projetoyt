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
  const [formatEmailValid, setFormatEmailValid] = useState(true)
  const [samePassword, setSamePassword] = useState(true)

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
      setUserEmailValid(false)
      setFormatEmailValid(true)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setFormatEmailValid(false)
      setUserEmailValid(false)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (userPassword.trim() === '' || userPassword.length < 8) {
      setUserPasswordValid(false)
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    }
    else if (comparePassword.trim() === '') {
      setUserPasswordValid(false)
      if (comparePasswordRef.current) {
        comparePasswordRef.current.focus()
      }
    }
    else if (userPassword !== comparePassword) {
      setUserPasswordValid(false)
      setSamePassword(false)
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
          type='email'
          placeholder="Seu endereço de e-mail"
          value={userEmail}
          ref={emailRef}
          onChange={(e) => {
            setUserEmail(e.target.value)
          }}
        />
        <MessageContainer>
          <InputEmpty valid={UserEmailValid}>
            {
            formatEmailValid? 
            'Digite seu e-mail.' 
            : 
            'O formato desse e-mail é inválido. Digite um e-mail válido.'
            }
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
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
              }
              if(e.key === 'Enter') {
                createUser()
              }
            }}
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
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
              }
              if(e.key === 'Enter') {
                createUser()
              }
            }}
          />
        </PasswordContainer>
        <MessageContainer>
          <InputEmpty valid={UserPasswordValid}>
            {
              samePassword?
              'Digite uma senha de pelo menos 8 caracteres e confirme.'
              :
              'Senha inválida. Verifique se estão iguais.'
            }
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