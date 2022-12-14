import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route path="contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
