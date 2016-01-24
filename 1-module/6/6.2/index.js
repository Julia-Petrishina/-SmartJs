var R = {
    _: 'котик',
    bind: function (fn, newThis) {
        var copyArguments = [].slice.call(arguments);
        return function () {
            var bindArguments = copyArguments.concat().splice(2);
            var funcArguments = [].slice.call(arguments);
            bindArguments.forEach(function (item, i) {
                if (item === 'котик') {
                    bindArguments.splice(i, 1, funcArguments[0]);
                    funcArguments.splice(0, 1);
                }
            });
            var allArg = bindArguments.concat(funcArguments);
            return fn.apply(newThis, allArg);
        }
    }
};

console.log(R);