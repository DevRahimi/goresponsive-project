import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import useDeleteDataById from '../../hooks/useDeleteDataById';

interface DataDeleteButtonProps {
	dataId: number;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #f44336',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
};

const DataDeleteButton = ({ dataId }: DataDeleteButtonProps) => {
	const [open, setOpen] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleDeleteData = () => {
		setDeleting(true);
		// TODO: add error handling
		useDeleteDataById(dataId);
		setDeleting(false);
		handleClose();
	};

	return (
		<div>
			<Button onClick={handleOpen}>
				<DeleteForeverOutlinedIcon color="primary" />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Confirm delete
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						If you are sure you'd like to delete this entry, click the button
						below.
					</Typography>
					<Button
						variant="contained"
						color="error"
						sx={{ mt: 4 }}
						onClick={handleDeleteData}
						disabled={deleting}
					>
						{deleting ? 'Deleting...' : 'Delete'}
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default DataDeleteButton;
