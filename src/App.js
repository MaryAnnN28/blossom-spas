import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About'
import FooterContainer from './components/Footer/FooterContainer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<NavbarContainer />
				<HomePage />
				<About />
				<FooterContainer />
			</header>
		</div>
	);
}

export default App;
