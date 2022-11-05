import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ContactPage from './pages/ContactPage';
// import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="aas">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
