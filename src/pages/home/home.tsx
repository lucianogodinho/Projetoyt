import VideoCard from "../../components/videosCards/videosCards";
import { Container } from "./home-style";
import { useAppContext } from "../../contexts/openMenu";

function Home() {

  const { openMenu } = useAppContext();

  return (
    <Container openMenu={openMenu}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Container>
  )
}

export default Home;