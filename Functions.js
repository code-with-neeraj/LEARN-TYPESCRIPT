"use strict";
//Functions
//**  Function types
//**  Optional and default parameters
//**  Rest parameters
//**  OverLoads
//* Functions
function login() {
    console.log("user Login");
}
login();
//* Function types
function abcdh(name, cb) {
    cb("neeraj");
}
abcdh("neeraj", (value) => {
    console.log(value);
});
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("neeraj", 23, (arg) => {
    console.log(arg);
});
//* Optional and default parameters
function abcdefg(name, age, gender) {
}
abcdefg("neeraj", 23, "male");
abcdefg("alok", 23); //gender is a optional prop
function user(name, age, gender = "male") {
    console.log(name, age, gender);
}
user("neeraj", 23); //gender is default prop
//* Rest parameters
// ... rest/spread
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
abcd("hey");
abcd("hey", 12);
