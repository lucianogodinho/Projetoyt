import { Container } from "./your-videos-style";
import { useAppContext } from "../../contexts/openMenu";

function YourVideos() {

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      <h1>Página em construção - Seus vídeos</h1>
    </Container>
  )
}

export default YourVideos;