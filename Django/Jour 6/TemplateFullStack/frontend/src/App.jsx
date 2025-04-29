import './App.css';
import Header from './components/header'; 
import Svg from './components/svg';
import Billboard from './components/billboard'; 
import Services from './components/services';
import Mobiles from './components/mobiles';
import Watches from './components/watches';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Svg />
      <Header />
      <Billboard />
      <Services />
      <Mobiles />
      <Watches />
      <Footer />
    </div>
  );
}

export default App;

