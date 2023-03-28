// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    let a = [...s1, ...s2];
    let b = a.sort();
    let c = []
    for (let i = 0; i < b.length; i++) {
      const element = b[i];
      if (b[i] !== b[i - 1]){
        c.push(b[i])
      }
    }
    let result = '';
    c.forEach(element => {
      result +=element;
    });
    return result;
  }

  let a = 'ewdfesfesefse';
  let b = [...a].sort();
  console.log(b);



    let set = new Set('wdwad', 'awdawd');
    console.log(set)