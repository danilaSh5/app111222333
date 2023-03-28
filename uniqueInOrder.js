// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
  var uniqueInOrder=function(iterable){
    let array = [...iterable];
    let mainArray = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (array[i] !== array[i - 1]){
        mainArray.push(array[i])
      }
    }
    return(mainArray);
    }