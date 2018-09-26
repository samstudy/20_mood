
var jvanetskiyjoke = [
"Нас  никому не сбить с пути — нам все равно, куда идти.",
"Труднее всего человеку дается то, что дается не ему.",
"В Китае нет понятия «изменил». Есть понятие «перепутал».",
"Весь день не спишь, всю ночь не ешь, — конечно, устаешь.",
"Жить нужно так, чтобы на социальные сети не хватало времени."]

$( "#InsertJvanetskiyJoke" ).click(function() {
    var randomJokes = Math.floor(Math.random()*(5));
    $("#js-joke1").text(jvanetskiyjoke[randomJokes]);
});


var simplejokes = [
"Программисты — это устройства, преобразующие кофеин в код",
"Хорошо задокументированный баг, автоматически становится фичей!",
"Итерация свойственна человеку, рекурсия божественна.",
"Жить нужно так, чтобы на социальные сети не хватало времени."]


$( "#InsertSimpleJoke" ).click(function() {
    var randomJokes = Math.floor(Math.random()*(5));
    $("#js-joke2").text(simplejokes[randomJokes]);
});



var jokesKvn = [
"Санкт-Петербург настолько толерантный город, что там даже карликов называют афроамериканцами.",
"В рамках программы поддержки автопрома АвтоВАЗу разрешили торговать наркотиками",
"Спортсмен-дебил пришел на финиш первым, хотя должен был ядро толкнуть",
"Мальчик играл с огнем..... и выиграл",
"Игроков сборной России по футболу собирают на АвтоВАЗе",
"Вчера на концерте «Кривого зеркала» в сцену ударила молния. Ребята, вас уже господь предупреждает!"]


$( "#InsertKvnJokes" ).click(function() {
    var randomJokes = Math.floor(Math.random()*(5));
    $("#js-joke3").text(jokesKvn[randomJokes]);
});



var quote = [
"Самый бедный человек не тот, у кого нет ни дома, ни семьи,ни гроша в кармане, а тот, у кого нет мечты(Сократ)",
"Любое препятствие преодолевается настойчивостью(да Винчи)",
"Для того чтобы получилось, нужно пробовать.",
"Если проблему можно решить за деньги, то это не проблема - это расходы.",
"Не бойтесь расти медленно, бойтесь оставаться неизменными."]


$( "#InsertQuote" ).click(function() {
    var randomJokes = Math.floor(Math.random()*(5));
    $("#js-joke4").text(quote[randomJokes]);
});


var comedy = [
"Сочинские таксисты не понимают Формулу-1. Почему 25 отличных машин так гоняют без пассажиров?",
"На Рязанской протезной фабрике в ночную смену изготавливают левые руки.",
"Большинство девушек из Playboy думали, что их снимают на паспорт.",
"«— Не верю!!!» — ответили городские власти в ответ на забастовку актеров московских театров.",
"В рязанском цирке новая программа: медведи на мотоциклах, медведи чинят мотоциклы и медведи копят деньги на новые мотоциклы."]


  $( "#InsertComedyJoke" ).click(function() {
     var randomJokes = Math.floor(Math.random()*(5));
    $("#js-joke5").text(comedy[randomJokes]);
});


function myFunction() {
    var userLang = navigator.language || navigator.userLanguage; 
	if (userLang == "ru-RU") {
	    var conf_msg = confirm("Сайт содержит Flash-контент. Хотите узнать, как включить плагин Flash");
		}
	else if (userLang == "en-US"){
	    var conf_msg = confirm("Do you want to know how enable Flush plugin	");
	}
    if (conf_msg == true) {
        window.location.assign('https://support.google.com/chrome/answer/142064')
		//window.open('https://support.google.com/chrome/answer/142064')
    } 
}
function checkFlashSupport() {
  var hasFlash = false;
  
  try {
    hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
  } catch(exception) {
      hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
  }
  
  return hasFlash;
}
checkFlash=checkFlashSupport()
if (checkFlash ==false){
	setTimeout(myFunction, 5000)
}



 