import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import useAddData from '../../hooks/useAddData';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	maxHeight: '80vh',
	overflowY: 'scroll' as 'scroll',
	bgcolor: 'background.paper',
	border: '2px solid #4caf50',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
};

const AddDataModal = () => {
	const [open, setOpen] = useState(false);
	const [saving, setSaving] = useState(false);
	const [formData, setFormData] = useState({
		equipment_type: '',
		volume: 0,
		order_number: '',
		delivery_number: 0,
		flare: false,
		pie: 0,
		delivery: '',
		warehouse: '',
		comment: '',
		status: '',
	});

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleInputChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// console.log(formData);
	};

	const handleAdd = async () => {
		setFormData({ ...formData });
		setSaving(true);
		await useAddData(formData);
		console.log(formData);
		setSaving(false);
		handleClose();
		// window.location.reload();
	};

	return (
		<>
			<Button sx={{ width: '100%' }} onClick={handleOpen}>
				<div className="flex items-center justify-center gap-2 px-4">
					ADD <AddBoxIcon fontSize="medium" />
				</div>
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box component="form" sx={style}>
					<Typography variant="h6" component="h2">
						New Data Entry
					</Typography>
					<div className="flex flex-col gap-4 pt-4">
						<TextField
							required
							type="text"
							label="Equipment Type"
							name="equipment_type"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="number"
							inputProps={{ min: 1 }}
							label="Volume"
							name="volume"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="text"
							label="Order Number"
							name="order_number"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="number"
							label="Delivery Number"
							name="delivery_number"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Flare?"
							name="flare"
							onChange={(
								_event: React.SyntheticEvent,
								_checked: boolean
							): void => setFormData({ ...formData, flare: !formData.flare })}
						/>
						<TextField
							required
							type="number"
							inputProps={{ min: 0, max: 100 }}
							label="Pie (percentage) enter as a number"
							name="pie"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="text"
							label="Delivery"
							name="delivery"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="text"
							label="Warehouse"
							name="warehouse"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<TextField
							required
							type="text"
							label="Delivery Comments"
							name="comment"
							variant="outlined"
							fullWidth
							onChange={handleInputChange}
						/>
						<FormControl fullWidth>
							<InputLabel>Status</InputLabel>
							<Select
								value={formData.status}
								label="Status"
								name="status"
								onChange={(event: SelectChangeEvent) => {
									setFormData({
										...formData,
										status: event.target.value as string,
									});
								}}
							>
								<MenuItem value={'Requested'}>Requested</MenuItem>
								<MenuItem value={'Planned'}>Planned</MenuItem>
								<MenuItem value={'Shipped'}>Shipped</MenuItem>
								<MenuItem value={'Pending'}>Pending</MenuItem>
								<MenuItem value={'Completed'}>Completed</MenuItem>
								<MenuItem value={'Cancelled'}>Cancelled</MenuItem>
								<MenuItem value={'Unsuccessful'}>Unsuccessful</MenuItem>
							</Select>
						</FormControl>
					</div>
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
							onClick={handleAdd}
							endIcon={<SaveIcon />}
							disabled={saving}
						>
							{saving ? 'Adding data...' : 'ADD'}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};

export default AddDataModal;
