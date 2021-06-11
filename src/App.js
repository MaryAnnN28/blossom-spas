import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Services from './components/Services/Services';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<NavbarContainer />
				<HomePage />
        <About />
        <Services />
				<FooterContainer />
			</header>
		</div>
	);
}

export default App;
