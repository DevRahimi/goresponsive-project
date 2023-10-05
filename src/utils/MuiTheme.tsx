import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#3376b9',
			light: '#4d8dd9',
			dark: '#1e5a9c',
			contrastText: '#fff',
		},
		secondary: {
			main: '#d6e6f1',
			light: '#f2f7fa',
			dark: '#a7c8e3',
			contrastText: '#000',
		},
	},
});

export default theme;
