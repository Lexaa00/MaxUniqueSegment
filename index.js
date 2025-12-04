'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Funkcija vraća dužinu najdužeg segmenta bez ponovljenih karaktera
 */
function getNoRepeatSegments(s) {
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var chars = {}; // cuva karaktere koje smo vec videli
        var len = 0;
        for (var j = i; j < s.length; j++) {
            if (chars[s[j]]) {
                break; // vec smo videli karakter, prekidamo
            }
            chars[s[j]] = true;
            len++;
            if (len > max) {
                max = len;
            }
        }
    }
    return max;
}
function main() {
    var s = readLine();
    var result = getNoRepeatSegments(s);
    // ispis u konzolu umjesto u fajl
    console.log(result);
}
