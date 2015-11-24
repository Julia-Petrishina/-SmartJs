var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null

        }
    }
};

//var list = { add: function () {...}, foo: function () {...} }

function add(list, v){


    if(list.next === null){
        list.next = {value: v, next: null};
    }
    else{
        add(list.next, v);
    }

    return list;

}




var list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}};

function get(list, index){

    if(index === 0){
        return list;
    }
    else{
        var count = 1;
        var currentList = list.next;
        while(count < index){
            currentList = currentList.next;
            count++;

            if(currentList === null){
                return false;
            }
        }

        return currentList;
    }

}


function remove(list, index){
    return get(list, index);
    var toBeRemovedList = get(list, index);

    var nextList = toBeRemovedList.next;
    var curList = list.next;
    var prevList = null;

    while(!toBeRemovedList){
        prevList = curList;
        curList = curList.next;
    }

    toBeRemovedList = curList;
    prevList.next = nextList;

    return toBeRemovedList;

}

remove(list, 1)

console.log(list);

