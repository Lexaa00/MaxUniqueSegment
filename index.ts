'use strict';
import readline from 'readline';

/*
 * Funkcija vraća dužinu najdužeg segmenta bez ponovljenih karaktera
 */
function getNoRepeatSegments(s: string): number {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const chars: Record<string, boolean> = {}; // čuva karaktere koje smo već videli
        let len = 0;

        for (let j = i; j < s.length; j++) {
            if (chars[s[j]]) {
                break; // već smo videli karakter, prekidamo
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

// Kreiramo interfejs za unos sa konzole
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tražimo korisnika da unese string
rl.question('', (input: string) => {
    const result = getNoRepeatSegments(input.trim());
    console.log(result);
    rl.close();
});
