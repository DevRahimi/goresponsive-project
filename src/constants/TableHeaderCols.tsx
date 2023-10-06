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
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const TableHeaderCols = [
	{
		tooltipTitle: 'Equipment Type',
		icon: <LayersIcon />,
	},
	{
		tooltipTitle: 'Quantity',
		icon: <BarChartIcon />,
	},
	{
		tooltipTitle: 'Order Number',
		icon: <LabelIcon />,
	},
	{
		tooltipTitle: 'Delivery Number',
		icon: <NumbersIcon />,
	},
	{
		tooltipTitle: 'Flare',
		icon: <FlareIcon />,
	},
	{
		tooltipTitle: 'Percentage',
		icon: <PieChartIcon />,
	},
	{
		tooltipTitle: 'Delivery Method',
		icon: <LocalShippingIcon />,
	},
	{
		tooltipTitle: 'Warehouse',
		icon: <HomeWorkIcon />,
	},
	{
		tooltipTitle: 'Delivery Time',
		icon: <AccessTimeIcon />,
	},
	{
		tooltipTitle: 'Delivery Notes',
		icon: <InsertCommentIcon />,
	},
	{
		tooltipTitle: 'Status',
		icon: <LabelImportantIcon />,
	},
	{
		tooltipTitle: 'Delete Row',
		icon: <DeleteForeverOutlinedIcon />,
	},
];

export default TableHeaderCols;
