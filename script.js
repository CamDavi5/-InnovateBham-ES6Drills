/*let favMovie = (name = "Tommy Wiseau", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}!`);
favMovie();*/

/*getFirstName = (fullname) => {
    let nameArr = fullname.split(" ");
    return nameArr[0];
}
let getFirstNameConcise = (fullname) => fullname.split(" ")[0];
console.log(getFirstName("Cameron Davis"));
console.log(getFirstNameConcise("Cameron Davis"));*/

/*let doMath = (x, y) => ({
    exponent: x+"^"+y,
    product: Math.pow(x, y)
})
let mathObj = doMath(2,8);
console.log(`${mathObj.exponent}, ${mathObj.product}`);*/

/*function aboutMe (name, location, favFood) {
    console.log(`${name}, ${location}, ${favFood}`);
}
let meArr = ["Cameron", "Birmingham", "Fettucini Alfredo"];
aboutMe(...meArr);*/

let myName = "Cameron";
function spreadFunc (whateveryoudlike) {
    let newArr = [...whateveryoudlike];
    for(i=0; i<newArr.length; i++) {
        console.log(newArr[i]);
    }
}
spreadFunc(myName);