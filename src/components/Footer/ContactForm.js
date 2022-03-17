import React from "react";
import ContactFormField from "../UI/Forms/ContactFormField";
import useInput from "../hooks/contactInputValidation";
const ContactForm = () => {
	const [isError, setError] = React.useState(false);
	const [formIsValid, setFormIsValid] = React.useState(false);
	const [isSubmit, setIsSubmit] = React.useState(false);
	const {
		value: email,
		valueIsValid: emailIsValid,
		hasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		reset: emailReset,
	} = useInput((val) => val.includes("@") && val.includes("."));
	const {
		value: message,
		valueIsValid: messageIsValid,
		hasError: messageHasError,
		inputChangeHandler: messageChangeHandler,
		reset: messageReset,
	} = useInput((val) => val.trim() !== "");
	React.useEffect(() => {
		if (emailIsValid && messageIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [emailIsValid, messageIsValid]);

	const submitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			setError(true);
			return;
		}
		setIsSubmit(true);
		emailReset();
		messageReset();
	};
	return (
		<form onSubmit={submitHandler} lassName="w-[100%] h-[100%]">
			{/* email */}
			<div className="mx-4 flex flex-col">
				<ContactFormField
					error={isError && emailHasError}
					label="Email"
					valueChangeHandler={emailChangeHandler}
					helperText="Enter a valid email"
					value={email}
				/>
			</div>
			{/* message */}
			<div className="mx-4 my-2 flex flex-col">
				<ContactFormField
					id="standard-multiline-static"
					label="Message"
					multiline={true}
					rows={4}
					value={message}
					valueChangeHandler={messageChangeHandler}
				/>
			</div>
			<button type="submit" className="mx-auto text-xs w-[100%] sm:w-[65%] flex justify-center items-center">
				<p className="ani py-2 sm:px-4 w-[60%] mx-auto rounded-2xl bg-red-900">
					Send
				</p>
			</button>
		</form>
	);
};

export default ContactForm;
