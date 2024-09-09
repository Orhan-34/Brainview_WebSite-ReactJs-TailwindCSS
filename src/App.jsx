import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
function App() {
	return (
		<>
			<div className="overflow-hidden pt-[4.5rem] lg:pt-[5.25rem]">
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
				<Footer />
			</div>
			<ButtonGradient />
		</>
	);
}

export default App;
