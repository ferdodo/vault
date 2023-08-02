import { Dial } from "./dial";
import { Observable, Subject, map } from "rxjs";
import { generatePuzzle } from "./generatePuzzle";

const dials: Dial[] = generatePuzzle();

export function getDial(id: number): Dial {
    const dial = dials.find(d => d.id == id);

    if (!dial) {
        throw new Error(`Dial ${id} not found !`);
    }

    return dial;
}

const _dials$ = new Subject<Dial[]>();
export const dials$ = _dials$.asObservable();

function setDial(id: number, dial: Dial) {
    const index = dials.findIndex(d => d.id == id);

    if (index === -1) {
        throw new Error(`Dial ${id} not found !`);
    }

    dials[index] = dial;
    _dials$.next(dials);
}

export function turnDialRight(id: number) {
    const dial = getDial(id);

    setDial(id, {
        ...dial,
        currentRotation: (dial.currentRotation + 1)
    });
}

export function turnDialLeft(id: number) {
    const dial = getDial(id);

    setDial(id, {
        ...dial,
        currentRotation: (dial.currentRotation - 1)
    });
}

export function observeDial(id: number): Observable<Dial> {
    return dials$.pipe(map(() => getDial(id)));
}