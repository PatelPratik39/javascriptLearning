function sayHello(name){
    console.log(`Hello ${ name }!`)
};
sayHello('Pratik')

////////
function sayHello1(name1){
    return `Hell0000 ${name1}`;
}
const message = sayHello1('Mowgleeee');
console.log(message);

/*  ------ */

// const value = prompt(' Hello Enter the values ');
// console.log(typeof value);
// console.log(value);

// Math
function rnd(){
    let x = Math.random() * 2;
    console.log(x);
    x = Math.ceil(x);            //Math.ceil() method uses to round up the number
    return x;
}
console.log(rnd());

// heads and Tail
function headsTails() {
    const x = Math.round(Math.random());
    if(x === 0){
        return 'heads';
    } else {
        return 'tails';
    }
}

const guess = prompt('Guess Heads aor Tails');
const result = headsTails();
// var randomNumber = rand(100);
// function rand(limit) {
//   return Math.floor(Math.random() * limit);
// }
