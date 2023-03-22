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
          <CategoryLink link={'/'}name={'Tudo'} />
          <CategoryLink link={'/link2'}name={'Games'} />
          <CategoryLink link={'/link3'}name={'Mix'} />
          <CategoryLink link={'/link4'}name={'História'} />
          <CategoryLink link={'/link5'}name={'Programação'} />
          <CategoryLink link={'/link6'}name={'Brasil'} />
          <CategoryLink link={'/link7'}name={'Novidades'} />
          <CategoryLink link={'/link8'}name={'Futebol'} />
          <CategoryLink link={'/link9'}name={'CSS'} />
          <CategoryLink link={'/link10'}name={'JavaScript'} />
          <CategoryLink link={'/link11'}name={'Oportunidades'} />
          <CategoryLink link={'/link12'}name={'Receitas'} />
          <CategoryLink link={'/link13'}name={'Política'} />
          <CategoryLink link={'/link14'}name={'Faz o L'} />
          <CategoryLink link={'/link15'}name={'Restaurantes'} />
          <CategoryLink link={'/link16'}name={'Tutoriais'} />
          <CategoryLink link={'/link17'}name={'Entrevistas de emprego'} />
          <CategoryLink link={'/link18'}name={'Carros novos'} />
          <CategoryLink link={'/link19'}name={'TLOU'} />
          <CategoryLink link={'/link20'}name={'Maiores descobertas'} />
          <CategoryLink link={'/link21'}name={'Fazendas'} />
          <CategoryLink link={'/link22'}name={'Estradas'} />
          <CategoryLink link={'/link23'}name={'Viagens'} />
          <CategoryLink link={'/link24'}name={'São Paulo'} />
          <CategoryLink link={'/link25'}name={'Som de chuva'} />
          <CategoryLink link={'/link26'}name={'Músicas'} />
          <CategoryLink link={'/link27'}name={'Louvores'} />
          <CategoryLink link={'/link28'}name={'Cultos'} />
          <CategoryLink link={'/link29'}name={'Ao vivo'} />
          <CategoryLink link={'/link30'}name={'Lives'} />
          <CategoryLink link={'/link31'}name={'Medicina'} />
          <CategoryLink link={'/link32'}name={'Informação'} />
          <CategoryLink link={'/link33'}name={'Notíciario'} />
          <CategoryLink link={'/link34'}name={'Fake News'} />
          <CategoryLink link={'/link35'}name={'Noticias'} />
        </SliderContent>
      </Slider>
      <SliderButtons onClick={handleNextClick}>
        <ButtonIcon alt="ícone próximo" src={NextIcon} />
      </SliderButtons>
    </Container>
  )
}

export default CategoryBar;