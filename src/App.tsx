import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './utils/AppRouter';
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
      <AppRouter/>
      <Footer />
    </>
  );
}

export default App;
