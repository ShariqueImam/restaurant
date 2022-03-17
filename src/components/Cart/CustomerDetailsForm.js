import React, { useState, useEffect } from 'react'
import useInput from "../hooks/contactInputValidation";
import Heading from '../Heading/Heading'
import { BiArrowBack } from 'react-icons/bi'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CustomerDetailsForm = () => {
    const cartItemsFromStore = useSelector(state => state.cartItems.items)
    const letters = /^[A-Za-z]+$/;
    const [isError, setError] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const {
        value: name,
        valueIsValid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: nameChangeHandler,
        reset: nameReset,
    } = useInput((val) => val);

    const {
        value: email,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        reset: emailReset,
    } = useInput((val) => val.includes("@") && val.includes("."));

    const {
        value: address,
        valueIsValid: addressIsValid,
        hasError: addressHasError,
        inputChangeHandler: addressChangeHandler,
        reset: addressReset,
    } = useInput((val) => val);

    const {
        value: phoneNumber,
        valueIsValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        inputChangeHandler: phoneNumberChangeHandler,
        reset: phoneNumberReset,
    } = useInput((val) => val.length > 11 && !val.match(letters));

    const style = {
        form: ' w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] mx-auto flex flex-col my-12',
        customerDetailsForm: 'flex flex-col w-[90%] sm:w-[85%] md:w-[60%] lg:w-[60%] mx-auto',
        input: 'placeholder:opacity-[0.4] text-gray-800 tracking-wide placeholder:tracking-widest caret-pink-800 my-4 rounded-xl outline-none placeholder:text-red-800 border-[1px] border-red-800 px-4 py-2 sm:px-8 sm:py-4 md:px-6 md:py-2 lg:px-4 lg:py-4 w-[100%]',
        inputContainer: 'w-[100%] flex items-center justify-center flex-col',
        phoneNumberError: ` mr-auto flex text-red-700 ${isSubmit && phoneNumberHasError ? 'flex' : 'hidden'}`,
        emailError: ` mr-auto flex text-red-700 ${isSubmit && emailHasError ? 'flex' : 'hidden'}`,
        orderButtonContainer: "mx-auto w-[95%] sm:w-[95%] md:w-[80%] lg:w-[70%] flex items-center justify-around my-12",
        backButton: 'text-sm sm:text-lg md:text-md transition duration-[250ms]  hover:opacity-[0.6]  bg-white font-semibold border-[1px] border-red-800 text-red-800 rounded-3xl px-4 py-2 sm:px-8 sm:py-4 md:px-8 md:py-2 lg:px-8 lg:py-3 flex items-center justify-center',
        orderButtonValid: `cursor-pointer text-sm sm:text-lg md:text-md hover:bg-red-700 transition duration-[250ms] font-semibold bg-red-800 text-gray-200 rounded-3xl px-4 py-2 sm:px-8 sm:py-4 md:px-8 md:py-2 lg:px-8 lg:py-3`,
        orderButtonInValid: `cursor-not-allowed text-sm sm:text-lg md:text-md opacity-[0.5] transition duration-[250ms] font-semibold bg-red-800 text-gray-200 rounded-3xl px-4 py-2 sm:px-8 sm:py-4 md:px-8 md:py-2 lg:px-8 lg:py-3`,
    }
    useEffect(() => {
        setFormIsValid(emailHasError && phoneNumberHasError ? false : true)
    }, [name, email, phoneNumber, address])

    // sending the order details to owner
    const orderSubmitHandler = async (event) => {
        event.preventDefault()
        setIsSubmit(true)
        if (!formIsValid) {
            return;
        }
        phoneNumberReset();
        emailReset();
        nameReset();
        addressReset();
    };

    return (
        <div className={style.form}>
            <Heading heading="Customer Details" />
            <form action="" className={style.customerDetailsForm}>
                <div className={style.inputContainer}>
                    <input type="text" className={style.input} value={name} placeholder="Name" onChange={nameChangeHandler} />

                </div>
                <div className={style.inputContainer}>
                    <input type="email" className={style.input} value={email} placeholder="Email" onChange={emailChangeHandler} />
                    <Fade>
                        <p className={style.emailError}>*Enter correct email</p>
                    </Fade>
                </div>
                <div className={style.inputContainer}>
                    <input type="text" className={style.input} value={address} placeholder="Address" onChange={addressChangeHandler} />
                </div>
                <div className={style.inputContainer}>
                    <input type="text" className={style.input} value={phoneNumber} placeholder="Phone Number" onChange={phoneNumberChangeHandler} />
                    <Fade>
                        <p className={style.phoneNumberError}>* Enter complete phone number</p>
                    </Fade>
                </div>
            </form>
            {/* the submit button */}
            <div className={style.orderButtonContainer}>
                <Link to='/' className={style.backButton} ><span className="mx-2 "><BiArrowBack /></span>
                    Back to Restaurant
                </Link>
                {cartItemsFromStore.length > 0 ? <button className={style.orderButtonValid} onClick={orderSubmitHandler}>
                    PLACE ORDER
                </button> : <button className={style.orderButtonInValid} >
                    PLACE ORDER
                </button>}

            </div>
        </div>
    )
}

export default CustomerDetailsForm