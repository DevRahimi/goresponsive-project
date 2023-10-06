import TaskIcon from '@mui/icons-material/Task';
import DescriptionIcon from '@mui/icons-material/Description';
import ForwardIcon from '@mui/icons-material/Forward';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface StatusIconDisplayProps {
	status: string;
}

const StatusIconDisplay = ({ status }: StatusIconDisplayProps) => {
	return (
		<>
			{status === 'requested' && <TaskIcon fontSize="small" color="primary" />}
			{status === 'planned' && (
				<DescriptionIcon fontSize="small" sx={{ color: '#f2f2f2' }} />
			)}
			{status === 'shipped' && (
				<ForwardIcon fontSize="small" color="secondary" />
			)}
			{status === 'pending' && (
				<PendingActionsIcon fontSize="small" color="warning" />
			)}
			{status === 'completed' && (
				<CheckBoxIcon fontSize="small" color="success" />
			)}
			{status === 'cancelled' && (
				<DoNotDisturbIcon fontSize="small" color="error" />
			)}
			{status === 'unsuccessful' && (
				<ReportProblemIcon fontSize="small" sx={{ color: '#813fdf' }} />
			)}
		</>
	);
};

export default StatusIconDisplay;
