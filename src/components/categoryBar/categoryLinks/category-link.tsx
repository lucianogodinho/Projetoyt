import { Container } from "./category-link-style";

function CategoryLink({link, name} : any) {
  return (
    <Container to={link}>
      {name}
    </Container>
  )
}

export default CategoryLink;