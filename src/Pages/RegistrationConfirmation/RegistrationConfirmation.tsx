import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
//@ts-ignore
import styles from "./RegistrationConfirmation.module.css"
 
const RegistrationConfirmation = () => {
    return <FormContainer title={"Registration Confirmation"}>
    <>
    <div className={styles.container}>
        <div className={styles.description}>Please activate your account with the activation <br /> 
        link in the email <span>example@gmail.com.</span> <br /> 
        Please, check your email</div>
    </div>
    <Button title={"Go to home"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    </>
    </FormContainer>
};

export default RegistrationConfirmation