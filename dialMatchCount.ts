import { dials$, getDial } from "./dials";
import { getBottomSymbol, getLeftSymbol, getRightSymbol, getTopSymbol } from "./dial";
import { Observable, map } from "rxjs";

export const dialMatchCount$: Observable<number> = dials$.pipe(
    map(function() {
        const dial1 = getDial(1);
        const dial2 = getDial(2);
        const dial3 = getDial(3);
        const dial4 = getDial(4);

        let matches = 0;

        if (getRightSymbol(dial1) == getLeftSymbol(dial2)) {
            console.log("top match")
            matches++;
        }

        if (getBottomSymbol(dial1) == getTopSymbol(dial3)) {
            console.log("left match")
            matches++;
        }

        if (getBottomSymbol(dial2) == getTopSymbol(dial4)) {
            console.log("right match")
            matches++;
        }

        if (getRightSymbol(dial3) == getLeftSymbol(dial4)) {
            console.log("bottom match")
            matches++;
        }

        return matches;
    })
);