import React, { useState } from "react";
//@ts-ignore
import styles from "./App.module.css"
import Title from "./Components/Title";
// import  Burger from "./Components/Burger"
import { BurgerClosedIcon, BurgerOpenedIcon } from "./Assets/icons";
import Button, { ButtonTypes } from "./Components/Button";

const App = () => {
  const [isOpened, setOpened] = useState(false)
  return (
    <div className ={styles.container}>
      <Title title={"Sign In"} /> 
      <Button
        title={!isOpened ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
        onClick={() => setOpened(!isOpened)}
      />
    </div>
  );
}

export default App;
