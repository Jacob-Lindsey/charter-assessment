import { useEffect, useState } from "react";
import { fetchTransactions } from "../../utils/fetchTransactions";
import { getStartDate } from "../../utils/getStartDate";
import Filter from "../Filter/Filter";
import SummaryCard from "../SummaryCard/SummaryCard";
import styles from "./SummaryList.module.css";

const SummaryList = ({ numMonths }) => {

    const [months, setMonths] = useState([]);
    const [amount, setAmount] = useState(50);

    useEffect(() => {
        // "Fetching" user data asynchronously using the Promise API
        fetchTransactions(getStartDate(numMonths), amount)
            .then(data => setMonths(data));
    }, [amount, numMonths]);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.title}>REWARDS HISTORY</div>
            </div>
            <Filter 
                amount={amount}
                setAmount={setAmount}
            />
            <div className={styles.container}>
                {months.map(([month, data]) =>
                    <SummaryCard
                        data={data}
                        key={month}
                        month={month}
                    />
                )}
            </div>
        </>
    )

};

export default SummaryList;