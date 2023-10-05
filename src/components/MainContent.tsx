import HeaderContent from './HeaderContent';

const MainContent = () => {
	return (
		<main className="min-h-screen py-4 flex flex-col gap-4">
			<HeaderContent />
			<hr />
			{/* <Filter /> */}
			<hr />

			{/* InfoSection */}
			<div className="border border-red-500 min-h-screen">
				{/* <InfoCards /> */}
				{/* <InfoTable /> */}
			</div>
		</main>
	);
};

export default MainContent;
