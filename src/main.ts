type Arr = Array<number | string | boolean>

export function isInArray(arr: Arr, ...arg: Arr): boolean {
    return !arr.some(arrItem => !arg.some(argument => arrItem === argument));
}

console.log(isInArray([5, '8', false], 5, '8', false)); // true
console.log(isInArray([5, '8', false], '8', 5, false)); // true
console.log(isInArray([5, '8', false], 5, '12', false)); // false

// ----------------------------------------------

type sumParam = number | string;

export function sumator(a: sumParam, b: sumParam): sumParam | Error {
    if (!Number.isFinite(+a) || !Number.isFinite(+b)) {
        throw new Error('The function accepts only arguments as numbers!');
    }
    if (typeof a === 'boolean' || typeof b === 'boolean') {
        throw new Error('The function accepts only arguments as numbers!');
    }
    return +a + +b;
}

console.log(sumator('10', 20)); // 30
console.log(sumator('10', '20')); // 30
console.log(sumator(10, 20)); // 30

// ----------------------------------------------

export function getUnique(arr: any[]): any[] {
 return Array.from(new Set(arr));
}

console.log(getUnique([1, 'str', false, 'str', {name: 'Alex'}, 1, null])); // [1, 'str', false, '{name: 'Alex'}, null]

// ----------------------------------------------

function isLetter(letter: string) {
    return letter.search(/[a-zAZ]/) !== -1;
}

export function turnWords(str: string): string {
    let arrWords = str.split(' ');

    const arrWordsOnlyLetters = arrWords.map(word => {
        let arrLetters = [];
        let symbols = [];
        let result = [];

        for (let i = 0; i < word.length; i++) {
            if (isLetter(word[i])) {
                arrLetters.push(word[i]);
            } else {
                symbols[i] = word[i];
            }
        }

        arrLetters = arrLetters.reverse();

        for (let i = 0; i < word.length; i++) {
            if (symbols[i]) {
                result.push(symbols[i]);
            } else {
                result.push(arrLetters[0]);
                arrLetters.shift();
            }
        }

        return result.join('');
    });

    return arrWordsOnlyLetters.join(' ');
}

console.log(turnWords('s1tar3t 2 hello')); //  t1rat3s 2 olleh
console.log(turnWords('s1ta$%r3t 2 hel^lo')); // t1ra$%t3s 2 oll^eh
console.log(turnWords('s@tar3t 2   hel5')); // t@rat3s 2   leh5

// s1tar3t 2 hello => t1rat3s 2 olleh
// s1ta$%r3t 2 hel^lo => t3r%$at1s 2 ol^leh
// s@tar3t 2   hel5 => t1rat3s 2   leh5