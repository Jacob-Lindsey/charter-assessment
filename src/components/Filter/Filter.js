import styles from "./Filter.module.css";

const Filter = ({ amount, setAmount }) => {

    return (
        <>
            <div className={styles.label}>Choose the amount of purchases</div>
            <div className={styles.container}>
                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${amount === 50 ? styles.active : null}`}
                        onClick={() => setAmount(50)}
                    >
                        50
                    </button>
                </div>
                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${amount === 100 ? styles.active : null}`}
                        onClick={() => setAmount(100)}
                    >
                        100
                    </button>
                </div>
                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${amount === 150 ? styles.active : null}`}
                        onClick={() => setAmount(150)}
                    >
                        150
                    </button>
                </div>
                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${amount === 200 ? styles.active : null}`}
                        onClick={() => setAmount(200)}
                    >
                        200
                    </button>
                </div>
            </div>
        </>
    )

};

export default Filter;