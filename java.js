// Q1
function filterOutFalsy (value1, value2) {
    if (!value1) {
     return value1
 }
 return value2
 }
 console. log(filterOutFalsy(0, 500))
 console. log(filterOutFalsy(false, 100))
 console. log(filterOutFalsy(true,'Dog'))
//  Best practice
 function filterOutFalsy (value1, value2) {
     return !value1 ? value1 : value2
 }
 console. log(filterOutFalsy(0, 500))
 console. log(filterOutFalsy(false, 100))
 console. log(filterOutFalsy(true,'Dog'))
 
//  Q2
 function arrLength (arr) {
     return arr.length
 }
  
 console. log(arrLength([1, 2, 3]))
 console. log(arrLength([5, 0, -4, 1]))
 console. log(arrLength([]))
 
//  Q3
 function lastElem (arr) {
     return arr[arr.length-1]
 }
  
 console. log(lastElem([3, 2, 0, 6, 2]))
 console. log(lastElem(['dog', `cat`, `ball`]))
 console. log(lastElem([null, 5, false]))
 
//  Q4
 function arrSum (arr) {
     let sum = 0
     for (let i = 0 ; i < arr.length ; i++) {
         sum = sum + arr[i]
     }
     return sum
 }
  
 console. log(arrSum([2, 2, 2]))
 
//  Q5
 function progressiveSum (arr) {
     input = 0
     for (let i = 1 ; i <= arr ; i++) {
         input = input + i
     }
     return input
 }
  
 console. log (progressiveSum(3))
 console. log (progressiveSum(4))
 console. log (progressiveSum(600))
 
//  Q6
 function calcTime (seconds) {
     let timeInMinutes = Math.floor(seconds/ 60)
     let timeInSeconds = seconds % 60
  
     if (timeInMinutes.toString().length === 1 ) {
         timeInMinutes = '0' + timeInMinutes
     }
     if (timeInSeconds.toString().length === 1) {
            timeInSeconds = '0' + timeInSeconds}
            return timeInMinutes + ':' + timeInSeconds
         }
  
  
 console.log(calcTime(66))
 console.log(calcTime(50))
 console.log(calcTime(300))
 
//  Q7
 function getMax (num) {
     let max = num[0]
     for (let i = 0 ; i < num.length ; i++) {
         if (num[i] > max) {
             max = num[i]
         }
     }
     return max
 }
 console. log(getMax([5, 100, 0]))
 console. log(getMax([12, 10, -20]))
 console. log(getMax([-300, -100, -200]))
 
 // Q8: Incrementing For Loop
 function reverseString (str) {
     let reversedString = ''
     for (let i = 0 ; i < str.length ; i++) {
         reversedString = str[i] + reverseString
     }
     return reversedString
 }
  
 console. log(reverseString('abc'))
 console. log(reverseString('David'))
 console. log(reverseString('This is cool'))
  
 // Decrementing for Loop
 function reverseString (str) {
     let reversedString = ''
     for (let i = str.length - 1 ; i >= 0 ; i--) {
         reversedString = reversedString + str[i]
     }
     return reversedString
 }
  
 console. log(reverseString('abc'))
 console. log(reverseString('David'))
 console. log(reverseString('This is cool'))
  
  
 // array reverse property
 function reverseString (str) {
     return str.split('').reverse().join('')
 }
  
 console. log(reverseString('abc'))
 console. log(reverseString('David'))
 console. log(reverseString('This is cool'))
 
 // Q9: For loop
 function convertToZero (arr) {
     let newArr = []
     for (let i = 0 ; i < arr.length ; i++) {
         newArr[i] = 0
     }
     return newArr
 }
  
 console. log(convertToZero([5, 100, 0]))
 console. log(convertToZero([12]))
 console. log(convertToZero([1, 2, 3, 4, 5]))
  
 // Array.fill
 function convertToZero (arr) {
     return new Array(arr.length).fill(0)
 }
  
 console. log(convertToZero([5, 100, 0]))
 console. log(convertToZero([12]))
 console. log(convertToZero([1, 2, 3, 4, 5]))
  
 // Array.map
 function convertToZero (arr) {
     return arr.map((arr) => 0)
 }
  
 console. log(convertToZero([5, 100, 0]))
 console. log(convertToZero([12]))
 console. log(convertToZero([1, 2, 3, 4, 5]))
 
 //Q10:  For loop
 function removeApples (arr) {
     let noApples = []
     for (let i = 0 ; i < arr.length ; i++) {
         if (arr[i] !== 'Apple') {
             noApples.push(arr[i])
             }
         }
         return noApples
     }
  
  
 console. log(removeApples([`Banana`,`Apple`,`Orange`,`Apple`]))
 console. log(removeApples([`Tomato`,`Orange`,`Banana`]))
 console. log(removeApples([`Banana`,`Orange`,`Apple`]))
  
 // Array.filter
 function removeApples (arr) {
     return arr.filter(Element => Element !== 'Apple')
  
 }
  
 console. log(removeApples([`Banana`,`Apple`,`Orange`,`Apple`]))
 console. log(removeApples([`Tomato`,`Orange`,`Banana`]))
 console. log(removeApples([`Banana`,`Orange`,`Apple`]))
 
 //Q11: for Loop
 function filterOutFalsy (arr) {
     let truthyArr = []
     for (let i =0; i < arr.length; i++) {
         if (!!arr[i] === true) {
             truthyArr.push(arr[i])
         }
     }
     return truthyArr
 }
  
 console. log(filterOutFalsy(['', [], null, undefined, '0']))
 console. log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
 console. log(filterOutFalsy(['Banana', 'Orange', 'Apple']))
  
 // Array filter
 function filterOutFalsy (arr) {
     return arr.filter(elem => !!elem === true)
 }
  
 console. log(filterOutFalsy(['', [], null, undefined, '0']))
 console. log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
 console. log(filterOutFalsy(['Banana', 'Orange', 'Apple']))
 
//  Q12
 function convertToBoolean (arr) {
     return arr.map(elem => !!elem)
 }
  
 console. log(convertToBoolean([500, 0, 'David', '', []]))
 