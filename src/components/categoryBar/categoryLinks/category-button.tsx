import { Container } from "./category-button-style";

interface CategoryButtonProps {
  name: string;
}

function CategoryButton({name}: CategoryButtonProps) {

  return (
    <Container>
      {name}
    </Container>
  )
}

export default CategoryButton;