function isEqual(obj1, obj2) {
    if ((null == obj1) || (null == obj2)) return false;
    else if (('object' != typeof obj1) && ('object' != typeof obj2)){
        return obj1 == obj2;
    } else if (('object' != typeof obj1) || ('object' != typeof obj2)){
        return false;
    }


    if ((obj1 instanceof Date) && (obj2 instanceof Date)){
        return obj1.getTime() == obj2.getTime();
    }
    if ((obj1 instanceof Date) && (obj2 instanceof Date)) return false;

    var keysobj1 = Object.keys(obj1);
    var keysobj2 = Object.keys(obj2);

    if (keysobj1.length != keysobj2.length) {
        return false;
    }

    return !keysobj1.filter(function (key) {

        if (typeof obj1[key] == "object" || Array.isArray(obj1[key])) {
            return !isEqual(obj1[key], obj2[key]);
        } else {
            return obj1[key] !== obj2[key];
        }
    }).length;

}

console.log(isEqual({a: 2}, {a: 2})); // --> true
console.log(isEqual({a: 2}, {a: "6.2"})); // --> false
console.log(isEqual({a: 2, b: [1, 2]}, {a: 2, b: [1, 2]})); // --> true
console.log(isEqual({a: 2, b: {k: [1, 2]}}, {a: 2, k: [1, 2]})); // --> false*/