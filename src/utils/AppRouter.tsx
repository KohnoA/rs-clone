import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from '../pages/404/404';
import AboutUs from '../pages/AboutUs/AboutUs';
import Constructor from '../pages/Constructor/Constructor';
import Recipes from '../pages/Recipes/Recipes';
import RecipePage from '../pages/Recipes/subPages/RecipePage';
import FavoritePage from '../pages/Favorite/FavoritePage';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setUser } from '../store/slices/userSlice';
import { useAuth } from '../hooks/useAuth';
import  { openModal } from '../store/slices/modalSlice';
import { ModalContent } from '../constants/constants';
import Calculator from '../pages/Calculator/Calculator';

const AppRouter = () => {
const auth = getAuth();
const dispatch = useAppDispatch();
const {isAuth} = useAuth();

const location = useLocation()

onAuthStateChanged(auth, (user) => {
  if (user) {
    dispatch(setUser({
      email: user.email,
      token: user.refreshToken,
      id: user.uid,
      name: user.displayName,
    }));
  }
});

const openSignInModal = () => {
  dispatch(openModal({
    isOpen: true,
    content: ModalContent.signIn,
  }))
}

 if(!isAuth && location.pathname === '/favorite') {
    openSignInModal()
  }


    return (
        <Routes>
        <Route path='*' element={ <PageNotFound /> } />
        <Route path='/' element={ <Recipes /> } />
        <Route path='/recipes/:id' element={ <RecipePage/>} />
        <Route path='/recipes' element={<Navigate to="/" replace />} />
        <Route path='/favorite/:id' element={ <RecipePage/>} />
        <Route path='/constructor' element={ <Constructor /> } />
        <Route path='/about' element={ <AboutUs /> } />
        {isAuth
          ? <Route path='/favorite' element={<FavoritePage />} />
          : <Route path='/favorite' element={<Navigate to="/" replace />} />
        }
        <Route path='/calculator' element={ <Calculator /> } />
      </Routes>
    );
};

export default AppRouter;
