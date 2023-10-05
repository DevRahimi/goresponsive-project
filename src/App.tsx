import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<div className="px-6 md:px-12">
				<MainContent />
				<hr />
				<Footer />
			</div>
		</div>
	);
}

export default App;
