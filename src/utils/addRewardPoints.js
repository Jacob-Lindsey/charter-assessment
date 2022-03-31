export const addRewardPoints = (price) => {
    // If less than $100 was spent, rewarded points is everything over $50.
    const points = price < 100 ? price - 50
                 // If less than $50 was spent, no points are rewarded.
                 : price < 50 ? 0
                 // If more than $100 was spent, 2 points are rewarded for everything over $100, plus 50 points for the first $50 spent.
                 : (price - 100) * 2 + 50;
    return points;      
};