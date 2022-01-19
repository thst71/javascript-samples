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

const all_stocks = ["IBM", "APPLE", "GOOGLE", "AMAZON"];

function initPortfolio(portfolio, stocks) {
    for (let stock of stocks) {
        portfolio[stock] = {};
    }
}

function getQuotes(portfolio, exchange) {
    for (let symbol in portfolio) {
        portfolio[symbol] = exchange.getStockQuote(symbol);
    }
}

let portfolio = {};
initPortfolio(portfolio, all_stocks);
getQuotes(portfolio, new StockMarket("NYSE"));
console.log(JSON.stringify(portfolio));
