'use strict';
let money = prompt("Ваш доход?");
let timenow = prompt("Введите дату в формате YYYY-MM-DD");

let expen = prompt("Введите обязательную статью расходов в этом месяце");
let howmuch = prompt("Во сколько обойдется?");

let expenses = { 
    p1: expen,
    p2: howmuch,
};
let income = [];
123
let appData = {
    budjet: money,  //бюджет (передаем сюда переменную из п.2)
    time:  timenow, // данные времени - timeData (передаем сюда переменную из п.2)
    ex: expenses,
    optionalExpenses: "",
    savings: false

};
alert((expenses.p1 * expenses.p2) - money);