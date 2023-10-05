import Filter from './Filter';
import HeaderContent from './HeaderContent';
import DataCard from './dataSection/DataCard';

const MainContent = () => {
	return (
		<main className="min-h-screen py-4 flex flex-col gap-4">
			<HeaderContent />
			<hr />
			<Filter />
			<hr />

			{/* InfoSection */}
			<div className="border border-red-500 min-h-screen">
				<div className="flex items-center justify-between gap-2">
					<DataCard />
					<DataCard />
					<DataCard />
					<DataCard />
					<DataCard />
					<DataCard />
					<DataCard />
					<DataCard />
				</div>
				{/* <InfoTable /> */}
			</div>
		</main>
	);
};

export default MainContent;
