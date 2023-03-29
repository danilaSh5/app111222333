function topThreeWords(text) {
  let mainArray = text.toLowerCase();
  mainArray = mainArray.split("");
  let correctLettersAndSymnols = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "'",
  ];
  let arrayOfCorrectSymbols = [[]];
  let amountOFArraysInArrayOfCorrectSymbols = 0;
  mainArray.forEach((element) => {
    if (correctLettersAndSymnols.includes(element)) {
      arrayOfCorrectSymbols[amountOFArraysInArrayOfCorrectSymbols].push(
        element
      );
    } else {
      arrayOfCorrectSymbols.push([]);
      amountOFArraysInArrayOfCorrectSymbols++;
    }
  });
  arrayOfCorrectSymbols = arrayOfCorrectSymbols.filter(
    (element) => element.length > 0
  );
  let mainObjeckt =[];
  while (arrayOfCorrectSymbols.length >= 0){
    arrayOfCorrectSymbols.forEach(element => {
      mainObjeckt.push(arrayOfCorrectSymbols.filter((item, index) => {
        if (item === element){
          arrayOfCorrectSymbols.slice(index,1);
          return true
        }
      }))
      })
    };
    console.log(mainObjeckt)
  }





  // let mainObjeckt = {};
  // for (let i = 0; i < arrayOfCorrectSymbols.length; i++) {
  //   mainObjeckt[arrayOfCorrectSymbols[i]] = 0;
  //   arrayOfCorrectSymbols.forEach(item => {
  // //     if (item === arrayOfCorrectSymbols[i]){mainObjeckt[arrayOfCorrectSymbols[i]]++}
  //   });
    
  }

}





  let mainObjeckt2_0 = {};
  let mainObjeckt3_0 = {};

  console.log(arrayOfCorrectSymbols);
  //   for (let i = 0; i < arrayOfCorrectSymbols.length; i++) {
  //       let b = (Array.from(arrayOfCorrectSymbols.entries()).filter(item => item[1] === arrayOfCorrectSymbols[i]))
  //       console.log(b)
  //     mainObjeckt2_0[(arrayOfCorrectSymbols[i])] = b;
  //   }
  for (let i = 0; i < arrayOfCorrectSymbols.length; i++) {
    mainObjeckt3_0[arrayOfCorrectSymbols[i]] = arrayOfCorrectSymbols.filter(
      (item) => item == arrayOfCorrectSymbols[i]
    );
  }

  console.log(mainObjeckt3_0);

  //   let sortable = [];
  // for (var vehicle in mainObjeckt2_0) {
  //     sortable.push([vehicle, mainObjeckt2_0[vehicle]]);
  // }

  // sortable.sort(function(a, b) {
  //     return a[1] - b[1];
  // });
  // sortable.sort(function (a, b) {return b[1] - a[1]});

  // console.log(mainObjeckt2_0)
  // console.log(sortable)
}
let a = [
  ["a", "w", "d", "w"],
  ["w", "a", "d", "w", "a", "d"],
  ["a", "d", "w", "d", "a", "w"],
  ["d"],
  ["d"],
  ["d"],
  ["d"],
  ["d"],
  ["d"],
  ["a", "d"],
  ["d"],
  ["s"],
  ["s"],
  ["t", "t"],
  ["t", "t"],
  ["t", "t"][("t", "t")],
  ["a"],
  ["e", "e"],
  ["e", "e"],
];

let a = {};
let b = 'asd';
a[b]+= 1;