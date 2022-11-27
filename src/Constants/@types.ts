export type CardType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export type CardsListType = Array<CardType>;

export enum Tabs {
  All = "all",
  Favorites = "myFavorites",
  Popular = "popular",
}

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}

export type setLikeStatusPayload = {
  card: CardType;
  likeStatus: LikeStatus;
};

export type savedPosts = {
  card: CardType;
};
