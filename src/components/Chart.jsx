import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip
} from "recharts";

import CustomizedTick from './CustomizedTick'
import CustomizedDot from './CustomizedDot'


import styles from './Chart.module.css'

const data = [
    {
        name: "Jan",
        lightBlue: 4000,
        blue: 5400,
    },
    {
        name: "Feb",
        lightBlue: 5000,
        blue: 4500,
    },
    {
        name: "Mar",
        lightBlue: 4300,
        blue: 5000,
    },
    {
        name: "Apr",
        lightBlue: 5000,
        blue: 3500,
    },
    {
        name: "May",
        lightBlue: 5800,
        blue: 5000,
    },
    {
        name: "Jun",
        lightBlue: 5400,
        blue: 6000,
    },
    {
        name: "July",
        lightBlue: 6000,
        blue: 7000,
    },
    {
        name: "Aug",
        lightBlue: 5000,
        blue: 6000,
    },
    {
        name: "Sep",
        lightBlue: 5000,
        blue: 5500,
    },
    {
        name: "Oct",
        lightBlue: 4500,
        blue: 5700,
    },
    {
        name: "Nob",
        lightBlue: 5500,
        blue: 5000,
    },
    {
        name: "Dec",
        lightBlue: 7000,
        blue: 4200,
    },
]


export default function Chart() {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' }) //Todo learn about Intl and toLocalString
    const month = new Date().toLocaleString('default', { month: "short" }) // todo learn about date
    
    return (
        <div className={styles["line-chart"]}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={730} height={250} data={data}>
                        <defs>
                            <linearGradient id="colorblue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="10%" stopColor="lightblue" stopOpacity={0.5}/>
                                <stop offset="100%" stopColor="lightblue" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={15} tick={<CustomizedTick month={month} /> } />
                        <YAxis tickLine={false} axisLine={false} tickMargin={30} tickFormatter={formatter.format} />
                        <CartesianGrid horizontal={false} />
                        <Area 
                            isAnimationActive={false} 
                            type="bump" 
                            dataKey="blue" 
                            stroke="blue" 
                            fillOpacity={0}  
                            strokeWidth={2}
                        />
                        <Area
                            activeDot={false}
                            dot={<CustomizedDot month={month} />}
                            isAnimationActive={false} 
                            type="bump"
                            dataKey="lightBlue" 
                            stroke="lightblue" 
                            strokeWidth={2} 
                            fillOpacity={1} 
                            fill="url(#colorblue)" 
                        />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}