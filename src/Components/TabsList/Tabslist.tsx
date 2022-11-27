import React, { useState }from "react";
//@ts-ignore
import styles from "./Tabslist.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";


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
    const { theme } = useThemeContext();
    return (
      <div className={classNames(styles.container, { [styles.darkContainer]: theme === Theme.Dark})}>
          {TABS_NAMES.map((tab) => {
              return <div key={tab.key} onClick={() => onTabClick(tab.key)} 
              className={classNames([ styles.tab, { [styles.activeTab]: tab.key === activeTab }])}>{tab.name}</div>
          })}
      </div>
    );
  };

