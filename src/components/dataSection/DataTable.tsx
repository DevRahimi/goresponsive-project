import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
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
	[`&.${tableCellClasses.head}:nth-child(even)`]: {
		backgroundColor: '#478ac3',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'& td:nth-child(odd)': {
		backgroundColor: theme.palette.neutral.main,
	},
	'& td:nth-child(even)': {
		backgroundColor: theme.palette.neutral.light,
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
									<Tooltip arrow placement="top" title="Equipment Type">
										<LayersIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Quantity">
										<BarChartIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Order Number">
										<LabelIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Delivery Number">
										<NumbersIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Flare?">
										<FlareIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Percentage">
										<PieChartIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Delivery Method">
										<LocalShippingIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Warehouse?">
										<HomeWorkIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Delivery Time">
										<AccessTimeIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Delivery Notes">
										<InsertCommentIcon />
									</Tooltip>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Tooltip arrow placement="top" title="Status">
										<LabelImportantIcon />
									</Tooltip>
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<StyledTableRow key={row.orderNumber}>
									<StyledTableCell align="center">{row.type}</StyledTableCell>
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
									<StyledTableCell align="center">8am - 3pm</StyledTableCell>
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
