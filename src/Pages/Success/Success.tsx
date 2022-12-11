import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer"
import Input from "../../Components/Input";
import { activateUser } from "../../Redux/Reducers/authReducer";
import { PathNames } from "../Router/Router";
import styles from "./Success.module.css"
 
const Success = () => {
    const { uid, token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onConfirm = () => {
        if (uid && token) {
            dispatch(activateUser({data: {uid, token}, callback: () => {navigate(PathNames.SignIn)}}));
        }
        
    }
    return <FormContainer title={"Success"}>
    <>
    <div className={styles.inputContainer}>
    <div>{"You need to confirm your email"}</div>
    <div>{"Please, confirm"} </div>
    </div>
    <Button title={"Confirm"} type={ButtonTypes.Primary} onClick={onConfirm} className={styles.button}></Button>
    </>
    </FormContainer>
};

export default Success