import { SliderButtons, ButtonIcon, Container, Slider, SliderContent } from "./category-bar-style";
import { useAppContext } from "../../contexts/openMenu";
import BackIcon from '../../assets/back-button.png'
import NextIcon from '../../assets/next-button.png'
import CategoryButton from "./categoryLinks/category-button";
import { useState } from "react";

function CategoryBar() {

  const { openMenu } = useAppContext();

  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderWidth = 200; // largura do slider
  const containerWidth = 400; // largura do contêiner

  const handleNextClick = () => {
    // verifica se a nova posição do slider é menor que a largura total do slider menos a largura do contêiner
    if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
      setSliderPosition((prevPosition) => prevPosition - sliderWidth);
    }
  };

  const handleBackClick = () => {
    // verifica se a nova posição do slider é maior que zero
    if (sliderPosition < 0) {
      setSliderPosition((prevPosition) => prevPosition + sliderWidth);
    }
  };

  const categoryButtons = [
    {name: 'Tudo', id: '0'},
    {name: 'Jogos', id: '20'},
    {name: 'Esportes', id: '17'},
    {name: 'Ciência e tecnologia', id: '28'},
    {name: 'Música', id: '10'},
    {name: 'Ao vivo agora', id: '44'},
    {name: 'Streaming ao vivo', id: '151'},
    {name: 'TV e filmes', id: '43'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Séries e filmes', id: '24'},
    {name: 'Comédia', id: '23'},
    {name: 'Culinária', id: '26'},
    {name: 'Como fazer e estilo', id: '27'},
    {name: 'Restaurantes', id: '100'},
    {name: 'DIY e artesanato', id: '107'},
    {name: 'Viagens e eventos', id: '19'},
    {name: 'Espiritualidade e religião', id: '29'},
    {name: 'Aviação', id: '20'},
    {name: 'Notícias e revistas', id: '25'},
    {name: 'Automobilismo', id: '17'},
    {name: 'Educação', id: '27'},
    {name: 'Animais', id: '15'},
    {name: 'Infantil', id: '1'},
    {name: 'Animação', id: '1'},
    {name: 'Tecnologia', id: '28'},
    {name: 'casal', id: '22'},
    {name: 'Viagens e lugares', id: '19'},
    {name: 'Aventura', id: '26'},
  ];


  return (

    <Container openMenu={openMenu}>
      <SliderButtons onClick={handleBackClick}>
        <ButtonIcon alt="ícone voltar" src={BackIcon} />
      </SliderButtons>
      <Slider>
        <SliderContent 
        style={
          { 
            transform: `translateX(${sliderPosition}px)`, 
            transition: '0.5s ease-in-out',

        }}>
        {categoryButtons.map((button, index) => (
          <CategoryButton name={button.name} key={index}/>
        ))} 
        </SliderContent>
      </Slider>
      <SliderButtons onClick={handleNextClick}>
        <ButtonIcon alt="ícone próximo" src={NextIcon} />
      </SliderButtons>
    </Container>
  )
}

export default CategoryBar;