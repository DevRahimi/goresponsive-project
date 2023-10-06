import HeaderContent from './HeaderContent';
import DataCard from './dataSection/DataCard';
import WeekDataCard from './dataSection/WeekDataCard';
import DataTable from './dataSection/DataTable';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import LoadingSpinner from './LoadingSpinner';
import ErrorAlert from './ErrorAlert';
import useData from '../hooks/useData';
import { useState } from 'react';
import Filter from './Filter';

const MainContent = () => {
	const { chepData, error, isLoading } = useData();
	const [orders, setOrders] = useState(true);

	const filteredChepData = chepData.filter(data => {
		if (orders) {
			return true;
		} else {
			return data.warehouse.toLowerCase().includes('chep');
		}
	});

	const handleOrdersClick = () => {
		if (orders) {
			setOrders(false);
		} else {
			setOrders(true);
		}
	};

	if (error) {
		return (
			<main className="min-h-screen py-4 flex justify-center pt-12">
				<div>
					<ErrorAlert error={error} />
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen py-4 flex flex-col gap-4">
			{isLoading && <LoadingSpinner />}

			{!isLoading && (
				<>
					<HeaderContent />
					<hr />
					<div className="flex items-center justify-between">
						<div className="bg-[#f2f2f2] rounded-md p-2">
							<Button
								variant={`${orders ? 'contained' : 'text'}`}
								size="medium"
								onClick={handleOrdersClick}
							>
								ORDERS
							</Button>
							<Button
								variant={`${!orders ? 'contained' : 'text'}`}
								size="medium"
								onClick={handleOrdersClick}
							>
								COLLECTIONS
							</Button>
						</div>
						<Filter />
					</div>
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
							<WeekDataCard />
						</div>
						<DataTable dataRows={filteredChepData} />
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
