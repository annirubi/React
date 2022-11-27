import React, { useState } from "react"
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
import styles from "./SignUp.module.css"
import { NavLink } from "react-router-dom";
import { PathNames } from "../Router/Router";

const SignUp = () => {
const [name, setName] = useState("")
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirm, setPasswordConfirm] = useState("")

    return <FormContainer title={"Sign Up"}>
    <>
    <div className={styles.inputContainer}>
    <Input title={"Name"} placeholder={"Your name"} value={name} onChange={(value: string) => setName(value)}></Input>
    <Input title={"Email"} placeholder={"Your email"} value={login} onChange={(value: string) => setLogin(value)}></Input>
    <Input title={"Password"} placeholder={"Your password"} value={password} onChange={(value: string) => setPassword(value)}></Input>
    <Input title={"Confirm Password"} placeholder={"Confirm password"} value={passwordConfirm} onChange={(value: string) => setPasswordConfirm(value)}></Input>
    </div>
    <Button title={"Sign Up"} type={ButtonTypes.Primary} onClick={() => {}} className={styles.button}></Button>
    <div className={styles.signUpRedirect}>{"Already have an account?"} <NavLink to={PathNames.SignIn} className={styles.redirectButton}>{"Sign In"}</NavLink></div>
      
    </>
    </FormContainer>
};

export default SignUp