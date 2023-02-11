let name = prompt('Введите имя')

console.log(`Добро пожаловать в игру, ${name}!`);

let food = 60
let maxFood = 100
let money = 100
let level = 1
let active = true

console.log(`Ваш ник: ${name}, Вы на: ${level} уровне, Ваша сытость составляет: ${food}/${maxFood}, на счету: ${money}/100`);

console.log(`1. Поесть\n2. Подкачаться\n3. Заработать денег\n4. Выйти из игры `);

let nextMove = +prompt('Выберите действие:')

if (nextMove == 1){
    console.log(`menu:/n1. dumplings\n2. lagman`);
}
if (nextMove == 2){
    console.log(`you're machine`);
}
if (nextMove == 3){
    console.log(`'you're already rich`);
}