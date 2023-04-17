import { useAppContext } from "../../../contexts/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  Link
} from "../menu-style";
import History from '../../../assets/historia.png'
import Videos from '../../../assets/video.png'
import Watch from '../../../assets/relogio.png'
import Like from '../../../assets/gostar.png'
import Play from '../../../assets/botao-play.png'

const items = [
  {icon: History, description: 'Histórico', link: '/historico'},
  {icon: Videos, description: 'Seus vídeos', link: '/yourvideos'},
  {icon: Watch, description: 'Assistir mais tarde', link: '/assistir-mais-tarde'},
  {icon: Like, description: 'Vídeos marcados como "Gostei"', link: '/like'},
  {icon: Play, description: 'Mix - Cd completo gospel', link: '/mix'}
]

function LibraryMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link to={item.link}>
          <MenuItem key={index} openMenu={openMenu}>
            <ButtonIcon alt="Ícone" src={item.icon}/>
            <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
          </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default LibraryMenu;