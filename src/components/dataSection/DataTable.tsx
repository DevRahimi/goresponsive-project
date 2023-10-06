import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { ChepData } from '../../types/all.types';
import DataDeleteButton from './DataDeleteButton';
import CommentModal from './CommentModal';
import AddDataModal from './AddDataModal';
import StatusIconDisplay from './StatusIconDisplay';
import TableHeaderCols from '../../utils/TableHeaderCols';
import FlareIcon from '@mui/icons-material/Flare';

interface DataTableProps {
	dataRows: ChepData[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.head}:nth-of-type(even)`]: {
		backgroundColor: '#478ac3',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'& td:nth-of-type(odd)': {
		backgroundColor: theme.palette.neutral.main,
	},
	'& td:nth-of-type(even)': {
		backgroundColor: theme.palette.neutral.light,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const DataTable = ({ dataRows }: DataTableProps) => {
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
								{TableHeaderCols.map((col, index) => (
									<StyledTableCell align="center" key={index}>
										<Tooltip arrow placement="top" title={col.tooltipTitle}>
											{col.icon}
										</Tooltip>
									</StyledTableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{dataRows.map(row => (
								<StyledTableRow key={row.id}>
									<StyledTableCell align="center">
										<strong>{row.equipment_type}</strong>
									</StyledTableCell>
									<StyledTableCell align="center">
										<strong>{row.volume.toString()}</strong>
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.order_number}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.delivery_number}
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
										<CommentModal
											dataId={row.id}
											comment={row.comment}
											orderId={row.order_number}
										/>
									</StyledTableCell>
									<StyledTableCell align="center">
										<StatusIconDisplay status={row.status.toLowerCase()} />
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.status.toLowerCase() === 'requested' && (
											<DataDeleteButton dataId={row.id} />
										)}
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
						<AddDataModal />
					</Box>
				</div>
			</Paper>
		</div>
	);
};

export default DataTable;
