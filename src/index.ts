// Basic Types
let id: number = 5;
let company: string = "Slimy Creates"
let isPublished: boolean = true
let x: any = 'Hello' // This can be change with any type of data and would not complain

// Array definitions
let ids: number[] = [1, 2, 3, 4, 5]
let array: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Maria'],
    [3, 'John']
]

// Unions
let pid: string | number
pid = 22
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}  


// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// Method 1
let customerId = <number>cid
// Method 2
let customerId2 = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
// x: number -> Value Type
// (x: number, y: number): number -> The Last one is the Type of the RETURN Value.

function log(message: string | number): void{
    console.log(message)
}
// Void will be nothing

// Interfaces
interface UserInterface  {
    readonly id: number, // Readonly Property
    name: string,
    age?: number // Optional Value
}

const user1: UserInterface = {
    id: 1,
    name: "Maria"
}
// Interfaces doesn't works with Unions or Primitives so instead you need to use the Type type value.

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;


interface PersonInterface  {
    id: number, 
    name: string,
    register(): string
}

// Classes
// Data Modifiers
class Person implements PersonInterface {
    id: number // Is always Public by default, Private Only can access the property in the class, Protected can access in this class or a class that extends THIS class (Person in this case)
    name: string

    constructor(id: number, name: string) {
        this.id = id; // This means current instance or current class
        this.name = name;
    }

    register() {
        return `${this.name} is now register`
    }
}

const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike'); // The constructor runs when you initialize an object

console.log(brad.register())

// Extend Class / SubClass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);  // Super initialize from the class we're extending
        this.position = position;
    }
}

const Emp = new Employee(3, 'Shaun', 'Developer');

// Generics
// Used for reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad', 'John', 'Joe'])



