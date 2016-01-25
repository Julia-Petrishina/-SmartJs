var tree = { value: 8, left: { value: 3, left: null, right: null}, right: { value: 10, left: null, right: null }};
var arr = [];

function print(tree) {
    var rootValue = tree.value;
    if (tree.left === null) {
        arr.push(tree.value);
    } else {
        print(tree.left);
        arr.push(rootValue);
        print(tree.right);
    }
    return arr;
}
console.log(print(tree));