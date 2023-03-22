import { useAppContext } from "../../contexts/openMenu";
import { Container, Divider } from "./menu-style";
import HomeMenu from "./containers/home-menu";
import LibraryMenu from "./containers/library-menu";
import ExplorerMenu from "./containers/explorer-menu";
import MostMenu from "./containers/most-menu";
import ConfigMenu from "./containers/config-menu";


const Menu: React.FC = () => {

  const { openMenu } = useAppContext();

  
  const menuItems = [
    { component: HomeMenu },
    { component: LibraryMenu },
    { component: ExplorerMenu },
    { component: MostMenu },
    { component: ConfigMenu }
  ];
  
  const shouldRenderAllItems = openMenu;
  const shouldRenderDivider = menuItems.length > 1 && shouldRenderAllItems;
  
  return (
    <Container openMenu={openMenu}>
      {menuItems.map((menuItem, index) => (
        <div key={index} style={{ width: "100%" }}>
          {(shouldRenderAllItems || index === 0) && (
            <>
              {<menuItem.component />}
              {shouldRenderDivider && index !== menuItems.length - 1 && <Divider />}
            </>
          )}
        </div>
      ))}
    </Container>
  )
}

export default Menu;