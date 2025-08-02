// Interface and Type Aliases
// **Defining interfaces
// **Using interfaces to define onject shapes
// **Extending interfaces

// **Type aliases
// **Intersection types 

//*Defining interfaces
interface abcd {

}


//*Using interfaces to define onject shapes
interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}

function getDataOfUser(obj: User){
    // obj.
}
getDataOfUser({name:"neeraj", email:"neerajkr@gmail.com", password:"23434"})

//*Extending interfaces
interface User{
    name: string,
    email: string,
    password: string
}

interface Admin extends User {
    admin: boolean;
}

function abcde(obj: Admin){
    // obj. 
}


// *Type aliases
type value = string | number | null;

let s: value;

type arg = string | null;

function abwcd(obj: arg){
    
}

abwcd("neeraj")

// *Intersection types 

let l:string | null; //union

type User1 = {
    name: string,
    email: string
}

type Admin1 = User1 & {
    getDetails(user: string): void
}

function abfg(a: Admin1){
    // a.
}
