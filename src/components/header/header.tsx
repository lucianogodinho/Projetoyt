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
  LinkLogo
} from "./header-style";
import Menu from '../../assets/menu.png'
import Logoyt from '../../assets/logoyoutube.png'
import Lupa from '../../assets/search.png'
import Mic from '../../assets/microfone.png'
import Sino from '../../assets/sino.png'
import Video from '../../assets/videoicon.png'
import { useAppContext } from "../../contexts/openMenu";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


const Header: React.FC = () => {

  const { openMenu, setOpenMenu } = useAppContext();

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const { login, logOut, user } = useContext(UserContext)

  return (
    <Container>

      <LogoContainer>

        <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
          <ButtonIcon alt="logo menu" src={Menu}/>
        </ButtonContainer>

        <LinkLogo to='/'>
          <Logo alt="logo youtube" src={Logoyt} />
        </LinkLogo>

      </LogoContainer>

      <SearchContainer>

        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar"/>
        </SearchInputContainer>

        <SearchButton>
          <ButtonIcon alt="ícone lupa" src={Lupa}/>
        </SearchButton>

        <ButtonContainer margin='0 0 0 10px'>
          <ButtonIcon alt="ícone microfone" src={Mic}/>
        </ButtonContainer>

      </SearchContainer>

      <HeaderButtons>

        <ButtonContainer margin='0 0 0 10px'>
          <ButtonIcon alt="ícone vídeo" src={Video}/>
        </ButtonContainer>

        <ButtonContainer margin='0 0 0 10px'>
          <ButtonIcon alt="ícone notificação" src={Sino}/>
        </ButtonContainer>

        {login?
          <>
            <ButtonContainer margin='0 0 0 10px'>
              {user.nome[0].toUpperCase()}
            </ButtonContainer>
            <span onClick={() => logOut()}>Sair</span>
          </> 
          :
          <button onClick={() => navigate('/login')}>Fazer Login</button>
        }

      </HeaderButtons>

    </Container>
  )
}

export default Header;