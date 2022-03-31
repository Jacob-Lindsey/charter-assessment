import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { addRewardPoints } from "../../utils/addRewardPoints";
import styles from "./SummaryCard.module.css";

const SummaryCard = ({ month, data }) => {

    const [expanded, setExpanded] = useState(false);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [ledger, setLedger] = useState({ points: 0, spent: 0 });
    const { spent, points } = ledger;

    useEffect(() => {
        const newPurchaseHistory = [];
        const newLedger = {points: 0, spent: 0};
        for (const key in data) {
            const purchaseTotal = data[key].purchaseTotal;
            newLedger.points += addRewardPoints(purchaseTotal);
            newLedger.spent += purchaseTotal;
            newPurchaseHistory.push({spent: purchaseTotal, pointsTotal: newLedger.points});
        };
        setPurchaseHistory(newPurchaseHistory);
        setLedger(newLedger);
    }, [data]);

    return (
        <div className={`${styles.container} ${expanded ? styles.tall : null}`}>
            <div 
                className={styles.card}
                onClick={() => setExpanded(!expanded)}
            >
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
            {
                expanded ? 
                    <>
                        <div className={styles.history}>
                            <span className={styles.historyLabel}>Price</span>
                            <span className={styles.historyLabel}>Total Points</span>
                        </div>
                        { 
                            purchaseHistory.map((purchase, index) => (
                                <div className={styles.history} key={index}>
                                    <span className={styles.historySpent}>${purchase.spent}</span>
                                    <span className={styles.historyPoints}>{purchase.pointsTotal}</span>
                                </div>
                            ))
                        }
                    </>
                :
                null
            }
        </div>
    )
};

export default SummaryCard;