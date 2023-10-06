import { SvgIcon, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const HeaderContent = () => {
	return (
		<div className="flex max-md:flex-col max-md:gap-4 max-md:items-start items-center justify-between">
			<Typography variant="h5" fontWeight={500}>
				Orders and collections
			</Typography>

			{/* BUTTONS */}
			<div className="flex max-md:flex-col max-md:gap-4 max-md:items-start items-center gap-4">
				<Button variant="contained" size="medium" color="secondary">
					<div className="flex items-center justify-between gap-4">
						<SvgIcon
							component={LocationOnIcon}
							color="primary"
							fontSize="medium"
						/>
						<div className="flex flex-col items-start">
							<p className="text-sm font-semibold">
								BG02 InBev Salmesbury (CEM)
							</p>
							<p className="text-xs font-extralight">
								6500081845 / Preston, PR5 OXD
							</p>
						</div>
						<SvgIcon component={ArrowDropDownIcon} fontSize="medium" />
					</div>
				</Button>
				<Button
					className="flex flex-col"
					variant="contained"
					size="medium"
					sx={{ backgroundColor: '#f2f2f2', color: '#000' }}
				>
					<div className="flex items-center justify-between gap-4">
						<SvgIcon
							component={CalendarTodayIcon}
							color="primary"
							fontSize="medium"
						/>
						<p className=" py-2 text-sm font-semibold">
							MON 1 - SUN 7 AUGUST 2021
						</p>
					</div>
				</Button>
			</div>
		</div>
	);
};

export default HeaderContent;
