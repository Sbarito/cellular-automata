import { Home } from '../page/Home';
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import './App.css';

function App() {


  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;