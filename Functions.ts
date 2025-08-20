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

function abcdh(name: string, cb:(value: string)=>void){
 cb("neeraj")
}
abcdh("neeraj", (value: string) => {
    console.log(value);
})

function abcdef(name: string, age: number, cb: (arg: string) => void){
    cb("hey");
}

abcdef("neeraj", 23, (arg: string)=>{
    console.log(arg);
})

//* Optional and default parameters

function abcdefg(name: string, age: number, gender?: string){

}

abcdefg("neeraj",23, "male")
abcdefg("alok",23) //gender is a optional prop

function user(name: string, age: number, gender: string = "male"){
    console.log(name, age, gender);
    
}
user("neeraj",23) //gender is default prop

//* Rest parameters

// ... rest/spread

function sum(...arr: number[]){
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


//* OverLoads

function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any) {
    if(typeof a === "string" && b === undefined){
        console.log("hey");
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else throw new Error("something is wrong");
}

abcd("hey");
abcd("hey", 12);