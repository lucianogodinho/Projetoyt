import { Banner, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer } from "./your-videos-cards-style";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}

function YourVideosCards(props: Props) {

  return (
    <Container>
      <Banner alt="thumbnail" src={props.thumbnail}/>
      <TitleContainer>
        <ChannelImage>
          {props.channelImage}
        </ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.channelName}</TextCard>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default YourVideosCards;