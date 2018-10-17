var fetch = require('node-fetch');
const co = require('co');

// var myGen = function*() {
//     var one = yield 1;
//     var two = yield 2;
//     var three = yield 3;
//     console.log(one, two, three);
// };

// var gen = myGen();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Promise.coroutine(function*(val) {
//     console.log('testing');
//     var pictures = yield fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json'/*, {jsonpCallbackFunction: 'jsonFlickrFeed'}*/);
//     console.log(pictures);
// });




// fetch('http://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(post => post.title)
//     .then(x => console.log('Title:', x));

run(function *() {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1'
    const response = yield fetch(uri)
    const post = yield response.json()
    const title = post.title
    return title
})
.catch(error => console.error(error.stack))
.then(x => console.log('run resulted in', x));

co(function *() {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1'
    const response = yield fetch(uri)
    const post = yield response.json()
    const title = post.title
    return title
})
.catch(error => console.error(error.stack))
.then(x => console.log('run resulted in', x));

function run(generator) {
    const iterator = generator()
    function iterate(iteration) {
        if (iteration.done) return iteration.value
        const promise = iteration.value
        return promise.then(x => iterate(iterator.next(x)))
    }
    return iterate(iterator.next())
}