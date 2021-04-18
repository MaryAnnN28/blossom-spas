import Logo from './Images/BlossomSpas.png'
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer'
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      
        <NavbarContainer />
        <FooterContainer />
       
      </header>
    </div>
  );
}

export default App;
