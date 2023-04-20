import Header from "./components/header/header";
import './App-style'
import { MainContainer } from "./App-style";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./pages/shorts/shorts";
import Subscribe from "./pages/subscribe/subscribe";
import Library from "./pages/library/library";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login/login";
import YourVideos from "./pages/your-videos/your-videos";
import SearchPage from "./pages/search/searchPage";
 
function App() {


  return (
    <BrowserRouter>
      <UserStorage>
        <div className="App">
          <Header />
          <MainContainer>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/library" element={<Library />} />
              <Route path="/login" element={<Login />} />
              <Route path="/yourvideos" element={<YourVideos />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </MainContainer>
        </div>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
