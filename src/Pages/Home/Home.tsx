import React, { useState, useEffect } from "react";
import CardsList from "../../Components/CardsList";
import { Tabslist } from "../../Components/TabsList";
import Title from "../../Components/Title";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import SelectedImageModal from "./SelectedImageModal/SelectedImage";
import { Tabs } from "../../Constants/@types";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../Redux/Reducers/postsReducer";

const MOCK_CARD = {
  id: 0,
  image:
    "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
  text: "Some description of article",
  date: "2021-12-12",
  lesson_num: 0,
  title: "Some title",
  author: 0,
};

const MOCK_CARDS_LIST = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000",
    text: "Some description of article",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Some title",
    author: 0,
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getsavedPosts);

  const dispatch = useDispatch();
  const allPosts = useSelector(PostsSelectors.getAllPosts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favorites) {
      return savedPosts;
    } else {
      return allPosts;
    }
  };

  return (
    <div className={styles.container}>
      <Title title={"Blog"}></Title>
      <Tabslist activeTab={activeTab} onSelectTab={onTabClick}></Tabslist>
      <CardsList cardsList={cardsArray()}></CardsList>
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;
