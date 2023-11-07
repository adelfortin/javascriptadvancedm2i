function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args); 
        return func.apply(this, args); 
    }

    wrapper.calls = []; 

    return wrapper;
}

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

const sayHelloSpy = spy(sayHello);

sayHelloSpy('Alice');
sayHelloSpy('Bob');

console.log(sayHelloSpy.calls); 

