import { Container, LibraryContainer } from "./library-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function Library() {

  const { openMenu } = useAppContext();

  return (
    <LibraryContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Library</h1>
      </Container>
    </LibraryContainer>
  )
}

export default Library;