import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const WhatsappButton = (props) => {
	const scrollButtonHandler = () => {};

	return (
		<div className="p-1 sm:p-2 fixed bg-red-900 rounded-3xl  cursor-pointer animate__animated animate__pulse animate__infinite m-4 bottom-20 right-0">
			<a href="whatsapp://send?text=How can we help you?&phone=+923174290702">
				<WhatsAppIcon style={{ color: "white" }} />
			</a>
		</div>
	);
};

export default WhatsappButton;
