let money = +prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");
let appData = {
    бюджет: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false,

};
 

  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ' ' );
    let b = prompt('Во сколько обойдется?', ' ' );
      if ( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null &&
         a != '' && b != '' && a.length < 50) {
             console.log('done');
             appData.expenses[a] = b;
      } else { 
             console.log("Date is wrong");
             i--;
      }
}
   


appData.perDay = money / 30;
alert(" Бюджет на день " + appData.perDay);

if (appData.perDay < 100) {
      console.log( "Минимальный доход" ); 
    }  else if (appData.perDay > 100 && appData.perDay < 2000) {
      console.log( "Средний достаток" );
    }  else if (appData.perDay > 2000) {
        console.log( "Высокий достаток" );
    }  else {
        console.log( "Произошла ошибка" );
    }










