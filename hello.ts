console.log('Hello world!');

function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`)
}

// greet('Brendan')
greet('BOob', new Date())

// Downleveling:
// This process of moving from a newer or “higher” 
// version of ECMAScript down to an older or 
// “lower” one is sometimes called downleveling.
// TSC默认是ES3，我们可以指定给它需要转换成的版本
//  tsc hello.ts --target 2015

let myName: string = 'Alice';

// a function return a promise
async function getFavoriteNumber(): Promise<number> {
    return 26
}

const names = ['alice', 'bob', 'eve']
// contextual typing for function
// param is inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase())
})

// contextual typing also to arrow funcs
names.forEach(s => {
    console.log(s.toLowerCase())
})

function printCoord(pt: { x: number; y: number }) {
    console.log("The corrdinate'x value is ", pt.x)
    console.log("The corrdinate'y value is ", pt.y)
}

printCoord({
    x: 3,
    y: 2
})

// make it optional
function printName(obj: { first: string; last?: string }) {
    console.log(`${obj.first}, ${obj.last}`)
}

printName({ first: "bob", last: 'shit' })
printName({ first: 'alice' })

function printNameOp(obj: { first: string; last?: string }) {
    console.log(obj.first.toLocaleUpperCase())

    if (obj.last !== undefined) {
        // assume the last is string
        console.log(obj.last.toUpperCase())
    }

    console.log(obj.last?.toLocaleLowerCase())
}

// Narrowing occurs when TypeScript can deduce 
// a more specific type for a value based on the 
// structure of the code.
function printId(id: string | number) {
    if (typeof id === 'string') {
        // id is string
        console.log(id.toUpperCase())
    } else {
        // id is number
        console.log(id)
    }
}
// or example, both arrays and strings have a slice method. 
// If every member in a union has a property in common, 
// you can use that property without narrowing:
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log('Hello. ' + x.join(' and '));
    } else {
        console.log('Welcome lone traveler ', x)
    }
    console.log(x.slice(0, 3))
}

welcomePeople(['Alice', 'bob', 'Jiulia'])
welcomePeople('bob')

type Point = {
    x: number;
    y: number;
}

function printCoord2(pt: Point) {
    console.log(`${pt.x} ${pt.y}`)
}
printCoord2({ x: 1, y: 2 })

type ID = number | string;

interface IPoint {
    x: number;
    y: number;
}

function printCoord3(pt: IPoint) {
    console.log(`${pt.x},${pt.y}`)
}

printCoord3({ x: 1, y: 2 })

function padLeft(padding: number | string, input: string): string {
    return "".repeat(padding) + input;
}

function padLeft2(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return "".repeat(padding) + input;
    }

    return padding + input;
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    }
}

// Disriminated unions
// interface Shape {
//     kind: "circle" | "square";
//     redius?:number;
//     sideLength?:number;
// }

// function handleSquare(shape:Shape) {
//     if(shape.kind === 'rect') {

//     }
// }

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape:Shape) {
    if(shape.kind === 'circle' ) {
        return Math.PI * shape.radius **2;
    } else {
        return shape.sideLength **2;
    }
}

type GreetFuntion = (a:string) => void;

// he syntax (a: string) => void means “a function with one parameter, 
// named a, of type string, 
function greeter(fn:GreetFuntion) {
    fn("hello world")
}

function printToConsole(s:string) {
    console.log(s)
}

greeter(printToConsole)

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

const s = firstElement(['a','b'])
const n = firstElement([1,2,3])
const u = firstElement([])

function map<Input,Output>(arr: Input[],func: (arg:Input) => Output[]) {
    return arr.map(func)
}

// Type要有length属性
function longest<Type extends{length: number}>(a:Type,b:Type) {
    if(a.length >= b.length) {
        return a
    } else {
        return b;
    }
}

const longstArray = longest([1,2],[1,2,3])

function combine<Type>(arr1: Type[], arr2: Type[]):Type[] {
    return arr1.concat(arr2)
}
// const arr = combine([1,3,4],["hello"])
// specify the Type:
const arr = combine<string | number> ([1,3,4],['hello'])