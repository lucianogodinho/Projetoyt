import { 
  ButtonContainer, 
  ButtonIcon, 
  Container, 
  Logo, 
  LogoContainer,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButtons, 
  LinkLogo,
  LoginContainer,
  LoginButton,
  Span,
  LoginIcon,
  DropDownMenu,
  DropDownMenuContent,
  LogOutButton,
  UserInfoContainer,
  UserName,
  ClearButton,
  CloseImg
} from "./header-style";
import Menu from '../../assets/menu.png'
import Logoyt from '../../assets/logoyoutube.png'
import Lupa from '../../assets/search.png'
import Mic from '../../assets/microfone.png'
import Sino from '../../assets/sino.png'
import Video from '../../assets/videoicon.png'
import logout from '../../assets/logout.png'
import LoginIconPng from '../../assets/login-icon.png'
import VideoIcon from '../../assets/video.png'
import CloseIcon from '../../assets/close.png'
import { useAppContext } from "../../contexts/openMenu";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState} from "react";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from "../../contexts/searchContext";
import { useCategoryContext } from "../../contexts/searchCategories";



const Header: React.FC = () => {

  const { openMenu, setOpenMenu } = useAppContext();

  const [clearButton, setClearButton] = useState(false)

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext)

  

  const handleDropDownMenu = () => {
    setOpenDropDownMenu(!openDropDownMenu)
  }

  const {setSearch} = useSearchContext()

  const [inputValue, setInputValue] = useState('')

  function handleInput(inputValue: string) {
    setInputValue(inputValue)
    if(inputValue === '') {
      setClearButton(false)
    } else (
      setClearButton(true)
    )
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setInputValue('')
    setClearButton(false)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const goOut = () => {
    logOut()
    handleDropDownMenu()
    navigate('/')
  }

  const goYourVideos = () => {
    navigate('/yourvideos')
    handleDropDownMenu()
  } 

  const {setCategoryId} = useCategoryContext()


  return (
    <Container>

      <LogoContainer>

        <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
          <ButtonIcon alt="logo menu" src={Menu}/>
        </ButtonContainer>

        <LinkLogo to='/' onClick={() => setCategoryId('0')}>
          <Logo alt="logo youtube" src={Logoyt} />
        </LinkLogo>

      </LogoContainer>

      <SearchContainer>

        <SearchInputContainer>
          <SearchInput
            ref={inputRef}
            value={inputValue} 
            placeholder="Pesquisar" 
            onChange={(e) => {
              handleInput(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(inputValue)
                navigate('/search')
              }
            }}
          />
          <ClearButton 
            clearButton={clearButton}
            onClick={clearInput}
          >

            <CloseImg src={CloseIcon}/>
            
          </ClearButton>
        </SearchInputContainer>

        <SearchButton 
          onClick={() => {
            if (inputValue.trim() === '') {
              alert('Digite alguma palavra chave antes de tentar pesquisar')
              return;
            }
            setSearch(inputValue)
            navigate('/search')
          }
        }>
          <ButtonIcon alt="ícone lupa" src={Lupa}/>
        </SearchButton>

        <ButtonContainer margin='0 0 0 10px'>
          <ButtonIcon alt="ícone microfone" src={Mic}/>
        </ButtonContainer>

      </SearchContainer>

      {login?
        <HeaderButtons>
          <ButtonContainer margin='0 0 0 10px'>
            <ButtonIcon alt="ícone vídeo" src={Video}/>
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 10px'>
            <ButtonIcon alt="ícone notificação" src={Sino}/>
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 10px' onClick={handleDropDownMenu} >
            {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
          </ButtonContainer>
          
          <DropDownMenu openDropDownMenu={openDropDownMenu}>

            <UserInfoContainer>
              <ButtonContainer 
              margin='0 0 0 10px' 
              onClick={handleDropDownMenu} 
              style={{backgroundColor: '#f2f2f2'}}
              >
                {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
              </ButtonContainer>
              <UserName>{user && user.nome ? user.nome : ''}</UserName>
            </UserInfoContainer>

            <DropDownMenuContent onClick={goOut}>
              <ButtonIcon alt="ícone logout" src={logout} />
              <LogOutButton>
                Sair
              </LogOutButton>
            </DropDownMenuContent>

            <DropDownMenuContent onClick={goYourVideos}>
              <ButtonIcon alt="ícone logout" src={VideoIcon} />
              <LogOutButton>
                Seus vídeos
              </LogOutButton>
            </DropDownMenuContent>

          </DropDownMenu>

        </HeaderButtons>
        :
        <LoginContainer onClick={() => navigate('/login')}>
          <LoginButton>
            <LoginIcon alt="Login Icon" src={LoginIconPng} />
            <Span>Fazer login</Span>
          </LoginButton>
        </LoginContainer>
      }


    </Container>
  )
}

export default Header;