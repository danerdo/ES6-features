
// old way of binding to local context
var module = {
    age: 30,
    foo: function() {
        setTimeout(function() {
            console.log(this.age); // "this" is now in an anonymous context, and does not refer to the module
        }.bind(this), 1000); // the way around that is to bind this function to the outer context of the module
    }
}

var module2 = {
    age: 32,
    foo: function() {
        setTimeout(() => {
            console.log(this.age);
        }, 1000); // no binding necessary!
    }
}

module.foo();

module2.foo();