const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const splitString = (str, length) => str.match(new RegExp(`.{1,${length}}`, 'g'));

const removeRedundantZeros = (str) => parseInt(str, 2).toString(2);

const convertBinToMorse = (binaryStr) => splitString(binaryStr, 2).map(item => +item === 10 ? '.' : +item === 11 ? '-' : ' ').join('');

const convertMorseToSymbol = (morseStr) => MORSE_TABLE[morseStr] || ' ';

function decode(expr) {
    return splitString(expr, 10).
        map(item => removeRedundantZeros(item)).
        map(item => convertBinToMorse(item)).
        map(item => convertMorseToSymbol(item)).join('');
}

module.exports = {
    decode
}