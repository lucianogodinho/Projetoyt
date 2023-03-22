import { Container } from "./subscribe-style";
import { useAppContext } from "../../contexts/openMenu";

function Subscribe() {

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      <h1>Página em construção - Subscribe</h1>
    </Container>
  )
}

export default Subscribe;