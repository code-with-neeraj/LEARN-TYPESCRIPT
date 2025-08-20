"use strict";
//Type Guards and TypeScript Utility Types
//** Using typeof and instanceof 
//**  Partial, Required, Readonly
//* Type Guards
function abcd(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("Error");
    }
}
console.log(abcd(12));
console.log(abcd("hello"));
//* typeof instanceof
class TvKaRemote {
    switchTvOff() {
        console.log("switching off tv");
    }
}
class CarKaRemote {
    switchCarOff() {
        console.log("switching off car");
    }
}
const tv = new TvKaRemote();
const car = new CarKaRemote();
function switchOffKaro(device) {
    if (device instanceof TvKaRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarKaRemote) {
        device.switchCarOff();
    }
}
