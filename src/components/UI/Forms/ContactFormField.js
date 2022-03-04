import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


// credentials fields for order placing
const ContactFormField = (props) => {
	const screenWidth = window.innerWidth;
	const initialHeight = window.innerHeight;
	document.documentElement.style.setProperty('overflow', 'auto')
	const metaViewport = document.querySelector('meta[name=viewport]')
	metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')

	return (
		<Box
			component="form"	
			sx={{
				"& > :not(style)": { m:screenWidth > 500 ? 0:0 ,width: screenWidth > 700 ? "30ch" : "35ch" ,color:'white'},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id={props.id || `outlined-required`}
				error={props.error}
				label={props.label}
				variant="standard"
				onChange={props.valueChangeHandler}
				value={props.value}
				helperText={props.error ? props.helperText : ""}
				multiline={props.multiline}
				rows={props.rows}
				InputLabelProps={{
					style: { fontSize: screenWidth > 700 ? 15 :17 ,color:'white' },
				}} // font size of input label
			/>
		</Box>
	);
};

export default ContactFormField;
