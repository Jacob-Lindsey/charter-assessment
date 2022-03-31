import { createData } from "./createData";
import { formatTransactionData } from "./formatTransactionData";

// Returns a list of transactions based on randomly generated purchase data, ran asynchronously to emulate a GET request.
export const fetchTransactions = async (date, amount) => {
    const data = createData(date, amount);
    return formatTransactionData(data);  
};
