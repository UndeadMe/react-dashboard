import styles from './NavigationBar.module.css'

import { SearchNormal1, SmsNotification, Notification, ArrowDown2 } from 'iconsax-react'
import MacCommand from '../assets/svg/MacCommand.svg?react'

import { Link } from 'react-router-dom'



export default function NavigationBar() {
    return (
        <nav className={styles["navigation-bar"]}>
            <Link to="/Overview" className={styles.title}>
                CashFlow
            </Link>
            <ul className={styles["navigation-menu"]}>
                <li>
                    <Link className={styles["navigation-menu-link"]} to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link className={styles["navigation-menu-link"]} to="/analytics">Analytics</Link>
                </li>
                <li>
                    <Link className={styles["navigation-menu-link"]} to="/transactions">transactions</Link>
                </li>
                <li>
                    <Link className={styles["navigation-menu-link"]} to="/walletes">Walletes</Link>
                </li>
            </ul>
            <div className={styles["search-box"]}>
                <SearchNormal1 size="32" color="#f1f5fc"/>
                <input type="text" placeholder='Search anything' className={styles["search-input"]} />
                <button className={styles["mac-command-key"]}>
                    <MacCommand className={styles["mac-command-icon"]} />
                    F
                </button>
            </div>
            <div className={styles["icons-box"]}>
                <SmsNotification size="32" color="#f1f5fc"/>
                <Notification size="32" color="#f1f5fc"/>
            </div>
            <div className={styles["profile-box"]}>
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" className={styles["profile"]} alt="" />
                <ArrowDown2 size="20" color="#f1f5fc"/>
            </div>
        </nav>
    )
}