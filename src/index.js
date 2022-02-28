const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let rawArr = expr.split('');

    let binaryArr = [];
    let letterArr = [];
    let subarrSize = 10;
    let letterCode;

    for(let i = 0; i < rawArr.length / subarrSize; i++){
      letterCode = [];
      binaryArr[i] = rawArr.slice(i * subarrSize, (i * subarrSize) + subarrSize);

      for(let j = 0; j < binaryArr[i].length / 2; j++){
        if((binaryArr[i][j * 2] == 0) && (binaryArr[i][(j * 2) + 1] == 0)){
          continue;
        }
        if(binaryArr[i][j * 2] == 1 && binaryArr[i][(j * 2) + 1] == 0){
          letterCode.push('.');          
        }
        if(binaryArr[i][j * 2] == 1 && binaryArr[i][(j * 2) + 1] == 1){
          letterCode.push('-');
        }
      }
      letterArr.push(MORSE_TABLE[letterCode.join('')] || ' ');
    }
    return letterArr.join('');
}

module.exports = {
    decode
}