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
    name = "lg";
    price = 1200;
    category = "digital";
}

let d1 = new Device();
let d2 = new Device();

// *Constructors
class BottleMaker{
    constructor(public brand: string, public price: number, public color: string, public material: string){

    }
}

let b1 = new BottleMaker("Milton", 1200, "yellow", "metal");
let b2 = new BottleMaker("cello", 800, "red", "plastic");

class HumanMaker {
    constructor(public a: string, public age: number = 0){

    }
}

let h1 = new HumanMaker("neeraj", 23)
let h2 = new HumanMaker("abhishek")

class Music {
    public name;
    public artist;
    public thumbnail;
    public length;
    public free;
    constructor(name: string, artist: string, thumbnail: string = "somethumbnail.jpg", length: number, free: boolean){
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
    name = "neeraj";

    changeSomeStuff() {
        console.log(this.name);
        this.changeSomeMoreStuff
    }

    changeSomeMoreStuff(){
        console.log("hey");
    }
}

// **Access modifiers (public, private, protected)
class BottleMakers {
    private halua: string = "halua";
    constructor(public name: string){ }
}

class MetalBottleMaker extends BottleMakers {
    public material = "metal";
    constructor(name: string){
        super(name);
    }

    getValue()  {
        console.log(this.name, this.halua);
    }
}

let b3 = new MetalBottleMaker("Milton");
b3.getValue();

//*protected
class BottleMakerss {
    protected name = "milton";
}

class MetalBottleMakers extends BottleMakerss {
   public material = "metal"

   changeName(){
    this.name = "some other name";
   }
}

let b4 = new MetalBottleMakers();
b4.changeName();

// *Readonly properties

class User {
    constructor(public readonly name: string){}
    changeName(){
        this.name = "hellyow";
    }
}

let u1 = new User("neeraj")
u1.changeName();

// *Optional properties

class Users{
    constructor(public name:string, public age: number, public gender?: string){ }
}

let u2 = new Users("neeraj", 25, "male");
let u3 = new Users("alok", 20);


// *Parameter properties

class admins{
    constructor(public name:string, public age: number){ }
}

// *Getters and setters

class admin{
    constructor(public _name:string, public _age: number){ }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    
    set name(value: string){
        this._name = value;
    }
   
}

let a1 = new admin("neeraj", 23);
a1.name
a1.age

// *Static members

class Shery {
    static version = 1.0;

    static getRandomNumber(){
        return Math.random();
    }
}

console.log(Shery.version);
Shery.getRandomNumber();

// *Abstract classess and methods

abstract class CookingEssentials {
    constructor (protected gas: number, public gasKaName: string) {}
}

class Sabji extends CookingEssentials{

}

let s1 = new Sabji(35, "lpg");
