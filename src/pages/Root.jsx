import styles from './Root.module.css'

import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';
import RouteMenu from '../components/RouteMenu'

import { ROUTES } from '../router/routerConfig'

import { Outlet } from 'react-router-dom';




export default function Root() {
    return (
        <header className={styles.header}>
            <Container>
                <header>
                    <NavigationBar />

                    <div className={styles["menu-container"]}>
                        <div>
                            <h1 className={styles["welcome-title"]}>Welcome Back, Alex</h1>
                            <h6>this is your monthly overview report</h6>
                        </div>

                        <RouteMenu routes={ROUTES} />
                    </div>

                    <Outlet />
                </header>
            </Container>
        </header>
    )
}