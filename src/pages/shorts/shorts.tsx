import { Container } from "./shorts-style";
import { useAppContext } from "../../contexts/openMenu";

function Shorts() {

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      <h1>Página em construção - Shorts</h1>
    </Container>
  )
}

export default Shorts;