function myBind(fn, newThis) {
    var copyArguments = [].slice.call(arguments);
    return function () {
        var bindArguments = copyArguments.concat().splice(2);
        var funcArguments = [].slice.call(arguments);
        var allArguments = bindArguments.concat(funcArguments);
        return fn.apply(newThis, allArguments);
    };
};

function f(p1, p2, n1) {
    console.log(p1 + p2 - n1);
};

var g2 = myBind(f, null, 1, 2, 5);
g2(3);
var g = f.bind(null, 1, 2);
g(3);
