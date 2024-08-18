import { createBrowserRouter, Navigate } from "react-router-dom"

import Root from '../pages/Root'
import Overview from '../pages/Overview'
import Wallet from '../pages/Wallet'
import Invoice from '../pages/Invoice'
import Help from '../pages/Help'
import Profile from '../pages/Profile'
import Report from '../pages/Report'
import Settings from '../pages/Settings'

import { ROUTES } from './routerConfig' 
const { 
    Overview: OverviewPath, 
    Wallet: WalletPath, 
    Invoice: InvoicePath, 
    Profile: ProfilePath, 
    Settings: SettingsPath, 
    Help: HelpPath, 
    Report: ReportPath 
} = ROUTES 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Navigate to="/overview" replace />
            }
            ,{
                path: OverviewPath,
                element: <Overview />
            },
            {
                path: WalletPath,
                element: <Wallet />
            },
            {
                path: InvoicePath,
                element: <Invoice />
            },
            {
                path: ProfilePath,
                element: <Profile />
            },
            {
                path: SettingsPath,
                element: <Settings />
            },
            {
                path: HelpPath,
                element: <Help />
            },
            {
                path: ReportPath,
                element: <Report />
            }
        ]
    }
])

export default router