function clone(obj) {
    var copy;

    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    if (obj instanceof Array) {
        return obj.slice(0);
    }

    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

}

var obj3 = {a: 2, b: ['v', 'd', 'f']};

console.log(clone(obj3));