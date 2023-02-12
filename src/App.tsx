import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './utils/AppRouter';
import { FavoriteArrContext } from './components/Favourite/FavoriteBtn/FavoriteBtn';

function App() {

  return (
    <FavoriteArrContext.Provider
        value={[]}>
    <>
      <Header />
      <AppRouter/>
      <Footer />
    </>
    </FavoriteArrContext.Provider>
  );
}

export default App;
