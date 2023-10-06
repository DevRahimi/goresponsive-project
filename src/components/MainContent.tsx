import Filter from './Filter';
import HeaderContent from './HeaderContent';
import DataCard from './dataSection/DataCard';
import WeekDataCard from './dataSection/WeekDataCard';
import DataTable from './dataSection/DataTable';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import LoadingSpinner from './LoadingSpinner';
// import useData from '../hooks/useData';

const MainContent = () => {
	// const { chepData, error, isLoading } = useData();

	const isLoading = false;

	return (
		<main className="min-h-screen py-4 flex flex-col gap-4">
			{isLoading && <LoadingSpinner />}

			{!isLoading && (
				<>
					<HeaderContent />
					<hr />
					<Filter />
					<hr />
					{/* DataSection */}
					<div className="flex flex-col justify-center gap-4">
						<div className="flex items-center justify-between gap-2">
							<DataCard />
							<DataCard />
							<DataCard />
							<DataCard />
							<DataCard />
							<DataCard />
							<DataCard />
							<WeekDataCard />
						</div>
						<DataTable />
						<div className="flex items-center justify-center">
							<Button variant="contained" size="large" disabled>
								<div className="flex items-center justify-center gap-2 px-4 text-white">
									SUBMIT <CheckIcon fontSize="medium" />
								</div>
							</Button>
						</div>
					</div>
				</>
			)}
		</main>
	);
};

export default MainContent;
