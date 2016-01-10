window.onload = function() {

    function search(needle, haystack){

        var queue = [haystack];

        var currentObject;

        while(currentObject = queue.shift()){
            for (var i in currentObject){
                if(needle === currentObject[i]){
                    return true;
                };
                if(typeof currentObject[i] === "object"){
                    queue.push(currentObject[i]);
                };
            }
        }

        return false;

    }

    console.log(search(6, {a: [1, 2, {s: 4, c: {u: 5}}], s: 9}));
};