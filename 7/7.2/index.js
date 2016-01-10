window.onload = function() {

    function backpack (volume, goods){
        if(volume <= 0 || goods.length === 0){
            return 0;
        }

        var bestPrice = 0;

        goods.forEach (function (good, index) {
            var availableGoods = [].concat((goods));
            availableGoods.splice(index, 1)
            if(good.volume <= volume && bestPrice < good.price + backpack(volume - good.volume, availableGoods)){
                bestPrice = good.price + backpack(volume - good.volume, availableGoods);
            }
        });

        return bestPrice;
    }

    console.log(backpack(120, [{volume: 100, price: 110}, {volume: 70, price: 70}, {volume: 50, price: 65}]))
}
