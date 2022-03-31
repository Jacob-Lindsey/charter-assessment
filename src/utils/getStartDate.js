// Returns a new date object at the specified month, with the day and time set to 00:00
export const getStartDate = (timespan) => {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - Math.max(timespan, 1) + 1);
    startDate.setDate(1);
    startDate.setHours(0,0,0,0);
    return startDate;
};