import { WalletMoney, MoneySend, UsdCoin } from 'iconsax-react'

import TotalBox from '../components/TotalBox'
import Chart from '../components/Chart'

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

            <div className={styles["chart-wrap"]}>
                <div className={styles["chart-wrap__headers"]}>
                    <div>
                        <h1>Balance Overview</h1>
                        <h5>
                            <span className="green-dot"></span> Total Income
                            <span className="red-dot" style={{ marginLeft: "20px" }}></span> Total Spending
                        </h5>
                    </div>
                    <button> {/* // todo: add date picker  */} 
                        Last 6 month
                    </button>
                </div>

                <Chart />
            </div>
        </div>
    )
}