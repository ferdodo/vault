import { randomNumber } from "./randomNumber";

export function generateDialCipher(size: number): number[] {
    let cipher = range(size);
    cipher = shuffleArray(cipher);
    return cipher;
}

function range(size: number) {
    const result = [];

    for (let i = 0; i < size; i++) {
        result.push(i);
    }

    return result;
}

function shuffleArray(array: number[]) {
    const result = [];

    while (array.length > 0) {
        const randomIndex = randomNumber(0, array.length);
        const value = array.splice(randomIndex, 1)[0];
        result.push(value);
    }

    return result;
}