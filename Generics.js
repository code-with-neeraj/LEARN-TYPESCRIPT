"use strict";
//Generics
//**  Generic funtions
//**  Generic interfaces
//**  Generic classes
//* Generic funtions
function abcd(a, b, c) { }
abcd("halua", "pudi", 4);
function abcde(obj) {
}
abcde({ name: "foo", age: 25, key: "ahfkdf" });
//*  Generic classes
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("hey");
let b2 = new BottleMaker("hey");
