import { Container } from "./category-link-style";

interface Props {
  link: string,
  name: string
}

function CategoryLink({link, name} : Props) {
  return (
    <Container to={link}>
      {name}
    </Container>
  )
}

export default CategoryLink;