import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
//@ts-ignore
import styles from "./Success.module.css"
 
const Success = () => {
    return <FormContainer title={"Success"}>
    <>
    <div className={styles.container}>
        <div className={styles.description}>{"Email confirmed. Your registration is now completed"}</div>
    </div>
    <Button title={"Go to home"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    </>
    </FormContainer>
};

export default Success

