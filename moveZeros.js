// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


  function moveZeros(arr) {
    let amountOfNulls = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 0) {
            arr.splice(index, 1);
            amountOfNulls += 1
            index--
        }
    }
    for (i = 0; i < amountOfNulls; i++){
        arr.push(0);
    }
    return arr;
  }







  // var moveZeros = function (arr) {
  //   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  // }