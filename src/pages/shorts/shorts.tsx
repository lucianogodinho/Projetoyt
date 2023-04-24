import { Container, ShortsContainer } from "./shorts-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function Shorts() {

  const { openMenu } = useAppContext();

  return (
    <ShortsContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Shorts</h1>
      </Container>
    </ShortsContainer>
  )
}

export default Shorts;