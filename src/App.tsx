import React, { useState } from "react";
//@ts-ignore
import styles from "./App.module.css"
import Title from "./Components/Title";
import { BurgerClosedIcon, BurgerOpenedIcon } from "./Assets/icons";
import Button, { ButtonTypes } from "./Components/Button";
import { Tabslist }  from "./Components/TabsList";
import Input from "./Components/Input";

const App = () => {
  const [isOpened, setOpened] = useState(false)
  const [inputValue, setInputValue] = useState(" ");
  const onChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div className ={styles.container}>
      <Title title={"Sign In"} /> 
      <Button
        title={!isOpened ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
        onClick={() => setOpened(!isOpened)}
      />
      <Tabslist/>
      <Input
      value={inputValue}
      onChange={onChange}
      placeholder={"Enter your text"}
      title={"Title"}
      error={"Error message"}
      />
    </div>
  );
}

export default App;
