// function stray(numbers) {
//     return 0;
// }

function stray(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    if (arr[0] !== arr[1]) return arr[0]
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            return arr[j]
        }
    }
    return 0
}

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
console.log(stray([8, 1, 1, 1, 1, 1, 1]))

