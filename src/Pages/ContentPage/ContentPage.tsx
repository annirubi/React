import React, { FC, useEffect } from "react";
import styles from "./ContentPage.module.css";
import Title from "../../Components/Title";
import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../Assets";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../Redux/Selectors/postsSelectors";
import { getSinglePost } from "../../Redux/Reducers/postsReducer";

const ContentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const card = useSelector(postsSelectors.getSinglePost);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, []);

  return card ? (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.home}>{"Home"}</div>
        <div className={styles.slash}>{"|"}</div>
        <div className={styles.post}>{"Post 14278"}</div>
      </div>
      <Title title={card.title}></Title>
      <img className={styles.image} src={card.image} alt={"image"} />
      <div className={styles.text}>{card.text}</div>
      <div className={styles.iconsContainer}>
        <div className={styles.leftIcons}>
          <div className={styles.likeIcon}>
            {" "}
            <LikeIcon></LikeIcon>
          </div>
          <div className={styles.dislikeIcon}>
            <DislikeIcon></DislikeIcon>
          </div>
        </div>
        <div className={styles.rightIcons}>
          <BookmarkIcon></BookmarkIcon>
          <div>{"Add to favorites"}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ContentPage;
