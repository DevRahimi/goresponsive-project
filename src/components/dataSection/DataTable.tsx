import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import BarChartIcon from '@mui/icons-material/BarChart';
import LabelIcon from '@mui/icons-material/Label';
import NumbersIcon from '@mui/icons-material/Numbers';
import FlareIcon from '@mui/icons-material/Flare';
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(
	type: string,
	volume: number,
	tag: string,
	orderNumber: number,
	flare: boolean,
	pie: number,
	delivery: string,
	warehouse: string,
	time: string,
	comment: string,
	status: string
) {
	return {
		type,
		volume,
		tag,
		orderNumber,
		flare,
		pie,
		delivery,
		warehouse,
		time,
		comment,
		status,
	};
}

const rows = [
	createData(
		'1 B1210A',
		320,
		'305487521333',
		8931343406,
		false,
		50,
		'CHEP',
		'CHEP',
		'8am - 3pm',
		'Leave at door.',
		'pending'
	),
	createData(
		'1 B1210A',
		320,
		'305487521333',
		8931343406,
		false,
		50,
		'CHEP',
		'CHEP',
		'8am - 3pm',
		'Leave at door.',
		'pending'
	),
	createData(
		'1 B1210A',
		320,
		'305487521333',
		8931343406,
		true,
		50,
		'CHEP',
		'CHEP',
		'8am - 3pm',
		'Leave at door.',
		'pending'
	),
	// createData(
	// 	'1 B1210A',
	// 	320,
	// 	'305487521333',
	// 	8931343406,
	// 	false,
	// 	50,
	// 	'CHEP',
	// 	'CHEP',
	// 	'8am - 3pm',
	// 	'Leave at door.',
	// 	'pending'
	// ),
	// createData(
	// 	'1 B1210A',
	// 	320,
	// 	'305487521333',
	// 	8931343406,
	// 	true,
	// 	50,
	// 	'CHEP',
	// 	'CHEP',
	// 	'8am - 3pm',
	// 	'Leave at door.',
	// 	'pending'
	// ),
	// createData(
	// 	'1 B1210A',
	// 	320,
	// 	'305487521333',
	// 	8931343406,
	// 	true,
	// 	50,
	// 	'CHEP',
	// 	'CHEP',
	// 	'8am - 3pm',
	// 	'Leave at door.',
	// 	'pending'
	// ),
	// createData(
	// 	'1 B1210A',
	// 	320,
	// 	'305487521333',
	// 	8931343406,
	// 	false,
	// 	50,
	// 	'CHEP',
	// 	'CHEP',
	// 	'8am - 3pm',
	// 	'Leave at door.',
	// 	'pending'
	// ),
];

const DataTable = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<Paper
				elevation={0}
				sx={{ width: '100%', overflow: 'hidden', border: '2px solid #f2f2f2' }}
			>
				<TableContainer sx={{ maxHeight: '50vh' }} component={Paper}>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<LayersIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<BarChartIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<LabelIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<NumbersIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<FlareIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<PieChartIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<LocalShippingIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<HomeWorkIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<AccessTimeIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<InsertCommentIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="testing">
										<LabelImportantIcon />
									</Tooltip>
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<StyledTableRow key={row.orderNumber}>
									<StyledTableCell align="center" component="th" scope="row">
										{row.type}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.volume}
									</StyledTableCell>
									<StyledTableCell align="center">{row.tag}</StyledTableCell>
									<StyledTableCell align="center">
										{row.orderNumber}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.flare ? <FlareIcon color="primary" /> : ''}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.pie.toString() + '%'}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.delivery}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.warehouse}
									</StyledTableCell>
									<StyledTableCell align="center">{row.time}</StyledTableCell>
									<StyledTableCell align="center">
										{row.comment}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.status}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<div className="p-2">
					<Box
						component="span"
						sx={{
							width: '100%',
							margin: '0',
							border: '1px dashed grey',
							borderRadius: '5px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Button sx={{ width: '100%' }}>
							<div className="flex items-center justify-center gap-2 px-4">
								ADD <AddBoxIcon fontSize="medium" />
							</div>
						</Button>
					</Box>
				</div>
			</Paper>
		</div>
	);
};

export default DataTable;

// sx={{ backgroundColor: 'white', width: '100%', bottom: 0, position: 'sticky' }}
