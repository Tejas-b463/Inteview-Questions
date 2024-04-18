1.
const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = "1,2,3,4";
console.log(a == b);
console.log(a == c);
console.log(a === c);

2.
let x = 10;
let y = x++;

console.log(x)
console.log(y)

3.
console.log(2 + 2)
console.log(2 + "2")
console.log("2" + "2")
console.log(2 - "2")
console.log("2" - "2")
console.log("A" - "A")

4.
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

for (var i = 1; i <= 3; i++) {
    ((i) =>
        setTimeout(() => {
            console.log(i);
        }, 1000)
    )(i)
}

for (var i = 1; i <= 3; i++) {
    console.log(i)
}



5.
// Hoisting
var num = 1;

function test() {
    console.log(num)
    var num = 2;
}
test()

6.
console.log(3 > 2 > 1);
console.log(1 < 2 < 3);
console.log("2" + 1);
console.log("2" - 1)
console.log(1 + -"1" + "2")

7.
setTimeout(() => {
    console.log(1)
}, 0)

console.log(2)

Promise.resolve().then(() => {
    console.log(3)
})

setTimeout(() => {
    console.log(4)
}, 0);

console.log(5)

8.
// var b;
function foo() {
    var a = b = 0;
    // var a, b= 0 - undefined
    a++;
    return a;
}
foo()
console.log(typeof a);
console.log(typeof b);

9.
console.log(c);
var a = null;
console.log(a)
console.log(typeof(a))

Example: null
var info = {
    name: "tejas",
    age: null,
}

10.

function x() {
    setTimeout(() => {
        console.log(i)
    }, 2000)
    var i;
}
x();

11.
console.log(1)
setTimeout(() => { console.log(2) }, 2000)
setTimeout(() => { console.log(3) }, 0);
console.log(4);


// Object
12.
// a is a primitive value (number in this case), the delete operator doesn't have any effect
const func = (function(a) {
    delete a;
    return a;
})(5);

console.log(func);

13.
const user = {
    name: "tejas",
    age: 24,
    "like this video": true,
}
delete user["like this video"];
console.log(["like this video"])

14.
const user1 = {
    name: "tejas",
    age: 24,
    isTotallyAwesome: true,
};

for (key in user1) {
    console.log(key);
}

15.
// two key same name added later consider last print
const obj = {
    a: 'one',
    b: 'two',
    a: 'three',
};
console.log(obj)

16.


16.
let x = false;
let y = "0";
let z = 0;

console.log(x == y);
console.log(x == z);

17.
let x = [];
console.log(Boolean(x));

18.
let x = Infinity;
console.log(typeof x);

19.
let x = "hello";
let y = new String("hello");

console.log(x == y);
console.log(x === y);

20.
let x = [];
let y = [];
let z = x + y;

console.log(typeof z);

21.
let x = true;
let y = false;
let z = x + y && x * y;

console.log(z);

22.
console.log("one")

setTimeout(() => {
    console.log("two")
}, 0)
setTimeout(() => {
    console.log("three")
}, 2000)

console.log('four')

23.
console.log(0.1 + 0.2 === 0.3)

// 0.1+0.2=0.3000000004

24.

function getName(name) {
    delete name;
    console.log(name)
}
getName('Tejas Banait')

25.
const person = {
    name: "abc",
    city: "pune"
}
delete person.city;
console.log(person)

26.
    (function() {
        console.log(a)
        console.log(b)
        var a = b = 3;
    })()
    // b is not declared any variable

27.
var a = {},
    b = { key: 'b' },
    c = { key: "c" },

    a[b] = 123;
a[c] = 456 '

console.log(a[b])

28.
var length = 10;

function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
}
obj.method(fn, 1)

29.
var a = [1, 2, 3]
a[10] = 99;
console.log(a[6])

30.

function executer(cb) {
    cb(null, 'hello')
}

executer(function(err, data) {
    console.log(data)
})
console.log("hi");

31.
var array = new Array('a', 'b', 'c');
array[10] = 'f'
delete array[10];
console.log(array.length);
array.length = 0;
console.log(array.length);

32.
    (function() {
        var a = b = 3;
    })()
console.log(b);
console.log(a)



// important
1.
var variable = 10;

(() => {
    console.log(variable);
    var variable = 20;
    console.log(variable)
})()

2.

function sayHi() {
    setTimeout(function() {
        console.log(`Hello my name is ${this.name}`)
    }, 500)
}
sayHi.call({ name: 'Tejas' });

// Hoisting Related

3.

function test() {
    var a = 1; {
        var a = 2;
        console.log(a)
    }
    console.log(a)
}
test()

4.

function test() {
    var a = 1;
    var a = 2;
    console.log(a)
}
test()

5.

function test() {
    var a = 1;
    var a = 2;
    console.log(a)
    console.log(a)
}
test()

6.
var rate = 10;

function getRate() {
    if (rate === undefined) {
        var rate = 6;
        return rate;
    } else {
        return 10;
    }
}
console.log("Rate is", getRate())

7.
y = 3;
console.log(y)
var y;

8.
var x = 1;
let x;
console.log(x);

9.

function hoistingExample() {
    console.log("value of a in local scope", a)
}
console.log("value of a in global scope", a)
var a = 1;
hoistingExample()