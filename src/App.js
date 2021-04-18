import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer'
import HomePage from './components/HomePage/HomePage'
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavbarContainer />
        <HomePage />
        <FooterContainer />
       
      </header>
    </div>
  );
}

export default App;
