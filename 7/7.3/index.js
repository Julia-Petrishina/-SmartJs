window.onload = function() {

    function search(needle, haystack){

        var queue = [{
            object: haystack,
            path: ''
        }];

        var currentQueueItem;

        while(currentQueueItem = queue.shift()){
            var currentPath = currentQueueItem.path;
            var currentObject = currentQueueItem.object;
            for (var i in currentObject){
                if(needle === currentObject[i]){
                    return currentPath.slice(1) + '.' + i;
                };
                if(typeof currentObject[i] === "object"){
                    var newPath;
                    if(Array.isArray(currentObject)){
                        newPath = currentPath + '[' + i + ']'
                    }
                    else{
                        newPath = currentPath + '.' + i;
                    }
                    queue.push({
                        object: currentObject[i],
                        path: newPath
                    });
                };
            }
        }

        return false;
    }

    console.log(search(4, {a: [1, 2, {s: 4, c: {u: 5}}], s: 9}));
};