import { Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filter = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="bg-[#f2f2f2] rounded-md p-2">
				<Button variant="contained" size="medium" color="primary">
					ORDERS
				</Button>
				<Button variant="text" size="medium">
					COLLECTIONS
				</Button>
			</div>
			<div>
				<Button variant="outlined" size="medium" endIcon={<FilterAltIcon />}>
					FILTERS
				</Button>
			</div>
		</div>
	);
};

export default Filter;
