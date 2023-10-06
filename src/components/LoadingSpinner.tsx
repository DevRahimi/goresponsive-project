import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
	return (
		<div className="flex justify-center pt-12">
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		</div>
	);
};

export default LoadingSpinner;
