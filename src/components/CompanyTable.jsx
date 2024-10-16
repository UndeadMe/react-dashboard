import styles from './CompanyTable.module.css'

import Badge from './Badge'

export default function CompanyTable() {
    return (
        <div className={styles["table"]}>
            <div className={styles["table-header"]}>
                <div className={styles["header__item"]}>CompanyName</div>
                <div className={styles["header__item"]}>Type</div>
                <div className={styles["header__item"]}>Date</div>
                <div className={styles["header__item"]}>Amount</div>
                <div className={styles["header__item"]}>Employee Status</div>
            </div>
            <div className={styles["table-content"]}>	
                <div className={styles["table-row"]}>		
                    <div className={styles["table-data"]}>
                        <div className={styles["company-brand"]}>
                            <div className={styles["company-brand-logo"]}>
                                <img className={styles["company-brand-img"]} src="/img/figma.png" alt="" />
                            </div>
                            <div className={styles["company-brand-title"]}>
                                <h1>Figma</h1>
                                <h3>Application</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles["table-data"]}>Subscription</div>
                    <div className={styles["table-data"]}>July 11.07.2023</div>
                    <div className={styles["table-data"]} style={{ color: "#0042FD" }}>$624,00.90</div>
                    <div className={styles["table-data"]}>
                        <Badge status="green">Completed</Badge>
                    </div>
                </div>
                <div className={styles["table-row"]}>		
                    <div className={styles["table-data"]}>
                        <div className={styles["company-brand"]}>
                            <div className={styles["company-brand-logo"]}>
                                <img className={styles["company-brand-img"]} src="/img/figma.png" alt="" />
                            </div>
                            <div className={styles["company-brand-title"]}>
                                <h1>Figma</h1>
                                <h3>Application</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles["table-data"]}>Subscription</div>
                    <div className={styles["table-data"]}>July 11.07.2023</div>
                    <div className={styles["table-data"]} style={{ color: "#00BEFD" }}>$624,00.90</div>
                    <div className={styles["table-data"]}>
                        <Badge status="yellow">IN COMPLETED</Badge>
                    </div>
                </div>
            </div>	
        </div>
    )
}