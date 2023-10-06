import { Box, Divider, Typography } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import FlareIcon from '@mui/icons-material/Flare';
import BarChartIcon from '@mui/icons-material/BarChart';

const WeekDataCard = () => {
	const boxCss = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'end',
		gap: 1,
		paddingY: 0.5,
	};

	return (
		<div className="flex-1 min-w-fit border border-[#f2f2f2] rounded-md p-2 flex flex-col gap-1 text-end hover:cursor-pointer hover:shadow-md">
			<Typography variant="body1" fontWeight={500} paddingRight={1}>
				Mon 1
			</Typography>
			<Divider />
			<Box
				sx={{
					...boxCss,
					fontSize: '10px',
				}}
				paddingRight={1}
			>
				<Typography fontSize="inherit">3 ORDERS</Typography>
				<ListAltOutlinedIcon color="primary" fontSize="small" />
			</Box>
			<Divider />
			<Box
				sx={{
					...boxCss,
					fontSize: '12px',
				}}
				paddingRight={1}
			>
				<Typography fontSize="inherit">3 ORDERS</Typography>
				<LayersIcon color="primary" fontSize="small" />
			</Box>
			<Box
				sx={{
					...boxCss,
					fontSize: '12px',
				}}
				paddingRight={1}
			>
				<Typography fontSize="inherit">3 ORDERS</Typography>
				<FlareIcon color="primary" fontSize="small" />
			</Box>
			<Divider />
			<Box
				sx={{
					...boxCss,
					fontSize: '14px',
				}}
				paddingRight={1}
			>
				<Typography fontSize="body1" fontWeight={500}>
					TOTAL
				</Typography>
				<BarChartIcon color="primary" fontSize="small" />
			</Box>
		</div>
	);
};

export default WeekDataCard;
