import "./App.css";
import 'animate.css';
import Cooks from "./components/Cooks/Cooks";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import MainDishes from "./components/Dishes/MainDishes";
import Footer from "./components/Footer/Footer";
import OurPartners from "./components/OurPartners/OurPartners";
import { StyledHome } from "./components/styled-components/main";
import ScrollToTop from './components/UI/Button/ScrollToTop'
import { scroller } from 'react-scroll'
import WhatsappButton from './components/UI/Button/WhatsappButton'
import { Slide } from 'react-reveal'
function App() {
	const scrollToTop = (params) => {
		scroller.scrollTo("navbar", {
			duration: 700,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	}
	// the value param has the value of the navbar button that is clicked 
	// this value act as the class to which it will scroll
	const onScroll = (value) => {
		console.log(value)
		scroller.scrollTo(`${value}`, {
			duration: 600,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	return (
		
		<div className="flex flex-col w-[100vw]">
			{/* scroll to top button */}
			<Slide bottom>
				
				{/* navbar */}
				<div className="navbar h-[20vh] w-[100%] z-10 home">
					<Navbar onScroll={onScroll} />
				</div>
				<StyledHome className="z-10 ">
					{/* home page */}
					<div className="w-[100%] flex">
						<Home onScroll={onScroll} />
					</div>
				</StyledHome>
			</Slide>
			{/* main page */}

			{/* maindishes page */}
			<Slide bottom>
				<div className="w-[100%] flex h-[100%] z-10 speciality dishes">
					<MainDishes />
				</div>
			</Slide>
			{/* cooks and counter */}
			<div className="h-[120vh] w-[100%] flex flex-col cook itemss-center justify-center">
				<div className="h-[40%] w-[100%]">
					<Counter />
				</div>
				<div className="h-[50%] w-[100%]">
					<Cooks />
				</div>
			</div>
			{/* Rviews and footer */}
			<div className="w-[100%] flex flex-col ">
				<div className="h-[70vh] w-[100%]">
					<Reviews />
				</div>
				<div className="h-[60vh] w-[100%] ourpartners">
					<OurPartners />
				</div>
			</div>
			{/* rendering the footer  */}
			<Slide bottom>
				<div className="md:h-[65vh] w-[100%] contact">
					<Footer onScroll={onScroll} />
				</div>
			</Slide>
		</div>
	);
}

export default App;
