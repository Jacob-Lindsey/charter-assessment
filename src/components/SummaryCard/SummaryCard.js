import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { addRewardPoints } from "../../utils/addRewardPoints";
import styles from "./SummaryCard.module.css";

const SummaryCard = ({ month, data }) => {

    const [ledger, setLedger] = useState({ points: 0, spent: 0 });
    const { spent, points } = ledger;

    useEffect(() => {
        const newLedger = {points: 0, spent: 0};
        for (const key in data) {
            const purchaseTotal = data[key].purchaseTotal;
            newLedger.points += addRewardPoints(purchaseTotal);
            newLedger.spent += purchaseTotal;
        };

        setLedger(newLedger);
    }, [data]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>{month}</div>
                <div className={styles.cardBody}>
                    <div className={styles.dataWrapper}>
                        <small className={styles.label}>Amount spent: </small>
                        <small className={styles.data}>
                            <strong>$</strong>
                            {spent}
                        </small>
                    </div>
                    <div className={styles.dataWrapper}>
                        <small className={styles.label}>Reward points: </small>
                        <small className={styles.data}>{points}</small>
                    </div>
                </div>
                <MdKeyboardArrowDown className={styles.expandIcon} />
            </div>
        </div>
    )

};

export default SummaryCard;