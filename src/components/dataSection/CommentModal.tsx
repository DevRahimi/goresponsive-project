import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import useUpdateDataById from '../../hooks/useUpdateDataById';

interface CommentModalProps {
	dataId: number;
	comment: string;
	orderId: string;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const CommentModal = ({ dataId, comment, orderId }: CommentModalProps) => {
	const [open, setOpen] = useState(false);
	const [saving, setSaving] = useState(false);
	const [newComment, setNewComment] = useState(comment);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleUpdate = async () => {
		if (newComment === comment) {
			handleClose();
			return;
		}

		setSaving(true);
		await useUpdateDataById(dataId, newComment);
		setSaving(false);
		handleClose();
		window.location.reload();
	};

	return (
		<div>
			<Button onClick={handleOpen}>
				<InsertCommentIcon color="primary" />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Driver comments - {orderId}
					</Typography>
					<TextField
						id="outlined-basic"
						variant="outlined"
						defaultValue={comment}
						fullWidth
						multiline
						rows={5}
						onChange={e => setNewComment(e.target.value)}
					/>
					<Box className="flex items-center justify-between gap-2 mt-4">
						<Button
							variant="outlined"
							onClick={handleClose}
							endIcon={<CloseIcon />}
							disabled={saving}
						>
							CANCEL
						</Button>
						<Button
							variant="contained"
							color="success"
							onClick={handleUpdate}
							endIcon={<SaveIcon />}
							disabled={saving}
						>
							{saving ? 'Saving...' : 'SAVE'}
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};

export default CommentModal;
