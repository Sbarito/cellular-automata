import { Home } from '../page/Home';
import { Footer } from '../shared/ui/Footer';
import { Header } from '../shared/ui/Header';
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