import React, { useState, useEffect } from "react";
//@ts-ignore
import styles from "./App.module.css"
import Title from "./Components/Title";
import { BurgerClosedIcon, BurgerOpenedIcon } from "./Assets/icons";
import Button, { ButtonTypes } from "./Components/Button";
import { Tabslist }  from "./Components/TabsList";
import Input from "./Components/Input";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Success from "./Pages/Success";
import RegistrationConfirmation from "./Pages/RegistrationConfirmation";
import Card from "./Components/Card";
import { CardSize } from "./Components/Card/Card";
import CardsList from "./Components/CardsList"
import { CardsListType } from "./Constants/@types";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import { Theme } from "./Constants/@types"
import ThemeSwitcher from "./Components/ThemeSwitcher";


const MOCK_CARD = {
  id: 0,
  image: "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
  text: "Some description of article",
  date: "2021-12-12",
  lesson_num: 0,
  title: "Some title",
  author: 0,
};

const MOCK_CARDS_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
]

const App = () => {
  const [isOpened, setOpened] = useState(false)
  const [inputValue, setInputValue] = useState(" ");
  const onChange = (value: string) => {
    setInputValue(value);
  };
  const [cardsList, setCardsList] = useState<CardsListType | null >(null);

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST);
  },[])

  const [theme, setTheme] = useState(Theme.Dark);
  const onChangeTheme = (value: Theme) => {
    setTheme(value)
  }

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className ={styles.container}>
      <ThemeSwitcher></ThemeSwitcher> 
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
      <RegistrationConfirmation></RegistrationConfirmation>
      <Card card={MOCK_CARD} size={CardSize.Small}></Card>
      
      <CardsList cardsList={MOCK_CARDS_LIST}></CardsList>
    </div>

    </ThemeProvider>
    
  );
} 

export default App;
