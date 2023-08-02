export interface Dial {
    id: number;
    size: number;
    currentRotation: number;
    cipher: number[];
}

export function calculateRotationOffset(dial: Dial): number {
    return Math.floor((360 * dial.currentRotation) / dial.size);
}

export function getTopSymbol(dial: Dial): number {
    let currentRotation = dial.currentRotation;

    while (currentRotation < 0) {
        currentRotation += dial.size;
    }

    return dial.cipher[currentRotation % dial.size];
}

export function getRightSymbol(dial: Dial): number {
    let currentRotation = dial.currentRotation;

    while (currentRotation < 0) {
        currentRotation += dial.size;
    }

    return dial.cipher[(currentRotation+1) % dial.size];
}

export function getBottomSymbol(dial: Dial): number {
    let currentRotation = dial.currentRotation;

    while (currentRotation < 0) {
        currentRotation += dial.size;
    }

    return dial.cipher[(currentRotation+2) % dial.size];
}

export function getLeftSymbol(dial: Dial): number {
    let currentRotation = dial.currentRotation;

    while (currentRotation < 0) {
        currentRotation += dial.size;
    }

    return dial.cipher[(currentRotation+3) % dial.size];
}