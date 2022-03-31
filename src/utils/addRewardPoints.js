export const addRewardPoints = (price) => {
    let points = 0;
    
    // If less than $100 was spent, rewarded points is everything over $50.
    if (price > 50 && price <= 100) {
        points = price - 50;

    // If less than or exactly $50 was spent, no points are rewarded.
    } else if (price <= 50) {
        points = 0;
        
    // If more than $100 was spent, 2 points are rewarded for everything over $100, plus 50 points for the first $50 spent.
    } else {
        points = (price - 100) * 2 + 50;
    }
    return points;      
};