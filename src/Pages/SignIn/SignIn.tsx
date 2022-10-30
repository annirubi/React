import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
//@ts-ignore
import styles from "./SignIn.module.css"
 
const SignIn = () => {
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")

    return <FormContainer title={"Sign In"}>
    <>
    <div className={styles.inputContainer}>
    <Input title={"Email"} placeholder={"Your email"} value={login} onChange={(value: string) => setLogin(value)}></Input>
    <Input title={"Password"} placeholder={"Your password"} value={password} onChange={(value: string) => setPassword(value)}></Input>
    </div>
    <div className={styles.forgotPassword}>{"Forgot password?"}</div>
    <Button title={"Sign In"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    <div className={styles.signUpRedirect}>{"Don`t have an account?"} <span>{"Sign Up"}</span></div>
      
    </>
    </FormContainer>
};

export default SignIn