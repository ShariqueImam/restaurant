import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import signature from "../assets/images/signature.png";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
const NavDrawer = (props) => {
	const [state, setState] = React.useState({
		right: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const handleNavClick = (clickedValue) => {
		props.onScroll(clickedValue.toLowerCase().replace(/\s+/g, ''))
	}
	const list = (anchor) => (
		<Box
			sx={{
				color: "rgb(153, 27, 27)",
				backgroundColor: "rgb(255, 255, 255)",
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				height: 1200,
				letterSpacing:'5px'
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{/* heading of the website */}
				<div
					className="text-center text-3xl tracking-widest"
					style={{ fontFamily: "Dancing Script, cursive" }}
				>
					<img src={`${signature}`} alt="" />
				</div>
				<div
					className="h-[15vh] flex my-2 text-xl w-[100%] justify-center"
					style={{ fontFamily: "PT Sans Narrow, sans-serif" }}
				>
					<p className="">RESTAURANT</p>
				</div>
				{/* BELOEW ARRAY HAS THE LIST OF THE TEXTS THAT IS RENDERED AS A LIST */}
				{["Home", "Speciality", "Cook", "Our Partners", "Contact"].map(
					(text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								<div className="py-2" onClick={handleNavClick}>
									{text === "Home" && <HomeIcon style={{ color: '#991b1b' }} />}
								</div>
								<div className="py-2" >
									{text === "Speciality" && (
										<StarBorderPurple500Icon style={{ color: '#991b1b' }} />
									)}
								</div>
								<div className="py-2">
									{text === "Cook" && <LocalDiningIcon style={{ color: '#991b1b' }} />}
								</div>
								<div className="py-2">
									{text === "Our Partners" && <GroupWorkIcon style={{ color: '#991b1b' }} />}
								</div>
								<div className="py-2">
									{text === "Contact" && <ContactPhoneIcon style={{ color: '#991b1b' }} />}
								</div>
							</ListItemIcon>
							<div className="">
								<ListItemText primary={text} onClick={() => { handleNavClick(text) }} />
							</div>
						</ListItem>
					)
				)}
			</List>
			<div className=" h-[40%] bg-gradient-to-br from-red-500 to-red-800 w-[20%] 	transform skew-x-[20deg]  overflow-hidden">
		<div className="">

		</div>
			</div>
		</Box>
	);

	return (
		<div>
			{/* below string will set the location of the drawer */}
			{["right"].map((anchor) => (
				<React.Fragment key={anchor}>
					<button
						onClick={toggleDrawer(anchor, true)}
						className="border-2 border-red-800 p-2 rounded-xl mx-4 my-1"
					>
						{
							<svg
								viewBox="0 0 100 80"
								width="30"
								height="20"
								style={{ fill: "rgb(153, 27, 27)" }}
							>
								<rect width="100" height="20"></rect>
								<rect y="30" width="100" height="20"></rect>
								<rect y="60" width="100" height="20"></rect>
							</svg>
						}
					</button>
					<div className="">
						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default NavDrawer;
