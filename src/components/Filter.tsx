import { Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filter = () => {
	return (
		<div>
			<Button variant="outlined" size="medium" endIcon={<FilterAltIcon />}>
				FILTERS
			</Button>
		</div>
	);
};

export default Filter;
