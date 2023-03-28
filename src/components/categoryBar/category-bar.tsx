import { SliderButtons, ButtonIcon, Container, Slider, SliderContent, Button } from "./category-bar-style";
import { useAppContext } from "../../contexts/openMenu";
import BackIcon from '../../assets/back-button.png'
import NextIcon from '../../assets/next-button.png'
import { useState } from "react";
import { useCategoryContext } from "../../contexts/searchCategories";

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
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Shorts', id: '26'},
    {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'},
    {name: 'Jornais', id: '25'},
    {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'},
    {name: 'História das civilizações', id: '22'},
    {name: 'Ciências', id: '15'},
    {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'},
    {name: 'Novidades', id: '24'},
    {name: 'Educação', id: '1'}, 
    {name: 'Ciência e tecnologia', id: '2'}, 
    {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, 
    {name: 'Investimentos e finanças', id: '20'}, 
    {name: 'Moda e estilo', id: '23'},
    {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'},
  ];

  const {setCategoryId} = useCategoryContext()

  function searchCategory(id: string) {
    setCategoryId(id)
  }


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
          <Button onClick={() => searchCategory(button.id)} key={index}>{button.name}</Button>
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