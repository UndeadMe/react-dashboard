import styles from './TotalBox.module.css'

export default function TotalBox({ title, secTitle, totalAmount, incomeStatement, sign, type }) {
    console.log(styles[`incomestatement-${type}`])
    return (
        <div className={styles["total-income-statement-box"]}>
            <div className={styles["total-income-statement-box__headers"]}>
                <div>
                    <h1>{ title }</h1>
                    <h5>{ secTitle }</h5>
                </div>
                { sign }
            </div>
            <div className={styles["total-income-statement-box__amounts"]}>
                <div>
                    <h2>{ totalAmount }</h2>
                    <h6 className={styles[`incomestatement-${type}`]}>{ incomeStatement }</h6>
                </div>
                <div className={styles["income-chart"]}>
                    <img src="/img/income-chart.png" alt="" />
                </div>
            </div>
        </div>
    )
}