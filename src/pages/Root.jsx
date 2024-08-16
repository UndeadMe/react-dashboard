import styles from './Root.module.css'

import Container from './../components/Container';
import NavigationBar from './../components/NavigationBar';


export default function Root() {
    return (
        <header className={styles.header}>
            <Container>
                <header>
                    <NavigationBar />
                </header>
            </Container>
        </header>
    )
}