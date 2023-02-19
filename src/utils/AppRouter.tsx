import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../pages/404/404';
import AboutUs from '../pages/AboutUs/AboutUs';
import Articles from '../pages/Articles/Articles';
import Constructor from '../pages/Constructor/Constructor';
import Main from '../pages/Main/Main';
import Recipes from '../pages/Recipes/Recipes';
import RecipePage from '../pages/Recipes/subPages/RecipePage';
import { URLS } from '../constants';
import FavoritePage from '../pages/Favorite/FavoritePage';

const AppRouter = () => {
<FavoritePage />

    return (
        <Routes>
        <Route path='*' element={ <PageNotFound /> } />
        <Route path='/' element={ <Main /> } />
        <Route path='/recipes' element={ <Recipes url={URLS.start} /> } />
        <Route path='/recipes/:id' element={ <RecipePage/>} />
        <Route path='/constructor' element={ <Constructor /> } />
        <Route path='/articles' element={ <Articles /> } />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/favorite/:id' element={ <RecipePage/>} />
      </Routes>
    );
};

export default AppRouter;