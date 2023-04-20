import { Banner, ChannelContainer, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer } from "./videoSearchCard-style";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}

function VideoCard(props : Props) {
  return (
    <Container>
      <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextCard>{props.channelName}</TextCard>
        </ChannelContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoCard;