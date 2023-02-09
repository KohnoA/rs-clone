import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './utils/AppRouter';
import { Example } from './components/exampleRequest';

function App() {

  return (
    <>
      <Header />
      <AppRouter/>
      {}
      <Example/>

      <Footer />
    </>
  );
}

export default App;
