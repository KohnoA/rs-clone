import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Recipes from './pages/Recipes/Recipes';
import Constructor from './pages/Constructor/Constructor';
import Articles from './pages/Articles/Articles';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/404/404';
import Main from './pages/Main/Main';
import { URLS } from './types/types';


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='*' element={ <PageNotFound /> } />
        <Route path='/' element={ <Main /> } />
        <Route path='/recipes' element={ <Recipes url={URLS.start} /> } />
        <Route path='/constructor' element={ <Constructor /> } />
        <Route path='/articles' element={ <Articles /> } />
        <Route path='/about' element={ <AboutUs /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
