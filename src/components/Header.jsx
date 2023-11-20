import styles from "./Header.module.css"

import igniteLogo from "../assets/Ignite-logo.svg";

console.log(igniteLogo);

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo tipo ignite"/>
        </header>
    )
}