import React from "react"
import CardsList from "../../Components/CardsList";
import { Tabslist } from "../../Components/TabsList";
import Title from "../../Components/Title";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import SelectedImageModal from "./SelectedImageModal/SelectedImage";

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

const Home = () => {
    return <div className={styles.container}>
        <Title title={"Blog"}></Title>
        <Tabslist></Tabslist>
        <CardsList cardsList={MOCK_CARDS_LIST}></CardsList>
        <SelectedPostModal />
        <SelectedImageModal />
    </div>
};

export default Home;   