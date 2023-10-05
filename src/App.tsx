import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/MuiTheme';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Navbar />
				<div className="px-6 md:px-12">
					<MainContent />
					<hr />
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
