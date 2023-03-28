import { CardVideo, DetailsShortVideo, ThumbnailShortVideo, TitleShortVideo } from './card-short-video-style'

interface Props {
  title: string
  thumbnail: string
  details: string
}

function CardShortVideo(props: Props) {

  

  return (
    <CardVideo to={'/shorts'}>
      <ThumbnailShortVideo alt='Thumbnail' src={props.thumbnail}/>
      <TitleShortVideo>{props.title}</TitleShortVideo>
      <DetailsShortVideo>{props.details}</DetailsShortVideo>
    </CardVideo>
  )
}

export default CardShortVideo;