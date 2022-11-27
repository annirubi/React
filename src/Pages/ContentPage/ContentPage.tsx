import React from "react"
import styles from "./ContentPage.module.css"
import Title from "../../Components/Title";
import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../Assets";

const ContentPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
            <div className={styles.home}>{"Home"}</div>
            <div className={styles.slash}>{"|"}</div>
            <div className={styles.post}>{"Post 14278"}</div>
            </div>
            <Title title={"Some title"}></Title>
            <img className={styles.image} src={"https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"} alt={'image'} />
            <div className={styles.text}>{"Some text"}</div>
             <div className={styles.iconsContainer}>
                 <div className={styles.leftIcons}>
                     <div className={styles.likeIcon}> <LikeIcon></LikeIcon></div>
                     <div className={styles.dislikeIcon}><DislikeIcon></DislikeIcon></div>
                 </div>
                 <div className={styles.rightIcons}>
                     <BookmarkIcon></BookmarkIcon>
                     <div>{"Add to favorites"}</div>
                 </div>
             </div>
        </div>
    )
}

export default ContentPage;