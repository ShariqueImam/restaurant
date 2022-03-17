import "./App.css";
import 'animate.css';
import Main from './components/Main/Main'
import { Slide } from 'react-reveal'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
function App() {



	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" exact element={<Main />} />
			<Route path="/cart" exact element={<Cart />} />
		</Routes>
	);
}

export default App;
