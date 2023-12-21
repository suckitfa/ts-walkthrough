# TS Walk Through
### Everyday Types
#### Primitives: string, number and boolean
```ts
const age:number = 18
const name:string = 'ALice'
const isGirl = true
```
#### Arrays
```TS
const colors:string[] = [
    'red',
    'green'
]
// number[]
```
#### any
When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
tips:
- Use the compiler flag noImplicitAny to flag any implicit any as an error.

#### contextual typing
```TS
const names = ['alice','bob','eve']
// contextual typing also to arrow funcs
names.forEach(s => {
    console.log(s.toLowerCase())
})
```
#### Object Type
```TS
function printNameOp(obj:{first:string; last?:string}) {
    console.log(obj.first.toLocaleUpperCase())
    
    if(obj.last !== undefined) {
        // assume the last var is string
        console.log(obj.last.toUpperCase())
    }

    console.log(obj.last?.toLocaleLowerCase())
}
```
#### Union Types
```TS
type IdType = string | number;

// Narrowing occurs when TypeScript can deduce 
// a more specific type for a value based on the 
// structure of the code.
function printId(id:string | number) {
    if(typeof id === 'string') {
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
function welcomePeople(x:string[] | string) {
    if(Array.isArray(x)) {
        console.log('Hello. ' + x.join(' and '));
    } else {
        console.log('Welcome lone traveler ',x)
    }
    console.log(x.slice(0,3))
}

welcomePeople(['Alice','bob','Jiulia'])
welcomePeople('bob')
```
#### Type Aliases 
```TS
type Point = {
    x:number;
    y:number;
}

function printCoord2(pt:Point) {
    console.log(`${pt.x} ${pt.y}`)
}
printCoord2({x:1,y:2})

type ID = number | string;
```
#### Interface
```TS
interface IPoint {
    x:number;
    y:number;
}

function printCoord3(pt:IPoint) {
    console.log(`${pt.x},${pt.y}`)
}

printCoord3({x:1,y:2})
```
#### TypeAssetion

#### Literal Types
-  const does not. This is reflected in how TypeScript creates types for literals.
- boolean: true or false
```TS
interface Options {
    width:number;
}
function configure(x: Options | 'auto') {
    // ...
}
configure({ width : 100})
```

```TS
declare function handleRequest(url:string, method: "GET" | "POST")
// use const to convert the entire object to be type literals.
const req =  {url:'http://test.com',method: 'GET'} as const
handleRequest(req.url, req.method)
```
#### null and undefined
- strictNullChecks off: values that might be null or undefined can still be accessed normally.
- we need strictNullChecks on
```TS
function doSomething(x:string | null) {
    if (x === null) {
        // do something
    } else {
        console.log("Hello, ", x.toUpperCase())
    }
}
```
#### Non-null Assertion Operator
-  Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
```TS
// 就是强制访问呗
x!.toFixed()
```
#### Less Common Primitives
- bigint
```TS
const oneHundred:bigint = BigInt(100)
const anotherHundred:bigint = 100n;
```
- symbol: for create a globally unique reference via the function Symbol()
```TS
const firstName = Symbol("name")
const lastName = Symbol("name")
```

#### Type guards: typeof
- But it turns out that in JavaScript, typeof null is actually "object"! This is one of those unfortunate accidents of history.
```TS
'string'
'number'
'bigint'
'boolean'
'symbol'
'undfined'
'object'
'function'
```
#### Truthiness narrowing
- instanceof
- in
- equality narrowing ===
- a discrminated uion: checking whether the kind property was "circle" got rid of every type in Shape that didn’t have a kind property with the type "circle". That narrowed shape down to the type Circle.
```TS
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
```
#### never
- When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
- no type is assignable to never

#### generics && constriaints 限制
-  Remember, generics are all about relating two or more values with the same type!
- remember that the same type
```TS
// Type要有length属性
function longest<Type extends{length: number}>(a:Type,b:Type) {
    if(a.length >= b.length) {
        return a
    } else {
        return b;
    }
}

function combine<Type>(arr1: Type[], arr2: Type[]):Type[] {
    return arr1.concat(arr2)
}
// this will raise an error
// remember that the generics is all about the same type.
const arr = combine([1,3,4],["hello"])

// specify the type,  this will work
const arr = combine<string | number> ([1,3,4],['hello'])
```
- Guidelines for Writing Good Generic Functions.

#### function signatures overload.
- https://www.typescriptlang.org/docs/handbook/2/functions.html# ts-walkthrough
# ts-walkthrough
