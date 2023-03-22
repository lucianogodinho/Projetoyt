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


const Header: React.FC = () => {

  const { openMenu, setOpenMenu } = useAppContext();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

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

        <ButtonContainer margin='0 0 0 10px'>
          R
        </ButtonContainer>

      </HeaderButtons>

    </Container>
  )
}

export default Header;