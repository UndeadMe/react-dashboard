import { WalletMoney, MoneySend, UsdCoin } from 'iconsax-react'

import TotalBox from '../components/TotalBox'

import styles from './Overview.module.css'



export default function Overview() {
    return (
        <>
            <div className={styles["total-boxes"]}>
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Balance"
                    secTitle="2 July-24 September 2023" //Todo provide a real date
                    totalAmount="$982.000,90"
                    incomeStatement="+ 16% Last Year"
                    sign={<WalletMoney className="total-income-statement-box__sign-blue" variant="Bold"/>}
                />
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Balance"
                    secTitle="2 July-24 September 2023" //Todo provide a real date
                    totalAmount="$982.000,90"
                    incomeStatement="+ 16% Last Year"
                    sign={<UsdCoin className="total-income-statement-box__sign-green" variant="Bold"/>}
                />
                <TotalBox  //Todo u can use json-server for making this app like a real world react application 
                    title="Total Balance"
                    secTitle="2 July-24 September 2023" //Todo provide a real date
                    totalAmount="$982.000,90"
                    incomeStatement="+ 16% Last Year"
                    sign={<MoneySend className="total-income-statement-box__sign-red" variant="Bold"/>}
                />
            </div>
        </>
    )
}