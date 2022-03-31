const dataReducer = (accumulator, { month, ...transaction }) => {
    const arr = accumulator[month] || [];
    arr.push(transaction);
    accumulator[month] = arr;
    return accumulator;
};

export const formatTransactionData = (tx) => {
    const data = Array.from(Object.entries(tx.reduce(dataReducer, {})));
    return data;
};