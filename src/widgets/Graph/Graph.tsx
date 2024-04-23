import styles from "./Graph.module.css";

type GraphProps = {
    prediction: { [key: string]: number };
};

export const Graph: React.FC<GraphProps> = ({ prediction }) => {
    return (
        <div className={styles.Graph}>
            {Object.keys(prediction).map((pred) => (
                <div key={pred}>{prediction[pred]}</div>
            ))}
        </div>
    );
};
