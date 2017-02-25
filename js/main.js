var jokesJv = []
jokesJv[0] = "Нас никому не сбить с пути — нам все равно, куда идти.";
jokesJv[1] = "Труднее всего человеку дается то, что дается не ему.";
jokesJv[2] = "В Китае нет понятия «изменил». Есть понятие «перепутал».";
jokesJv[3] = "Весь день не спишь, всю ночь не ешь, — конечно, устаешь.";
jokesJv[4] = "Жить нужно так, чтобы на социальные сети не хватало времени.";


function Jvanetskiy(){
    var randomJokesJv = Math.floor(Math.random()*(jokesJv.length));
document.getElementById("joke1").innerHTML = jokesJv[randomJokesJv];}


var simplejokes = []
simplejokes[0] = "Программисты — это устройства, преобразующие кофеин в код";
simplejokes[1] = "Хорошо задокументированный баг, автоматически становится фичей!";
simplejokes[2] = "Итерация свойственна человеку, рекурсия божественна.";
simplejokes[3] = "Жить нужно так, чтобы на социальные сети не хватало времени.";


function Sjokes(){
    var randomSimplejokes = Math.floor(Math.random()*(simplejokes.length));
document.getElementById("joke2").innerHTML = simplejokes[randomSimplejokes];}


var jokesKvn = []
jokesKvn[0] = "Санкт-Петербург настолько толерантный город, что там даже карликов называют афроамериканцами.";
jokesKvn[1] = "В рамках программы поддержки автопрома АвтоВАЗу разрешили торговать наркотиками";
jokesKvn[2] = "Спортсмен-дебил пришел на финиш первым, хотя должен был ядро толкнуть";
jokesKvn[3] = "Мальчик играл с огнем..... и выиграл";
jokesKvn[4] = "Игроков сборной России по футболу собирают на АвтоВАЗе";
jokesKvn[5] = "Вчера на концерте «Кривого зеркала» в сцену ударила молния. Ребята, вас уже господь предупреждает!";


function KvnJokes(){
    var randomJokesKvn = Math.floor(Math.random()*(jokesKvn.length));
document.getElementById("joke3").innerHTML = jokesKvn[randomJokesKvn];}


var quote = []
quote[0] = "Самый бедный человек не тот, у кого нет ни дома, ни семьи, ни гроша в кармане, а тот, у кого нет мечты(Сократ)";
quote[1] = "Любое препятствие преодолевается настойчивостью(да Винчи)";
quote[2] = "Для того чтобы получилось, нужно пробовать.";
quote[3] = "Если проблему можно решить за деньги, то это не проблема - это расходы.";
quote[4] = "Не бойтесь расти медленно, бойтесь оставаться неизменными. ";


function Quote(){
    var randomQuote = Math.floor(Math.random()*(quote.length));
document.getElementById("joke4").innerHTML = quote[randomQuote];}


var comedy = []
comedy[0] = "Сочинские таксисты не понимают Формулу-1. Почему 25 отличных машин так гоняют без пассажиров?";
comedy[1] = "На Рязанской протезной фабрике в ночную смену изготавливают левые руки.";
comedy[2] = "Большинство девушек из Playboy думали, что их снимают на паспорт.";
comedy[3] = "«— Не верю!!!» — ответили городские власти в ответ на забастовку актеров московских театров.";
comedy[4] = "В рязанском цирке новая программа: медведи на мотоциклах, медведи чинят мотоциклы и медведи копят деньги на новые мотоциклы.";


function Comedy(){
    var randomComedy = Math.floor(Math.random()*(comedy.length));
document.getElementById("joke5").innerHTML = comedy[randomComedy];}







