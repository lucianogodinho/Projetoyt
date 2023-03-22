import { Container } from "./library-style";
import { useAppContext } from "../../contexts/openMenu";

function Library() {

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      <h1>Página em construção - Library</h1>
    </Container>
  )
}

export default Library;