import classNames from "classnames";
import React, { useMemo } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { PathNames } from "../../../Pages/Router/Router";
import Button, { ButtonTypes } from "../../Button";
import ThemeSwitcher from "../../ThemeSwitcher";
import UserName from "../../UserName";
import styles from "./Menu.module.css";

const Menu = () => {
    const isLoggedIn = true;
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navButtons = useMemo(
        () => [
            {title: "Home", link: PathNames.Home},
            ...(isLoggedIn ? [{title: "Add Post", link: PathNames.AddPost}] : [])
        ],
        [isLoggedIn]
    );

    const onFooterButtonClick = () => {
        navigate(PathNames.SignIn)
    }

    return (
        <div className={styles.container}>
            <div>
                {isLoggedIn && <UserName username={"Artem Malkin"}></UserName>}
                {navButtons.map(({ link, title }) => {
                    return (
                        <NavLink key={link} to={link} 
                        className={classNames(styles.navButton, { [styles.activeNavButton]: pathname === link})}>
                            {title}
                        </NavLink>
                    )
                })}
            </div>
            <div>
            <ThemeSwitcher></ThemeSwitcher>
            <Button title={isLoggedIn ? "Log Out" : "Sign In"} type={ButtonTypes.Secondary} 
            onClick={onFooterButtonClick} className={styles.footerButton}></Button>
            </div>
            

    </div>
    ) 
};

export default Menu;