function solution (number) {
    let numberInString = number.toString();

    let result = '';

    let hundredRomanNumbers = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let tenRomanNumbers = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let thousandRomanNumbers = ['M','MM', 'MMM'];
    let oneRomanNumbers = ["I","II","III","IV","V","VI","VII","VIII","IX"];

    if (numberInString.length === 4){
        if(numberInString[0] !== 0){result += thousandRomanNumbers[numberInString[0] - 1]}
        if (numberInString[1] !== 0){result += hundredRomanNumbers[numberInString[1] - 1]}
        if (numberInString[2] !== 0){result += tenRomanNumbers[numberInString[2] - 1]}
        if (numberInString[3] !== 0){result += oneRomanNumbers[numberInString[3] - 1]};
    }
    if (numberInString.length === 3){
        if(numberInString[0] !== 0){result += hundredRomanNumbers[numberInString[0] - 1]}
        if (numberInString[1] !== 0){result += tenRomanNumbers[numberInString[1] - 1]}
        if (numberInString[2] !== 0){result += oneRomanNumbers[numberInString[2] - 1]}
    }
    if (numberInString.length === 2){
        if(numberInString[0] !== 0){result += tenRomanNumbers[numberInString[0] - 1]}
        if (numberInString[1] !== 0){result += oneRomanNumbers[numberInString[1] - 1]};
    }
    if (numberInString.length === 1){
        if(numberInString[0] !== 0){result += oneRomanNumbers[numberInString[0] - 1]};
    }
    result = result.replace(/undefined/g,'')
    return result;
}
// не знаю как избавиться от возврата undefined, поэтому в конце просто вырезал все подобные слова из строки))))