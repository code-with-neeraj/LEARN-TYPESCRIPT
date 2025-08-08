"use strict";
// Classes and Objects
// **Class definition
// **Constructors
// **Access modifiers (public, private, protected)
// **Readonly properties
// **Optional properties
// **Parameter properties
// **Getters and setters
// **Static members
// **Abstract classess and methods
// *Class definition
class Device {
    constructor() {
        this.name = "lg";
        this.price = 1200;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
// *Constructors
class BottleMaker {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let b1 = new BottleMaker("Milton", 1200, "yellow", "metal");
let b2 = new BottleMaker("cello", 800, "red", "plastic");
class HumanMaker {
    constructor(a, age = 0) {
        this.a = a;
        this.age = age;
    }
}
let h1 = new HumanMaker("neeraj", 23);
let h2 = new HumanMaker("abhishek");
class Music {
    constructor(name, artist, thumbnail = "somethumbnail.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "somethumbnail.jpg";
        }
    }
}
let m1 = new Music("Chal Chhaiya Chhaiya", "Anu singh", "", 1200, false);
// *thi keyword
class Abcd {
    constructor() {
        this.name = "neeraj";
    }
    changeSomeStuff() {
        console.log(this.name);
        this.changeSomeMoreStuff;
    }
    changeSomeMoreStuff() {
        console.log("hey");
    }
}
// **Access modifiers (public, private, protected)
class BottleMakers {
    constructor(name) {
        this.name = name;
        this.halua = "halua";
    }
}
class MetalBottleMaker extends BottleMakers {
    constructor(name) {
        super(name);
        this.material = "metal";
    }
    getValue() {
        console.log(this.name, this.halua);
    }
}
let b3 = new MetalBottleMaker("Milton");
b3.getValue();
//*protected
class BottleMakerss {
    constructor() {
        this.name = "milton";
    }
}
class MetalBottleMakers extends BottleMakerss {
    constructor() {
        super(...arguments);
        this.material = "metal";
    }
    changeName() {
        this.name = "some other name";
    }
}
let b4 = new MetalBottleMakers();
b4.changeName();
// *Readonly properties
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "hellyow";
    }
}
let u1 = new User("neeraj");
u1.changeName();
// *Optional properties
class Users {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u2 = new Users("neeraj", 25, "male");
let u3 = new Users("alok", 20);
// *Parameter properties
class admins {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// *Getters and setters
class admin {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(value) {
        this._name = value;
    }
}
let a1 = new admin("neeraj", 23);
a1.name;
a1.age;
// *Static members
class Shery {
    static getRandomNumber() {
        return Math.random();
    }
}
Shery.version = 1.0;
console.log(Shery.version);
Shery.getRandomNumber();
// *Abstract classess and methods
class CookingEssentials {
    constructor(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
}
class Sabji extends CookingEssentials {
}
let s1 = new Sabji(35, "lpg");
