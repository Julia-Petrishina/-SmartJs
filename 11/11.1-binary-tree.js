/**
 * Created by user on 12/5/2015.
 */
'use strict';
var tree = {value: 8, left: {value: 3, left: null, right: null}, right: {value: 10, left: null, right: null}};

var binaryTree = {
    create: function (value) {
        return {data: value, right: null, left: null};
    },

    add: function (tree, value) {
        if (tree.data > value) {
            if (tree.left === null) {
                tree.left = {data: value, right: null, left: null};
            }
            else {
                return binaryTree.add(tree.left, value);
            }
        }
        if (tree.data < value) {
            if (tree.right === null) {
                tree.right = {data: value, right: null, left: null};
            }
            else {
                return binaryTree.add(tree.right, value);
            }
        }
    },

    search: function (tree, value) {
        if (tree.left === null || tree.right === null) {
            return false;
        }
        if (tree.data === value) {
            return true;
        }
        if (tree.data < value) {
            return binaryTree.search(tree.right, value);
        }
        else {
            return binaryTree.search(tree.left, value);
        }

    },

    print: function (tree) {
        if (tree.left) {
            binaryTree.print(tree.left);
        }

        console.log(tree.data);

        if (tree.right) {
            binaryTree.print(tree.right);
        }
    },

    getMin: function (tree) {
        var current = tree.data;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    },

    remove: function (tree, value) {
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
            var tempNode = binaryTree.getMin(tree.right);
            tree.data = tempNode.data;
            tree.right = binaryTree.remove(tree.right, tempNode.data);
            return tree;

        }
        else if (tree < value) {
            tree.left = binaryTree.remove(tree.left, value);
        }
        else {
            tree.right = binaryTree.remove(tree.right, value);
            return tree;
        }
    }
};
//var t = binaryTree.create(8);
//t = binaryTree.add(10); // t = { value: 8, left: null, right: { value: 10, left: null, right: null }}
//t = binaryTree.add(3);  t = { value: 8, left: { value: 3, left: null, right: null}, right: { value: 10, left: null, right: null }}
//t = binaryTree.add(1);
//t = binaryTree.add(6);
//t = binaryTree.add(4);
//t = binaryTree.add(7);
//t = binaryTree.add(14);
//t = binaryTree.add(13);
//console.log(binaryTree);
//console.log(t = binaryTree.search(12));
//console.log(t = binaryTree.search(6));
//binaryTree.print(tree); // 1 3 4 6 7 8 10 13 14 (??, ?????????? ????????? ???? ?????? ??????? ????????????? value :)