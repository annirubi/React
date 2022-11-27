import React, { useState }from "react";
import { BurgerClosedIcon, BurgerOpenedIcon } from "../../Assets";
import { SearchIcon } from "../../Assets/icons/SearchIcon";
import { UserIcon } from "../../Assets/icons/UserIcon";
import Button, { ButtonTypes } from "../Button"
import Input from "../Input";
import UserName from "../UserName";
import styles from "./Header.module.css";
import Menu from "./Menu";


const Header = () => {
    const isLoggedIn = false;
    const [isOpened, setOpened] = useState(false);
    const onBurgerClick = () => {
        setOpened(!isOpened);
    }
    const [isClicked, setClicked] = useState(false);
    const onSearchClick = () => {
        setClicked(!isClicked);
    }
    const [search, setSearch] = useState("")

    return (
        <div className={styles.container}>
        <Button 
        title={isOpened ? <BurgerOpenedIcon></BurgerOpenedIcon> : <BurgerClosedIcon></BurgerClosedIcon>} 
        type={ButtonTypes.Primary} 
        onClick={onBurgerClick}
        className={styles.burgerButton}
        ></Button>
        {isOpened && <Menu></Menu>}
        <div className={styles.headerLine}>
            <div>
            {isClicked && <Input value={search} onChange={(value: string) => setSearch(value)} type={"Search"} placeholder={"Search.."} className={styles.searchField}></Input>} 
            </div>
            <div className={styles.buttonContainer}>
            <div className={styles.searchButton}>
            <Button 
        title={<SearchIcon></SearchIcon>} 
        type={ButtonTypes.Primary} 
        onClick={onSearchClick}
        className={styles.searchButtonContainer}
        ></Button>
            </div>
           {isLoggedIn ? <UserName username={"Artem Malkin"}></UserName> : 
           <div className={styles.userIcon}>
               <UserIcon></UserIcon>
           </div>
           }
            </div>
        </div>
    </div>
    ) 
}

export default Header;