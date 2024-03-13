let car = {
    model: "m5",
    manufacturer: "bmw",
    yearOfIssue: "2020",
    averageSpeed: "120"
};
function funcAlert(){
    alert(car.model + " " + car.manufacturer + " " + car.yearOfIssue + " " + car.averageSpeed);
}
funcAlert();
// скорее всего скорость будет передаваться в километрах, поэтому я буду указывтаь километры, для продссчета пройденной дистанции
let time;
function funcTime(distance){
    time = distance/Number(car.averageSpeed);
    let timeAfter;
    if(time / 4 > 0){
        timeAfter = parseInt( time / 4);
    }
    time +=timeAfter;
    return parseInt(time);
}
console.log(funcTime(2500));
function funcYears() {
    let date = new Date();
    //так как точная дата не указана я беру от текущей даты только год
    // let timeOut = date.getFullYear() - Number(car.yearOfIssue);
    let forCar = new Date();
    //поэтому взял как начало года
    let timeOut = date - forCar.setFullYear(Number(car.yearOfIssue),1,1);
    timeOut = parseInt(timeOut / (3600 * 24 * 31 * 12));
    return timeOut;
}
let timeOf = funcYears();
console.log("Количество дней от текущей даты производства нашей машины: " + timeOf);