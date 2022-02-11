// StockMarket API

function StockMarket(exchange) {
    this.exchange = exchange
}

StockMarket.prototype = {
    getStockQuote(stock) {
        return {
            symbol: stock,
            price: Math.round(Math.random() * 100000) / 100,
            timestamp: new Date(),
            exchange: this.exchange
        };
    }
}

function test() {
    let sm = new StockMarket("NYSE");
    console.log(sm.getStockQuote("APPLE"));
}

// test()
// outputs {symbol: 'APPLE', price: 211.19, timestamp: Sun Jan... Time), exchange: 'NYSE'}