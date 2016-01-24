var list = {

    create: function () {
        list.value = 1;
        list.next = null;

        return list;
    },

    add: function (list, v) {

        if (list.next === null) {
            list.next = {value: v, next: null};
        } else {
            list.add(list.next, v);
        }

    },

    get: function (list, index) {

        if (index === 0) {
            return list;
        }
        else {
            var count = 1;
            var currentList = list.next;
            while (count < index) {
                currentList = currentList.next;
                count++;

                if (currentList === null) {
                    return false;
                }
            }

            return currentList;
        }
    },

    remove: function (list, index) {

        var toBeRemovedList = list.get(list, index);
        var nextToBeRemovedList = toBeRemovedList.next;
        var curList = list.next;

        var count = 0;
        while (count < index--) {
            var prevList = curList;
            curList = curList.next;
            count++;
        }

        prevList.next = nextToBeRemovedList;
        return toBeRemovedList;

    },

    search: function (list, value) {
        if (list.value === value) {
            return list;
        } else if (list.next === null) {
            return null;
        } else {
            var way = list.next + '.';
            return list.search(list.next, value);
        }
    },

    isEmpty: function (list) {
        if (list.value !== null && list.next !== null) {
            return false;
        } else {
            return true;
        }
    },

    insertAt: function (list, v, index) {

        var currList = list.get(list, index);

        var nextList = currList.next;
        var count = index;
        while ("???? ?? ????? ?? ????? ??????") {
            nextList = currList;
            nextList = currList.next;
            count++;
        }

        return list;
    },

    toArray: function (list) {
        var array = [];
        array.push(list.value);
        if (list.next === null) {
            return array += array;
        } else {
            list.toArray(list.next);
        }

        return array;
    },

    size: function (list) {
        var counter = 0;

    }


};
console.log(list.create());
console.log(list.add(list, 6));
console.log(list.remove(list, 3));


