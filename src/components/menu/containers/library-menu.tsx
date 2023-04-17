import { useAppContext } from "../../../contexts/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
} from "../menu-style";
import History from '../../../assets/historia.png'
import Videos from '../../../assets/video.png'
import Watch from '../../../assets/relogio.png'
import Like from '../../../assets/gostar.png'
import Play from '../../../assets/botao-play.png'

const items = [
  {icon: History, description: 'Histórico'},
  {icon: Videos, description: 'Seus vídeos'},
  {icon: Watch, description: 'Assistir mais tarde'},
  {icon: Like, description: 'Vídeos marcados como "Gostei"'},
  {icon: Play, description: 'Mix - Cd completo gospel'}
]

function LibraryMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default LibraryMenu;