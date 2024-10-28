import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SearchBar from "./features/search/components/SearchBar";
import FilterImagesPage from './pages/FilterImagesPage';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Header></Header>
      <SearchBar placeholder="Search..."></SearchBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/tag/:query' element={<FilterImagesPage></FilterImagesPage>}></Route>
        <Route path='/*' element={<ErrorMessage message='404 - Go to Home'></ErrorMessage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
