import { Container, YourVideosContainer } from "./your-videos-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function YourVideos() {

  const { openMenu } = useAppContext();

  return (
    <YourVideosContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Seus vídeos</h1>
      </Container>
    </YourVideosContainer>
  )
}

export default YourVideos;