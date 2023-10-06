import { Box, CircularProgress } from '@mui/material';

interface LoadingSpinnerProps {
	isLoading: boolean;
}

const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
	return (
		<>
			{isLoading && (
				<div className="flex justify-center">
					<Box sx={{ display: 'flex' }}>
						<CircularProgress />
					</Box>
				</div>
			)}
		</>
	);
};

export default LoadingSpinner;
