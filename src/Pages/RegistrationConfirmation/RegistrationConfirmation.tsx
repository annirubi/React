import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
import { useLocation } from "react-router-dom";
import styles from "./RegistrationConfirmation.module.css"
 
const RegistrationConfirmation = () => {
    const location = useLocation();
    const { email = "" } = location.state;
    return <FormContainer title={"Registration Confirmation"}>
    <>
    <div className={styles.inputContainer}>
    <div>{"Please activate your account with the activation"}</div>{"Please activate your account with the activation"} 
    <div>
              {"link in the email"} <span>{email}</span>
            </div>
    <div>{"Please, check your email"} </div>
    </div>
    <Button title={"Go to home"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    </>
    </FormContainer>
};

export default RegistrationConfirmation