import Header from "./components/header/header";
import './App-style'
import { MainContainer } from "./App-style";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./pages/shorts/shorts";
import Subscribe from "./pages/subscribe/subscribe";
import Library from "./pages/library/library";
import CategoryBar from "./components/categoryBar/category-bar";
import Jogos from "./pages/categories/jogos";
import Esportes from "./pages/categories/esportes";
 
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainContainer>
          <Menu />
          <CategoryBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/library" element={<Library />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/esportes" element={<Esportes />} />
          </Routes>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
