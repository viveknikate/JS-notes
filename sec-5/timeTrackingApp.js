const data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const data2 = [7.5, 8, 6.5, 0, 8.5, 5, 0];

// function should return
// 1. total hours worked
// 2. average daily hours worked
// 3. the day with most hours worked
// 4. no.of days worked
// 5. whether the week was full-time (worked 35 hours or more)

const timeTracker = dataArr => {
     if (!Array.isArray(dataArr) || dataArr.length !== 7) return "Invalid data";
     let totalHours = 0, avgDailyHours = 0, dayWithMostHours = 0, noOfDays = 0, isFullTime = false;
     for (let i = 0; i < dataArr.length; i++) {
          totalHours += dataArr[i];
          if (dayWithMostHours < dataArr[i])
               dayWithMostHours = i;
          if (dataArr[i] > 0)
               noOfDays++;
     }
     avgDailyHours = totalHours / dataArr.length;
     // if (totalHours >= 35)
     //      isFullTime = true;
     return {
          totalHours,
          avgDailyHours,
          dayWithMostHours,
          noOfDays,
          isFullTime: totalHours >= 35
     };
}

console.log(timeTracker(data1));
console.log(timeTracker(data2));
console.log(timeTracker("vivek"));
