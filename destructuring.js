var test1 = {a: 1, b: 2, c: 3};

// old fashioned destructuring
var a = test1.a;
var b = test1.b;
var c = test1.c;
console.log(a, b, c);

// ES6 destructuring
const test2 = {d: 4, e: 5, f: 6};
const {d, e, f} = test2;
console.log(d, e, f);

// ES6 destructure and assign new variable names "g", "h", and "i"
const {d: g, e: h, f: i} = test2;
console.log(g, h, i);

// Nested object destructuring
const motorcycle = {
    make: 'Kawasaki',
    model: 'Ninja 1000',
    factoryTire: {
        brand: 'Bridgestone',
        model: 'Battlax Hypersport S20'
    }    
}    

// destructure the nested object, and reassign the tire's model to a "tireModel" variable
const {make, model, factoryTire: { brand, model: tireModel }} = motorcycle;
console.log(make, model, brand, tireModel);

// Destructure a parameter to a function
const test = ({make, model, factoryTire: { brand, model: tireModel }}) => {
    console.log(make, model, brand, tireModel);
};
test(motorcycle);

// Destructuring an array
const array = [1, 2, 4, 10];

// get first two elements and assign them to a and b
const [j, k] = array;
console.log(j, k);

// get first, third, and fourth elements and assign them to c, d, and e
const [l,,m,n] = array;
console.log(l, m, n);

// get first and second elements and assign them to f and g
// then assign the remaining elements to an array named "q"
const [o, p, ...q] = array;
console.log(o, p, q);
