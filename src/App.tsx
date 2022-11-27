import React, { useState, useEffect } from "react";
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
import Router from "./Pages/Router"
import ContentPage from "./Pages/ContentPage";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { setTheme } from "./Redux/Reducers/themeReducer";
import ThemeSelectors from "./Redux/Selectors/themeSelectors";

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
  const dispatch = useDispatch();
  const [isOpened, setOpened] = useState(false)
  const [inputValue, setInputValue] = useState(" ");
  const onChange = (value: string) => {
    setInputValue(value);
  };
  const [cardsList, setCardsList] = useState<CardsListType | null >(null);

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST);
  },[])

  const theme = useSelector(ThemeSelectors.getTheme);
  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  }

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router></Router>

    </ThemeProvider>
    
  );
} 

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
