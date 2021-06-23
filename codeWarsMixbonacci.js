function mixbonacci(pattern, length) {
    return [];
}

// var tests = [
//     [[[], 10], []],
//     [[['fib'], 0], []],
//     [[['fib'], 10], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]],
//     [[['pad'], 10], [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]],
//     [[['jac'], 10], [0, 1, 1, 3, 5, 11, 21, 43, 85, 171]],
//     [[['pel'], 10], [0, 1, 2, 5, 12, 29, 70, 169, 408, 985]],
//     [[['tri'], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]],
//     [[['tet'], 10], [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]],
//     [[['fib', 'tet'], 10], [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]],
//     [[['jac', 'jac', 'pel'], 10], [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]],
// ]

// describe("Example Tests", function(){
//     for (var i = 0, l = tests.length; i < l; i++) {
//     var tst = tests[i];
//     var inp = tst[0];
//     var exp = tst[1];
    
//     var pattern = inp[0];
//     var length = inp[1];
    
//     Test.assertSimilar(mixbonacci(pattern, length), exp);
//   }  
// });

// Task
// Mix -nacci sequences using a given pattern p.
// Return the first n elements of the mixed sequence.
// Rules
// The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
// When n is 0 or p is empty return an empty list.
// If n is more than the length of p repeat the pattern.
// Examples
//             0  1  2  3  4  
// ----------+------------------
// fibonacci:| 0, 1, 1, 2, 3 ...
// padovan:  | 1, 0, 0, 1, 0 ...
// pell:     | 0, 1, 2, 5, 12 ...

// pattern = ['fib', 'pad', 'pel']
// n = 6
// #          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
// # result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
// result = [0, 1, 0, 1, 0, 1]

// pattern = ['fib', 'fib', 'pel']
// n = 6
// #          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
// # result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
// result = [0, 1, 0, 1, 2, 1]