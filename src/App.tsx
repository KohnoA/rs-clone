import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Recipes from './pages/Recipes/Recipes';
import Constructor from './pages/Constructor/Constructor';
import Calculater from './pages/Calculater/Calculater';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/404/404';
// import { Example } from './components/exampleRequest';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/reduxHooks';
import { setUser } from './store/slices/userSlice';

function App() {
  const auth = getAuth();
  const dispatch = useAppDispatch();

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
  
  return (
    <>
      <Header />

      <Routes>
        <Route path='*' element={ <PageNotFound /> } />
        <Route path='/' element={ <Recipes /> } />
        <Route path='/constructor' element={ <Constructor /> } />
        <Route path='/calculater' element={ <Calculater /> } />
        <Route path='/about' element={ <AboutUs /> } />
      </Routes>

      {/* <Example/> */}

      <Footer />
    </>
  );
}

export default App;
