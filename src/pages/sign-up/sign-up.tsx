import { ButtonsContainer, CheckBoxContainer, ComparePassword, GoogleLogo, MainContainer, PasswordContainer, PasswordSpan, SignIn, SignUpButton, SignUpContainer, SubTitle, Title, UserEmailInput, UserNameInput, UserPasswordInput } from "./sign-up-style";
import googleLogo from '../../assets/google-logo.png'
import { useState, useContext} from "react";
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

  const { handleCreateUser } = useContext(UserContext)

  const createUser = () => {
    handleCreateUser(userName,userEmail,userPassword)
  }
    
  return (
    <MainContainer>
      <SignUpContainer>
        <GoogleLogo alt="Logotipo google" src={googleLogo} />
        <Title>Criar sua conta nesse projeto</Title>
        <SubTitle>Prosseguir no Youtube</SubTitle>
        <UserNameInput 
          type="text"
          placeholder="Nome Sobrenome"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <UserEmailInput 
          type="email"
          placeholder="Seu endereço de e-mail"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value)
          }}
        />
        <PasswordContainer>
          <UserPasswordInput 
            type={showPassword? 'text' : 'password'} 
            placeholder="Senha"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value)
            }}
            maxLength={8}
          />
          <ComparePassword 
            type={showPassword? 'text' : 'password'} 
            placeholder="Confirmar"
            value={comparePassword}
            onChange={(e) => {
              setComparePassword(e.target.value)
            }}
            maxLength={8}
          />
        </PasswordContainer>
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