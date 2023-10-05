// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = () => {
	return (
		<div className="flex items-center w-full p-2 min-h-8 border-[#f2f2f2] border-b-4 md:border-opacity-70 md:bg-opacity-70 md:backdrop-blur md:sticky md:top-0 md:z-50">
			<div className="flex-1">
				<IconButton size="medium" color="primary">
					<MenuIcon fontSize="inherit" />
				</IconButton>
			</div>
			<div className="flex-none gap-4">
				<IconButton size="medium" color="primary">
					<PinDropOutlinedIcon fontSize="inherit" />
				</IconButton>
				<IconButton size="medium" color="primary">
					<InfoOutlinedIcon fontSize="inherit" />
				</IconButton>
				<IconButton size="medium" color="primary">
					<SearchIcon fontSize="inherit" />
				</IconButton>
				<IconButton size="medium" color="primary">
					<PersonOutlinedIcon fontSize="inherit" />
				</IconButton>
				<IconButton size="medium" color="primary">
					<NotificationsOutlinedIcon fontSize="inherit" />
				</IconButton>
			</div>
		</div>
	);
};

export default Navbar;
