import { Banner, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer } from "./videosCards-style";
import Thumbnail1 from '../../assets/thumbnails/thumbnail1.jpg'
import { useAppContext } from "../../contexts/openMenu";

function VideoCard() {

  const { openMenu } = useAppContext();

  return (
    <Container>
      <Banner alt="thumbnail" src={Thumbnail1}/>
      <TitleContainer>
        <ChannelImage openMenu={openMenu}>
          RS
        </ChannelImage>
        <TextContainer>
          <Title>THE LAST OF US PARTE II - #1: INÍCIO DO JOGO (PS4 Pro)</Title>
          <TextCard>Funky Black Cat</TextCard>
          <TextCard>520 mil visualizações - há 2 anos</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoCard;