// let number = 15

// let arr = []

// for( let i = 0; i < number + 1; i++){
//     if(number % i == 0){
//         arr.push(i)
//     }
// }
// console.log(arr)


// let n = 15

// let num = []

// for(let i = 0; i <= 100; i++){
//     if(i % n == 0){
//         num.push(i)
//     }
// }

// console.log(num)

// const factorial = []
// for(let k = 1; k <= 10; k++){
//     let num = 1
//     for(let j = 1; j <= k; j++){
//         num = num * j
//     }
//     factorial.push(num)
// }

// console.log(factorial);




// let n = 3

// let arr = []

// for(let i = 1; i <= 100; i++){
//     let num = 1
//     for (j = 1; j <= i; j++){
//         num = num * n
//     }
//     arr.push(num)
// }
// console.log(arr)




// let n = 7

// let arr = []

// for(let i = 0; i <= 7; i++){
//     arr.unshift(i)
// }
// console.log(arr);


// let n = 20

// let arr = []

// for(let i = 1; i <= n; i += 3){
//     arr.push(i)
// }

// console.log(arr)



// let arr = [30, 49, 5, 55, 78, 21, 98, -17, -65, 65]

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] / arr[i] == 1 && arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }



// let arr = [-32, -37, -77, 44, 2, -29, -79, 1, -91, 57]

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         console.log(arr[i]);
//     }
// }

// let arr =  [30, -78, -50, 44, -45, -18, 52, 40, -37, -69]
// let arr1 = []
// let i 

// for ( i < arr.length - 1; i >= 0; i--){
//     console.log(arr1.push(arr[i]));
// }
// console.log(arr)


// let arr =  [-100, -93, 4, -69, -99, -5, -44, 20, -98, -51]
// let max = 0

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max)

// let arr = [-30, -73, 6, -2, -14, 77, -65, -25, 50, -3]
// let max = 0
// let min = 0

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log(max)
// console.log(min)


// let arr = [30, 49, 5, 55, 78, 21, 99, -17, -64, 65]
// let max = 0
// let min = 0

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max && arr[i] % 2 == 0){
//         max = arr[i]
//     }
//     if(arr[i] < min && arr[i] % 2 == 0){
//         min = arr[i]
//     }
// }

// console.log(max, min)

// let m = 5
// for (let i = 0; i < m; i++){
//     let array = []
//     for (let j = 0; j < m; j++){
//         array.push(i)
//     }
//     console.log(array)
// }




// let n = 5
// for (let k = 0;k < n; k++){
//     let array1 = []
//     for (let l = 0; l < n; l++){
//         array1.push(k + l)
//     }
//     console.log(array1)
// }

// let o = 5

// for(let y = 0; y < o; y++){
//     let arr2 = []
//     for(let p = 0; p < o; p++){
//         arr2.push((y + p) + 1 % 2)
//     }
//     console.log(arr2)
// }



// let arr =  [30, 49, 5, 55, 78, 21, 99, -17, -64, 65]

// let arr1 = []
// for(let i = 0; i < arr.length; i += 2){
//     arr1.push(arr[i])
// }
// console.log(arr1)
// console.log(arr.join(' - '))
// console.log(arr)

// console.log(arr.slice(3, n))

// console.log(arr.slice(n, -1));
// arr.reverse()

// console.log(arr)
// console.log(arr.slice(arr.length / 2))

// for(let i = 0; i < arr.length; i++){
// if(arr.length > 2){
//    let a = arr.splice(0, 2)
//    console.log(a)
// }else{
//     console.log("error");
// }
// }


// let m = [1, 2, 3, 1, 2, 3]
// for(let i = 0; i < m.length; i++){
//     console.log(m[i]);
// }


// task 1

// let m = []
// for(let i = 0; i <= 8; i++){
//     m.push(+prompt('please, enter the number'))
// }
// console.log(m);
// if(m.includes(0)){
//     console.log(true)
// }else{
//     console.log(false)
// }

// task 2

// let arr = []

// for(let i = 0; i < 7; i++){
//     arr.push(prompt())
// }
// console.log(arr);
// let a = arr.slice(0, 3)
// let b = arr.slice(-3)

// console.log(a,b)

// let arr = [30, 49, 5, 55, 78, 21, 99, 17]
// for(let i = 0; i < 7; i++){
//     arr.push(prompt())
// }
// let a = []
// console.log(arr)

// for (let i = 0; i < arr.length;){
//     a = arr.splice(0, 2)
//     a.reverse()
//     console.log(a)
// }

// let input = prompt('input number: ')
// if (input.isInteger)


// function greeting(n, m){
//     m = prompt('')
//     for(let i = 0; i < n; i++){
//         console.log(m)
//     }
// }
// greeting(5, m)

// let a = prompt()
// function check(a){
//     if (a % 2 == 0){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(check(a))


// function check(a, b, c){
//     if (c == '-'){
//         return a - b
//     }else if( c == '+'){
//         return a + b
//     }else if(c == '*'){
//         return a * b
//     }else if(c == '/'){
//         return a / b
//     }
// }

// console.log(check(5, 4, '-'))


let numbers = [1, 3, 5, 8, 13, 21, 34]

for (let i = 0; i < numbers.length; i++){
    
    console.log(numbers[i] ** 2);
}
