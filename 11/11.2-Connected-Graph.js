/**
 * Created by Julia Petrishina on 12/8/15.
 */

var graph = [
    {from: 1, to: 2},
    {from: 3, to: 1},
    {from: 8, to: 1},
    {from: 2, to: 4},
    {from: 8, to: 4},
    {from: 3, to: 4},
    {from: 4, to: 5},
    {from: 4, to: 6},
    {from: 7, to: 4},
    {from: 5, to: 6},
    {from: 5, to: 7}
];

var tops = [
    {top: 1, color: undefined},
    {top: 2, color: undefined},
    {top: 3, color: undefined},
    {top: 4, color: undefined},
    {top: 5, color: undefined},
    {top: 6, color: undefined},
    {top: 7, color: undefined},
    {top: 8, color: undefined}

];


function check(graph) {
    var visitedTops = [];

    function getTopColor(visitedTops, top) {
        for (var i = 0; i < visitedTops.length; i++) {
            if (visitedTops[i].color === top.color) {
                return top.color;
            }
        }

        return -1;
    }

    function getTop(tops, topNumber) {
        for (var i = 0; i < tops.length; i++) {
            var top = tops[i];
            if (top.top === topNumber) {
                return top;
            }
        }

        return null;
    }


    var colorCounter = 0;

    for (var i = 0; i < graph.length; i++) {

        var topFrom = getTop(tops, graph.from);
        var topTo = getTop(tops, graph.to);

        if (getTopColor(visitedTops, topFrom) === -1 && getTopColor(visitedTops, topTo) === -1) {
            colorCounter++;
            topFrom.color = colorCounter;
            topTo.color = colorCounter;
            visitedTops.push(topFrom);
            visitedTops.push(topTo);
        }
        else if (getTopColor(visitedTops, topFrom) === -1 && getTopColor(visitedTops, topTo) !== -1) {
            topFrom.color = colorCounter;
            visitedTops.push(topFrom);
        }
        else if (getTopColor(visitedTops, topFrom) !== -1 && getTopColor(visitedTops, topTo) === -1) {
            topTo.color = colorCounter;
            visitedTops.push(topTo);
        }
        else {
            if (topFrom.color === topTo.color) {
                continue;

            } else {
                visitedTops.forEach(function (el) {
                    el.color = topFrom.color;
                })

                colorCounter = 1;

            }
        }

    }

    return check(graph);

    console.log(visitedTops)

}


console.log(check(graph)); // true



