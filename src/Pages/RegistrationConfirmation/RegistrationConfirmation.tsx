import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
//@ts-ignore
import styles from "./RegistrationConfirmation.module.css"
 
const RegistrationConfirmation = () => {
    return <FormContainer title={"Registration Confirmation"}>
    <>
    <div className={styles.inputContainer}>
    <Input placeholder={"Please activate your account with the activation link in the email example@gmail.com. Please, check your email"} value={""} onChange={() => {}}></Input>
    </div>
    <Button title={"Go to home"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    </>
    </FormContainer>
};

export default RegistrationConfirmation