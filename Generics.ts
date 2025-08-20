//Generics
//**  Generic funtions
//**  Generic interfaces
//**  Generic classes


//* Generic funtions
function abcd<H>(a: H, b: string, c: number){}

abcd<string>("halua", "pudi", 4);


//*   Generic interfaces
interface Halua<T> {
    name:string;
    age: number;
    key: T;
}

function abcde(obj: Halua<String>){

}

abcde({ name: "foo", age: 25, key: "ahfkdf"})

//*  Generic classes
class BottleMakersss<T> {
    constructor(public key: T){}
}

let bo1 = new BottleMakersss<string>("hey");
let bo2 = new BottleMakersss<number>(12);

console.log(b1, b2);
