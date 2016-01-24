window.onload = function() {
    function search(needle, haystack) {
        console.log(haystack)

        var keys = Object.keys(haystack);
        console.log('keys ' + keys)

        for (var i = 0; i < keys.length; i++){
            var valueOfHaystack = haystack[keys[i]];
            console.log('value ' + valueOfHaystack)

            if(typeof haystack === 'object'){
                if(parseFloat(valueOfHaystack) === parseFloat(needle)){
                    return true
                }
            }
            else if (typeof haystack === 'object' && Array.isArray(valueOfHaystack)){
                for (var j = 0; j < valueOfHaystack.length; j++){
                    if(valueOfHaystack[j] === needle) {
                        return true;
                    }
                }
            }
            else if(typeof haystack === 'object' && typeof valueOfHaystack === 'object'){
                search(needle, valueOfHaystack);
            }
        }
    }

    console.log(search(5, { a: 5, b: { u: 8, '5': 'c', s: 7}, c: 9}));
};


