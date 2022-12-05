import React, { FC, useState } from "react";
import styles from "./Tabslist.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs } from "../../Constants/@types";

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My favorites", key: Tabs.Favorites },
  { name: "Popular", key: Tabs.Popular },
];

type TabProps = {
  activeTab: Tabs;
  disabled?: boolean;
  onSelectTab: (tab: Tabs) => void;
};

export const Tabslist: FC<TabProps> = ({
  disabled,
  activeTab,
  onSelectTab,
}) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {TABS_NAMES.map((tab) => {
        return (
          <div
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className={classNames([
              styles.tab,
              { [styles.activeTab]: tab.key === activeTab },
            ])}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};
