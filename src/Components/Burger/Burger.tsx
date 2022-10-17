import React, { FC } from "react";
//@ts-ignore
import styles from "./Burger.module.css"
//@ts-ignore
import Logoburger from "./Logoburger.png"

type BurgerProps = {
    status: boolean,
    onClick: () => void
}

const Burger: FC<BurgerProps> = (props) => {
    const { status, onClick } = props
    return (
        <div className={styles.container}  onClick={onClick}>
            <img src={Logoburger} alt="icon" className={styles.burger}/>
    </div>
    ) 
}

export default Burger


