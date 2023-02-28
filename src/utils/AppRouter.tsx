import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PageNotFound from '../pages/404/404'
import AboutUs from '../pages/AboutUs/AboutUs'
import Constructor from '../pages/Constructor/Constructor'
import Recipes from '../pages/Recipes/Recipes'
import RecipePage from '../pages/Recipes/subPages/RecipePage'
import Main from '../pages/Main/Main'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { useAppDispatch } from '../hooks/reduxHooks'
import { setUser } from '../store/slices/userSlice'
import Calculator from '../pages/Calculator/Calculator'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import Cabinet from '../pages/Cabinet/Cabinet'

const AppRouter = () => {
  const auth = getAuth()
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
          name: user.displayName,
        }),
      )
    }
  })

  const location = useLocation()

  useEffect(() => {
    if (!isAuth && location.pathname === '/favorite') {
      navigate('/')
    }
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
