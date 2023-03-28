// n = число

function digitalRoot(n) {
    let sum = 0;

    let array = [...n.toString()].map(Number); /*(123) число переделывает в строку ('123'), потому создает массив из этой строки['1', '2', '3'], а потом каждый элемент массива переделывает обратно в число [1, 2, 3] */

    array.forEach(element => {
        sum += element;
    });
// На этом этапе у нас sum уже равняется сумме всех эллементов массива, далее я уже складываю сумму эллементов sum, чтобы в итоге получилось однозначное число.
    do {
        let sum2 = 0;
        let array2 = [...sum    ()].map(Number);
        array2.forEach(element => {
            sum2 += element;
        });
        sum = sum2;
    } while (sum > 9)
    return sum;
  };


