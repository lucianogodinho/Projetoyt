import { Container, UserContainer, YourVideosContainer } from "./your-videos-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import YourVideosCards from "../../components/yourVideosCards/your-videos-cards";

function YourVideos() {



  interface Videos {
    title: string
    video_id: string
    thumbnail: string
    description: string
    publishedAt: string
  }

  const { openMenu } = useAppContext();

  const { user, userVideos, createVideos, token } = useContext(UserContext)

  const USER_ID = user.id

  const [thumbnail, setThumbnail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const sendVideo = () => {
    const date: Date = new Date();
    createVideos(token, USER_ID, title, description, thumbnail, date)
  }

  function getTimeDifference(publishedAt: string): string {
    const diff = Date.now() - Date.parse(publishedAt);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 12 * month;
  
    if (diff < minute * 5) {
      return "Agora";
    } else if (diff < hour) {
      const minutes = Math.floor(diff / minute);
      return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
    } else if (diff < day) {
      const hours = Math.floor(diff / hour);
      return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
    } else if (diff < week) {
      const days = Math.floor(diff / day);
      return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
    } else if (diff < month) {
      const weeks = Math.floor(diff / week);
      return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
    } else if (diff < year) {
      const months = Math.floor(diff / month);
      return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
    } else {
      const years = Math.floor(diff / year);
      return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
    }
  }

  
  
  return (
    <YourVideosContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <UserContainer>
        <input type="text" onChange={(e) => setThumbnail(e.target.value)}></input>
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
        <button onClick={sendVideo}>Adicionar video</button>
        </UserContainer>
        {Array.isArray(userVideos) ? (
          userVideos.map((video: Videos) => 
          <YourVideosCards 
            title={video.title} 
            thumbnail={video.thumbnail} 
            channelImage={user && user.nome ? user.nome.charAt(0).toUpperCase() : ''} 
            details={video.description}
            publishedAt={getTimeDifference(video.publishedAt)} 
            key={video.video_id}
          />)
        ) 
        : 
        (
          <h1>Esse canal não possui vídeos</h1>
        )}
      </Container>
    </YourVideosContainer>
  )
}

export default YourVideos;