var list = {};

//var list = { add: function () {...}, foo: function () {...} }

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
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
        while(count < index--){
            var prevList = curList;
            curList = curList.next;
            count++;
        }

        prevList.next = nextToBeRemovedList;
        return toBeRemovedList;

    }

};

console.log(list.remove(list, 3));
console.log(list);


