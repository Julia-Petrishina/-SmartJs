window.onload = function() {

    function searchRecursive(needle, haystack, path){

        function constructPath(key){
            var newPath = '';

            if(!isNaN(+key)){
                newPath = path + '[' + key + ']';
            }
            else{
                newPath = path + '.' + key;
            }
            return newPath;
        }

        path = path || '';

        for (var i in haystack){

            if (needle === haystack[i]){
                return path.slice(1) + constructPath(i);
            }

            var result = searchRecursive(needle, haystack[i], constructPath(i));

            if(result){
                return result;
            }
        }

        return false;

    }

    console.log(searchRecursive(5, {a: [1, 2, {s: 4, c: {u: 5}}], s: 9}));
};