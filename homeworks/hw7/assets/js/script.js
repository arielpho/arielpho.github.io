function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let av = sum/3;
    return av;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s`;
}
function getRandomNum(max) {
    return Math.random() * max;
}
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

const avg = averageThreeNumbers(x,y,z);
const sentence = createSentence(avg, `pug`)

console.log(sentence);