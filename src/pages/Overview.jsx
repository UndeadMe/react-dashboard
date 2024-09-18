import { WalletMoney, MoneySend, UsdCoin } from 'iconsax-react'

import TotalBox from '../components/TotalBox'
import Chart from '../components/Chart'

import { More, Calendar } from 'iconsax-react'

import styles from './Overview.module.css'



export default function Overview() {
    return (
        <div style={{ paddingBottom: "100px" }}>
            <div className={styles["total-boxes"]}>
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Balance"
                    secTitle="2 July-24 September 2023" //Todo provide a real date
                    totalAmount="$982.000,90"
                    incomeStatement="+ 16% Last Year"
                    sign={<WalletMoney className="total-income-statement-box__sign-blue" variant="Bold"/>}
                    type="blue"
                />
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Income"
                    secTitle="9 July-24 September 2023" //Todo provide a real date
                    totalAmount="$854.348,00"
                    incomeStatement="+ 12% Last Month"
                    sign={<UsdCoin className="total-income-statement-box__sign-green" variant="Bold"/>}
                    type="green"
                />
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Spending"
                    secTitle="24 July-24 September 2023" //Todo provide a real date
                    totalAmount="$982.000,00"
                    incomeStatement="- 10% Last Year"
                    sign={<MoneySend className="total-income-statement-box__sign-red" variant="Bold"/>}
                    type="red"
                />
            </div>

            <div className={styles.main}>
                <div className={styles["chart-wrap"]}>
                    <div className={styles["chart-wrap__headers"]}>
                        <div>
                            <h1>Balance Overview</h1>
                            <h5>
                                <span className="green-dot"></span> Total Income
                                <span className="red-dot" style={{ marginLeft: "20px" }}></span> Total Spending
                            </h5>
                        </div>
                        <button className={styles["calendar-btn"]}> {/* // todo: add date picker  */} 
                            Last 6 month
                            <Calendar size="30" color="#000" />
                        </button>
                    </div>

                    <Chart />
                </div>

                <div className={styles['spending-wrap']}>
                    <div className={styles["spending-wrap__header"]}>
                        <h1 className={styles["spending-wrap__header-title"]}>All Spending</h1>
                        <More size="28" />
                    </div>
                    
                    <div className={styles["spending-wrap__header-amounts"]}>
                        <div className={styles["spending-wrap__header-amount-box"]}>
                            <h3>Weekly</h3>
                            <h6>$874.<span>00</span></h6>
                        </div>
                        <div className={styles["spending-wrap__header-amount-divider"]}></div>
                        <div className={styles["spending-wrap__header-amount-box"]}>
                            <h3>Monthly</h3>
                            <h6>$8.985.<span>56</span></h6>
                        </div>
                        <div className={styles["spending-wrap__header-amount-divider"]}></div>
                        <div className={styles["spending-wrap__header-amount-box"]}>
                            <h3>Yearly</h3>
                            <h6>$28.985.56.<span>00</span></h6>
                        </div>
                    </div>
                    
                    <div className={styles["circular-chart"]}>
                        <div className={styles["overlay"]}>
                            <div className={`${styles["circular-chart-inner"]} ${styles["second-circular"]}`}>
                                <div className={styles["overlay"]}>
                                    <div className={`${styles["circular-chart-inner"]} ${styles["third-circular"]}`}>
                                        <div className={styles["overlay"]}>
                                            <div>
                                                <h1>$524</h1>
                                                <h5>total spend</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles["total-income-percents"]}>
                        <div className={styles["total-income-percent-item"]}>
                            <div>
                                <div className={`${styles["total-income-percent-item-circle"]} ${styles["blue"]}`}></div>
                                Workspace
                            </div>
                            <span>45%</span>
                        </div>
                        <div className={styles["total-income-percent-item"]}>
                            <div>
                            <div className={`${styles["total-income-percent-item-circle"]} ${styles["orange"]}`}></div>
                                Employee Salary
                            </div>
                            <span>52%</span>
                        </div>
                        <div className={styles["total-income-percent-item"]}>
                            <div>
                            <div className={`${styles["total-income-percent-item-circle"]} ${styles["lightblue"]}`}></div>
                                Shopping
                            </div>
                            <span>24%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}