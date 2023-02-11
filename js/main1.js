


let money = 100
let food = 60
let maxFood = 100
let level = 1
let active = true


console.log("Добро пожаловать в игру! Для начала, назовите свою жабу.")
let playerName = prompt("Выберите имя для жабы")

//console.log(`Имя: ${playerName}`)

function randomRange(min, max){ // генерация случайного целого числа между двумя числами
    return Math.floor(Math.random() * (max-min+1) + min)
}

function max(a ,b){ // выбор максимального числа среди двух
    if (a > b) return a
    else return b
}

function min(a ,b){ // выбор минимального числа среди двух
    if (a < b) return a
    else return b
}



function travelOption(){ // опция путешесткий - трата голода и заработок монет
    if (food*2 >= maxFood){
        let earnedMoney = randomRange(40, 80) * level // генерируем случайное число монет, которое заработает игрок
        let wastedFood = randomRange(1, Math.floor(maxFood / 3)) // генерируем случайное число, на которое игрок проголодается
        let replicArray = [ // массив из способов заработка, выбирается случайно и влияет только на реплику.
            "Ваша жаба долго скиталась по миру в роли бродячего музыканта, и наконец вернулась домой.",
            "Ваша жаба сходила в казино. Спустя череду побед и проигрышей, она вышла в плюс!", 
            "Ваша жаба устроилась на работу в Нью Йорке, но городская жизнь её утомила и она вернулась домой."
        ]
        let scoreReplic = `Жаба заработала ${earnedMoney} монет, и проголодалась на ${wastedFood} единиц голода!` // генерация первой части реплики
        food -= wastedFood // отнимаем от переменной голода потраченную еду
        money += earnedMoney // прибавляем к переменной монет заработанные деньги 
        console.log(replicArray[randomRange(0, 2)], scoreReplic) // генерация второй части реплики
    } else {
        console.log("Жаба слишком голодна для путешествий! Сначала надо пообедать.") // вывод финальной реплики
    }
}

function foodOption(){ // опция еды - восполнение голода в зависимости от денег игрока
    if (money > 0){
        let foodArray = [ // массив доступной еды, выбирается случайно и влияет только на реплику.
            "сочный стейк",
            "суп и салат",
            "спагетти",
            "лагман",
            "пельмени"
        ]
        hunger = min(maxFood - food, money) // вычисляет голод, который может восполнить игрок. Если у игрока недостаточно монет для восполнения всего голода, восполняется лишь часть, забирая все монеты
        price = hunger // стоимость еды равна числу восполнения голода
        money -= price // отнимаем из переменной денег стоимость еды
        food += hunger

        if (food == maxFood){
            console.log(`Ваша жаба заказала ${foodArray[randomRange(0, 4)]} по цене ${price} монет и наелась досыта! Ваша шкала голода восполнена до предела. Жабе не терпится заняться спортом!`)
        }
        else{
            console.log(`Ваша жаба заказала ${foodArray[randomRange(0, 4)]} по цене ${price} монет и наелась на ${hunger} единиц голода.`)
        }
    }
    else{
        console.log("У вас совсем не осталось денег!")
    }
}

function gymOption(){ // опция прокачки уровня - повышение уровня на 1, трата голода и увеличение максимального голода.
    if (food == maxFood) {
        level += 1 // увеличиваем уровень на +1
        maxFood += 100 // увеличиваем максимальный голод на +100
        food = 0 // сбрасываем голод до 0
        console.log(`Жаба пошла в качалку, усердно тягала железо и теперь ее не узнать! Ваша достигла уровня ${level}, но теперь ей нужно больше еды чтобы насытиться!`)
    }
    else{
        console.log("У жабы недостаточно денег! Сначала поищите их где-нибудь")
    }
}

function exitOption(){ // опция выхода из игры. Прерывает бесконечный цикл
    console.log("Выход из игры..")
    active = false // переменная active отвечает за выполнение главного цикла. При значении false цикл прерывается
}



while (active) { // бесконечный цикл с выбором опции
    console.log(`Жаба ${playerName} \nбаланс: ${money}, сытость: ${food}/${maxFood}, уровень: ${level}`) // вывод статистики героя - его баланс, голод и уровень

    // строка с предоставлением выбора
    console.log(`
    Что сделает ваша жаба? Напишите цифру в окно ввода\n
    1 - пойти в путешествие\n
    2 - заказать еду\n
    3 - сходить в качалку\n
    4 - выйти из игры\n`
    )

    // выбор опции в зависимости от ввода пользователя
    let userAnswer = parseInt(prompt("Выберите действие"))
    if (userAnswer == 1) travelOption()
    if (userAnswer == 2) foodOption()
    if (userAnswer == 3) gymOption()
    if (userAnswer == 4) exitOption()
}
