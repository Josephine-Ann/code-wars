function findUniq(arr) {
  let f
  arr.forEach((element, index) => {
    if ( element !== arr[index +1] && element !== arr[index-1]) {
      f = element
    }
    });
    return f
}

console.log(findUniq([0, 1, 0]))