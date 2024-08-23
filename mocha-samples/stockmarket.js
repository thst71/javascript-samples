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

export default StockMarket