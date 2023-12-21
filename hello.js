var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Hello world!');
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}
// greet('Brendan')
greet('BOob', new Date());
// Downleveling:
// This process of moving from a newer or “higher” 
// version of ECMAScript down to an older or 
// “lower” one is sometimes called downleveling.
// TSC默认是ES3，我们可以指定给它需要转换成的版本
//  tsc hello.ts --target 2015
let myName = 'Alice';
// a function return a promise
function getFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        return 26;
    });
}
const names = ['alice', 'bob', 'eve'];
// contextual typing for function
// param is inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// contextual typing also to arrow funcs
names.forEach(s => {
    console.log(s.toLowerCase());
});
function printCoord(pt) {
    console.log("The corrdinate'x value is ", pt.x);
    console.log("The corrdinate'y value is ", pt.y);
}
printCoord({
    x: 3,
    y: 2
});
// make it optional
function printName(obj) {
    console.log(`${obj.first}, ${obj.last}`);
}
printName({ first: "bob", last: 'shit' });
printName({ first: 'alice' });
function printNameOp(obj) {
    var _a;
    console.log(obj.first.toLocaleUpperCase());
    if (obj.last !== undefined) {
        // assume the last is string
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase());
}
// Narrowing occurs when TypeScript can deduce 
// a more specific type for a value based on the 
// structure of the code.
function printId(id) {
    if (typeof id === 'string') {
        // id is string
        console.log(id.toUpperCase());
    }
    else {
        // id is number
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello. ' + x.join(' adn '));
    }
    else {
        console.log('Welcome lone traveler ', x);
    }
}
welcomePeople(['Alice', 'bob', 'Jiulia']);
welcomePeople('bob');
