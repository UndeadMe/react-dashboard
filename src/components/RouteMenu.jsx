import styles from './RouteMenu.module.css'


import { NavLink } from "react-router-dom"



export default function RouteMenu({ routes }) {
    const routePaths = Object.values(routes)
    const routeNames = Object.keys(routes)

    return (
        <ul className={styles['menu']}>
            {
                routePaths.map(((routePath, i) => (
                    <li key={crypto.randomUUID()} >
                        <NavLink to={routePath}>
                            { routeNames[i] }
                        </NavLink>
                    </li>
                )))
            }
        </ul>
    )
}