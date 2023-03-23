import VideoCard from "../../components/videosCards/videosCards";
import { Container } from "./home-style";
import { useAppContext } from "../../contexts/openMenu";
import Thumbnail1 from '../../assets/thumbnails/thumbnails-home/thumbnail1.jpg'
import Thumbnail2 from '../../assets/thumbnails/thumbnails-home/thumbnail2.jpg'
import Thumbnail3 from '../../assets/thumbnails/thumbnails-home/thumbnail3.jpg'
import Thumbnail4 from '../../assets/thumbnails/thumbnails-home/thumbnail4.jpg'
import Thumbnail5 from '../../assets/thumbnails/thumbnails-home/thumbnail5.jpg'
import Thumbnail6 from '../../assets/thumbnails/thumbnails-home/thumbnail6.jpg'
import Thumbnail7 from '../../assets/thumbnails/thumbnails-home/thumbnail7.jpg'
import Thumbnail8 from '../../assets/thumbnails/thumbnails-home/thumbnail8.jpg'
import Thumbnail9 from '../../assets/thumbnails/thumbnails-home/thumbnail9.jpg'
import Thumbnail10 from '../../assets/thumbnails/thumbnails-home/thumbnail10.jpg'
import Thumbnail11 from '../../assets/thumbnails/thumbnails-home/thumbnail11.jpg'
import Thumbnail12 from '../../assets/thumbnails/thumbnails-home/thumbnail12.jpg'


function Home() {
  
  const videos = [
    {
      title: 'The Last Of US - Part II',
      thumbnail: `${Thumbnail1}`,
      channelImage: 'R',
      channelName: 'Rodrigo Serrasqueiro',
      details: '405 mil visualizações - há 2 meses'
    },
    {
      title: 'Resident Evil 4 - Remake',
      thumbnail: `${Thumbnail2}`,
      channelImage: 'G',
      channelName: 'Graziela Serrasqueiro',
      details: '1 mi visualizações - há 1 semana'
    },
    {
      title: 'Músicas relaxantes',
      thumbnail: `${Thumbnail3}`,
      channelImage: 'H',
      channelName: 'Hello World',
      details: '106 mil visualizações - há 1 mês'
    },
    {
      title: 'Landing Page completa em 2 min',
      thumbnail: `${Thumbnail4}`,
      channelImage: 'I',
      channelName: 'Icon',
      details: '3 mi visualizações - há 1 hora'
    },
    {
      title: 'O carro mais veloz do mundo!!!',
      thumbnail: `${Thumbnail5}`,
      channelImage: 'J',
      channelName: 'JavaScript',
      details: '309 mil visualizações - há 7 meses'
    },
    {
      title: 'O país dos alpes',
      thumbnail: `${Thumbnail6}`,
      channelImage: 'K',
      channelName: 'Kotlin',
      details: '10 mil visualizações - há 2 anos'
    },
    {
      title: 'Foi um acidente???',
      thumbnail: `${Thumbnail7}`,
      channelImage: 'L',
      channelName: 'Lorem Ipsum',
      details: '476 mil visualizações - há 2 semanas'
    },
    {
      title: 'A menina que lia livros - Temp 09 Ep 21',
      thumbnail: `${Thumbnail8}`,
      channelImage: 'M',
      channelName: 'Main',
      details: '14 visualizações - Agora'
    },
    {
      title: 'Todo mundo em Pânico VI - Trailer',
      thumbnail: `${Thumbnail9}`,
      channelImage: 'N',
      channelName: 'Node JS',
      details: '768 mil visualizações - há 5 dias'
    },
    {
      title: 'Faltavam só 4 minutos...4...4 minutos...',
      thumbnail: `${Thumbnail10}`,
      channelImage: 'O',
      channelName: 'O brasileiro sofre',
      details: '280 mi visualizações - há 5 meses'
    },
    {
      title: 'Aprenda em 50 segundos',
      thumbnail: `${Thumbnail11}`,
      channelImage: 'P',
      channelName: '<p></p>',
      details: '450 visualizações - há 4 anos'
    },
    {
      title: 'O que que há, velhinho?',
      thumbnail: `${Thumbnail12}`,
      channelImage: 'Q',
      channelName: 'Query',
      details: '545 mil visualizações - há 9 meses'
    },
  ]

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      {videos.map((video, index) => (
        <VideoCard 
        title={video.title} 
        thumbnail={video.thumbnail} 
        channelImage={video.channelImage} 
        channelName={video.channelName}
        details={video.details} 
        key={index}
        />
      ))}
    </Container>
  )
}

export default Home;