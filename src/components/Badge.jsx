import styles from './Badge.module.css'

export default function Badge({ children, status }) {
    return (
        <div className={`${styles['badge']} ${styles[status]}`}>
            { children }
        </div>
    )
}