import CardShortVideo from "../cards-shorts-videos/card-short-video";
import { Container, Divider, MainContainer, ShortsLogo } from "./shorts-section-style";
import LogoShorts from '../../assets/logo-shorts.png'
import { useAppContext } from "../../contexts/openMenu";

function ShortsSection() {

  const { openMenu } = useAppContext();

  return (
    <MainContainer>
      <Divider />
      <ShortsLogo alt="logo Shorts" src={LogoShorts} openMenu={openMenu}/>
      <Container>
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/5Ioh1Tcpks8/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAYmCowZoq9L2SyAEFRdx8qNXem-Q"
        title="A MAIOR BOMBA CALORICA DO..." 
        details="781 mil visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/lg5tzc3mZAM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBSeb1XMtPECT7nHNjYboAgVFQiQg"
        title="VIDA DE FORMIGA" 
        details="13 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/kzA7r0OJAcM/hq720_2.jpg?sqp=-oaymwEdCI4CEOADSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBColzTHXKzJ58T_CnnBEuCaN24-A"
        title="GUDAN ESCAVANDO..." 
        details="4,1 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/SDoz5R2mYoQ/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAY46P5aqpcXmmlb3Bz3tCYU_U1rA"
        title="200$ DE MATERIAL ESCOLAR NOS EUA" 
        details="1,3 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/srhoxNJeNxo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAE1Whi-u5GM97vsuVmG5Bam1pw2w"
        title="POV INDO PARA ESCOLA DE MANHÃ..." 
        details="11 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/AxwMZtW_pCw/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCl4swvjWuqPHF-b6NhJBPTrLdliw"
        title="TU NEM TEMMMM DUBLAGEM #SHORTS" 
        details="11 mi de visualizações"
        />
      </Container>
    </MainContainer>
  )
}

export default ShortsSection;