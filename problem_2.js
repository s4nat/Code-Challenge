async function getPricesArray() {
    let response = await fetch("https://static.ngnrs.io/test/prices")
    let priceObject = await response.json()
    console.log(priceObject.data.prices)
    return priceObject.data.prices
}

function getPrices(){   
    let p = new Promise((resolve, rejects) => {
        resolve(getPricesArray())
    } )
    return p
}

let price = {
    buy: 0,
    sell: 0,
    pair: "",

    mid: function(){
        return (this.buy + this.sell)/200
    },

    quote: function(){
        return this.pair.slice(this.pair.length - 3)
    }
}


getPrices()
    .then(prices => {
        prices.forEach(priceElem => {
            price.buy = priceElem.buy
            price.sell = priceElem.sell
            price.pair = priceElem.pair
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });