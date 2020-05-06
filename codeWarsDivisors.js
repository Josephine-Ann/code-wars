function divisors(i) {      
    let pi = 2
    let i2 = 1
    const i3 = i
    let a = []
    let b = []
    let c = []
    while (i/pi !== 1) {
       if (Number.isInteger(i/pi)) {
           b.push(pi)
           i2 *= pi 
           i = i/pi 
           pi !== 2 ? pi = 2: pi++
           a.push(i2)
           a.push(i)
       } else {
           pi++
       }
   }
     let x = (a) => a.filter((v,i) => a.indexOf(v) === i)
      b.forEach((num) => {
               let div = i3/num
               c.push(div)	
             })
        const result = x(a.concat(b).concat(c))
        result.sort(function(a, b){return a-b});  
        return result.length > 0 ? result : `${i3} is prime`
     };

console.log(divisors(9))

// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// console.log(x(names)); 
//  console.log(divisors(12))

// console.log(Number.isInteger(5.2))
// console.log(Number.isInteger(5))

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// If you divide a number by 2 or 3 and it's still whole, it's not prime
// how do you test if something is whole in JS? 
// make it whole and see if it has changed 

// let b = []
// let i3 = i

// let intersection = b.filter(x => !a.includes(x));
// b.push(i3/intersection)
// return x(a.concat(b))