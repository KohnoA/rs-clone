import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PageNotFound from '../pages/404/404'
import AboutUs from '../pages/AboutUs/AboutUs'
import Constructor from '../pages/Constructor/Constructor'
import Recipes from '../pages/Recipes/Recipes'
import RecipePage from '../pages/Recipes/subPages/RecipePage'
import Main from '../pages/Main/Main'
import Calculator from '../pages/Calculator/Calculator'
import { useEffect } from 'react'
import Cabinet from '../pages/Cabinet/Cabinet'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { openModal } from '../store/slices/modalSlice'
import { useAppDispatch } from '../hooks/reduxHooks'
import { ModalContent } from '../constants/constants'

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => { 
      if (location.pathname === '/cabinet' && !user) { 
        navigate('/');
        dispatch(openModal({
          isOpen: true,
          content: ModalContent.signIn
        }));
      }
    });

  }, [location.pathname])

  return (
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path='/' element={<Main />} />
      <Route path='/recipes/:id' element={<RecipePage />} />
      <Route path='/cabinet/:id' element={<RecipePage />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/constructor' element={<Constructor />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/cabinet' element={<Cabinet />} />
    </Routes>
  )
}

export default AppRouter
