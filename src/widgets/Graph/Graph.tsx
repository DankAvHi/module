import styles from "./Graph.module.css";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";

type GraphProps = {
    prediction: { [key: string]: number };
};

export const Graph: React.FC<GraphProps> = ({ prediction }) => {
    const data = Object.keys(prediction).map((pred) => {
        const value = prediction[pred];

        const name = new Date(pred).getDate();
        return {
            name: name,
            uv: value,
        };
    });

    return (
        <div className={styles.Graph}>
            <span className={styles.value}>{`target value`}</span>
            <AreaChart width={416} height={382} data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F1E15B" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F1E15B" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#F1E15B" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            <span className={styles.date}>{`date`}</span>
        </div>
    );
};
