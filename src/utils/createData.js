export const createData = (startDate, amount) => {
    // Minimum and maximum purchase prices
    const minPurchase = 25;
    const maxPurchase = 300;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const endDate = new Date();
    const startTime = startDate.getTime();
    const elapsedTime = endDate.getTime() - startTime;


    console.log(startTime + Math.round(Math.random() * elapsedTime));
    // Create an array of objects with a given length containing a pseudo-randomized date, the 'month' string, and the purchase amount
    // Date timestamp is included for sorting purposes
    const data = Array.from({ length: amount }, () => startTime + Math.round(Math.random() * elapsedTime))
        .sort((a,b) => a - b)
        .map((date) => ({
            date,
            month: months[new Date(date).getMonth()],
            purchaseTotal: minPurchase + Math.random() * (maxPurchase - minPurchase) | 0
        }))

    return data;
};