var tree = { data: 8, left: { data: 3, left: {data: 1, left: null, right: null}, right: null}, right: { data: 10, left: null, right: {data: 14, left: null, right: null} }};

function getMin(tree) {
    var current = tree.data;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function remove(tree, value) {
    //??? ???? ????? ????????
    //?? ??? ????? ????????? ?????? ????????

    if (tree === value) {
        //if no children
        if (tree.left === null && tree.right === null) {
            return false;
        }

        //if one child
        if (tree.left === null) {
            return tree.right;
        }
        if (tree.right === null) {
            return tree.left;
        }

        //if two children
        var tempNode = getMin(tree.right);
        tree.data = tempNode.data;
        tree.right = remove(tree.right, tempNode.data);
        return tree;

    }
    else if (tree < value) {
        tree.left = remove(tree.left, value);
    }
    else {
        tree.right = remove(tree.right, value);
        return tree;
    }
}

console.log(remove(tree, 8))