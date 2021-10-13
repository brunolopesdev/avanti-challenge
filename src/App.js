import { DataContextProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
