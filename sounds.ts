const click1 = new Audio("sounds/click1.mp3");
const click2 = new Audio("sounds/click2.mp3");
const click3 = new Audio("sounds/click3.mp3");
const click4 = new Audio("sounds/click4.mp3");

const TIMEOUT = 500;

export function playClick1() {
    setTimeout(() => click1.play(), TIMEOUT);
}

export function playClick2() {
    setTimeout(() => click1.play(), TIMEOUT);
    setTimeout(() => click2.play(), TIMEOUT);
}

export function playClick3() {
    setTimeout(() => click1.play(), TIMEOUT);
    setTimeout(() => click2.play(), TIMEOUT);
    setTimeout(() => click3.play(), TIMEOUT);
}

export function playClick4() {
    setTimeout(() => click1.play(), TIMEOUT);
    setTimeout(() => click2.play(), TIMEOUT);
    setTimeout(() => click3.play(), TIMEOUT);
    setTimeout(() => click4.play(), TIMEOUT);
}