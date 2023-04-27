import { Container, YourVideosContainer } from "./your-videos-style";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function YourVideos() {

  interface Videos {
    title: string
    video_id: string
  }

  const { openMenu } = useAppContext();

  const { user, userVideos } = useContext(UserContext)

  return (
    <YourVideosContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        {Array.isArray(userVideos) ? (
          userVideos.map((video: Videos) => <h1 key={video.video_id}>{video.title}</h1>)
        ) : (
          <h1>No videos found</h1>
        )}
      </Container>
    </YourVideosContainer>
  )
}

export default YourVideos;