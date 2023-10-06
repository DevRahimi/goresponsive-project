import { PaletteColor, PaletteColorOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		neutral: PaletteColor;
		unsuccessful: PaletteColor;
	}

	interface PaletteOptions {
		neutral: PaletteColorOptions;
		unsuccessful: PaletteColorOptions;
	}
}

let theme = createTheme({
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
		error: {
			main: '#f44336',
			light: '#e57373',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ff9800',
			light: '#ffb74d',
			dark: '#f57c00',
			contrastText: '#fff',
		},
		info: {
			main: '#2196f3',
			light: '#64b5f6',
			dark: '#1976d2',
			contrastText: '#fff',
		},
		success: {
			main: '#4caf50',
			light: '#81c784',
			dark: '#388e3c',
			contrastText: '#fff',
		},
		neutral: {
			main: '#f2f2f2',
			light: '#fff',
			dark: '#d9d9d9',
			contrastText: '#000',
		},
		unsuccessful: {
			main: '#813fdf',
			light: '#b47cff',
			dark: '#4b00b7',
			contrastText: '#fff',
		},
	},
});

export default theme;
