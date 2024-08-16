import styles from './RouteMenu.module.css'


import { NavLink } from "react-router-dom"



export default function RouteMenu({ routes }) {
    const routePaths = Object.values(routes)
    const routeNames = Object.keys(routes)

    const setActive = ({ isActive }) =>
        isActive ? `${styles["menu-route-item"]} ${styles["active"]}` : styles["menu-route-item"]

    return (
        <ul className={styles['menu']}>
            {
                routePaths.map(((routePath, i) => (
                    <li key={crypto.randomUUID()} >
                        <NavLink to={routePath} className={setActive}>
                            { routeNames[i] }
                        </NavLink>
                    </li>
                )))
            }
        </ul>
    )
}