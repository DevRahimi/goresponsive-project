import { Alert, AlertTitle } from '@mui/material';

interface ErrorAlertProps {
	error: string;
}

const ErrorAlert = ({ error }: ErrorAlertProps) => {
	return (
		<Alert severity="error">
			<AlertTitle>ERROR</AlertTitle>
			<div className="flex flex-col gap-2">
				<span>{error}</span>
				<strong
					onClick={() => window.location.reload()}
					className="cursor-pointer underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out duration-100"
				>
					Click here to refresh the page
				</strong>
			</div>
		</Alert>
	);
};

export default ErrorAlert;
