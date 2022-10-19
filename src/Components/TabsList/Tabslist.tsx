import React, { useState }from "react";
//@ts-ignore
import styles from "./Tabslist.module.css";
import classNames from "classnames";


enum Tabs {
    All = "all",
    Favorites = "myFavorites",
    Popular = "popular"
}
const TABS_NAMES = [{name: "All", key: Tabs.All},
 {name: "My favorites", key: Tabs.Favorites}, 
 {name: "Popular", key: Tabs.Popular},]


export const Tabslist = () => {
    const [activeTab, setActiveTab] = useState(Tabs.All)
    const onTabClick = (tab: Tabs) => {
        setActiveTab(tab)
    }
    return (
      <div className ={styles.container}>
          {TABS_NAMES.map((tab) => {
              return <div key={tab.key} onClick={() => onTabClick(tab.key)} 
              className={classNames({[styles.activeTab] : tab.key === activeTab}, [styles.tab])}>{tab.name}</div>
          })}
      </div>
    );
  };

