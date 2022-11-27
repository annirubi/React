import React, { FC } from "react";
import { BookmarkIcon, DislikeIcon, LikeIcon, MoreIcon } from "../../Assets";
import { CardType } from "../../Constants/@types";
//@ts-ignore
import styles from "./Card.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../../Redux/Reducers/postsReducer";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
  isFromModal?: boolean;
};

const Card: FC<CardProps> = ({ card, size, isFromModal }) => {
  const { title, text, image, date } = card;
  const dispatch = useDispatch();
  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSamll = size === CardSize.Small;

  const onSettingClick = () => {
    dispatch(setSelectedPost(card));
  };
  const onImageClick = () => {
    dispatch(setSelectedImage(image));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSamll,
      })}
    >
      <div
        className={classNames(styles.bodyContainer, {
          [styles.mediumBodyContainer]: isMedium,
          [styles.smallBodyContainer]: isSamll,
        })}
      >
        <div className={styles.infoContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.mediumTitle]: isMedium,
                [styles.smallTitle]: isSamll,
              })}
            >
              {title}
            </div>
          </div>
          {isLarge && <div className={styles.description}>{text}</div>}
        </div>
        <img
          onClick={!isFromModal ? onImageClick : undefined}
          src={image}
          alt={""}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSamll,
          })}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconContainer}>
          <div className={styles.iconButton}>
            <LikeIcon></LikeIcon>
          </div>
          <div className={styles.iconButton}>
            <DislikeIcon></DislikeIcon>
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.iconButton}>
            <BookmarkIcon></BookmarkIcon>
          </div>
          <div className={styles.iconButton} onClick={onSettingClick}>
            <MoreIcon></MoreIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
