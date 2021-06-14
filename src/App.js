import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Services from './components/Services/Services';
import Appointment from './components/Appointment/Appointment'; 
import Contact from './components/Contact/Contact';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
	return (
		<div className='App'>

			<BrowserRouter>
				<div>
					<NavbarContainer />
					<Route path="/" exact component={HomePage} />
					<Route path="/about" exact component={About} />
					<Route path="/services" exact component={Services} />
					<Route path="/appointment" exact component={Appointment} />

					<Route path="/contact" exact component={Contact} />
					
					<FooterContainer />
				</div>
			</BrowserRouter>
		</div>
	);

}

export default App;
