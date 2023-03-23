import { SliderButtons, ButtonIcon, Container, Slider, SliderContent } from "./category-bar-style";
import { useAppContext } from "../../contexts/openMenu";
import BackIcon from '../../assets/back-button.png'
import NextIcon from '../../assets/next-button.png'
import CategoryLink from "./categoryLinks/category-link";
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

  const links = [
    {to: '/', name: 'Tudo'},
    {to: '/link2', name: 'Games'},
    {to: '/link3', name: 'Futebol'},
    {to: '/link4', name: 'Programação'},
    {to: '/link5', name: 'Músicas'},
    {to: '/link6', name: 'Ao vivo'},
    {to: '/link7', name: 'Lives'},
    {to: '/link8', name: 'TV'},
    {to: '/link9', name: 'Notícias'},
    {to: '/link10', name: 'Séries'},
    {to: '/link11', name: 'Entretenimento'},
    {to: '/link12', name: 'Culinária brasileira'},
    {to: '/link13', name: 'Tutoriais'},
    {to: '/link14', name: 'Restaurantes'},
    {to: '/link15', name: 'Oficinas'},
    {to: '/link16', name: 'Países'},
    {to: '/link17', name: 'Louvores'},
    {to: '/link18', name: 'Aviões'},
    {to: '/link19', name: 'Política'},
    {to: '/link20', name: 'Formula 1'},
    {to: '/link21', name: 'Cursos'},
    {to: '/link22', name: 'Animais incríveis'},
    {to: '/link23', name: 'Infantil'},
    {to: '/link24', name: 'Desenhos legais'},
    {to: '/link25', name: 'Informática'},
    {to: '/link26', name: 'Casal'},
    {to: '/link27', name: 'Viagens'},
    {to: '/link28', name: 'Aventura'},
    {to: '/link29', name: 'Vlogs'},
    {to: '/link30', name: 'Documentários'},
    {to: '/link31', name: 'História da civilização'},
    {to: '/link32', name: 'Ciências'},
    {to: '/link33', name: 'Geografia'},
    {to: '/link34', name: 'Quimica'},
    {to: '/link35', name: 'Física'},
  ]


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
        {links.map((link, index) => (
          <CategoryLink link={link.to} name={link.name} key={index}/>
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