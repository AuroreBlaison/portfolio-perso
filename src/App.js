import Competences from './components/Competences';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Presentation from './components/Presentation';
import './stylesheets/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation/>
      <Competences/>
      <Portfolio/>
      <Footer/>
      {/* <p>shut up ! i'm coding</p> */}
    </div>
  );
}

export default App;
