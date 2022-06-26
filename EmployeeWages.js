{
    const IS_ABSENT=0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck==IS_ABSENT)
    {
        console.log("EMPLOYEE IS ABSENT.");
    }
    else
    {
        console.log("EMPLOYEE IS PRESENT.");
    }
}
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;
        }
    }
    function calcDailyWage(empHrs)
    {
        return empHrs * WAGE_PER_HOUR;
    }
    let empHrs=0;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr=new Array();
   while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);

    let totEmpWage=0;
    function sum(dailyWage)
    {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("\nTotal Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + totEmpWage);

    function totalWages(totalWage,dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages,0));

}