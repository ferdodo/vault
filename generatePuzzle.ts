
import { Dial, getBottomSymbol, getLeftSymbol, getRightSymbol, getTopSymbol } from "./dial";
import { generateDialCipher } from "./generateDialCipher";
import { randomNumber } from "./randomNumber";

const SIZE = 4;

export function generatePuzzle(): Dial[] {
    const dial1: Dial = {
        id: 1,
        size: SIZE,
        currentRotation: randomNumber(0, SIZE),
        cipher: generateDialCipher(SIZE)
    };

    const dial2: Dial = {
        id: 2,
        size: SIZE,
        currentRotation: randomNumber(0, SIZE),
        cipher: generateDialCipher(SIZE)
    };

    const dial3: Dial = {
        id: 3,
        size: SIZE,
        currentRotation: randomNumber(0, SIZE),
        cipher: generateDialCipher(SIZE)
    };

    const dial4: Dial = {
        id: 4,
        size: SIZE,
        currentRotation: randomNumber(0, SIZE),
        cipher: generateDialCipher(SIZE)
    };

    while (getRightSymbol(dial1) != getLeftSymbol(dial2)) {
        dial2.cipher = generateDialCipher(SIZE);
    }

    while (getBottomSymbol(dial1) != getTopSymbol(dial3)) {
        dial3.cipher = generateDialCipher(SIZE);
    }

    if (getBottomSymbol(dial2) == getRightSymbol(dial3)) {
        return generatePuzzle();
    }

    while (getBottomSymbol(dial2) != getTopSymbol(dial4) || getRightSymbol(dial3) != getLeftSymbol(dial4)) {
        dial4.cipher = generateDialCipher(SIZE);
    }

    dial1.currentRotation = randomNumber(0, SIZE);
    dial2.currentRotation = randomNumber(0, SIZE);
    dial3.currentRotation = randomNumber(0, SIZE);
    dial4.currentRotation = randomNumber(0, SIZE);

    return [
        dial1,
        dial2,
        dial3,
        dial4
    ];
}