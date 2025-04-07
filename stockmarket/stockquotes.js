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

// iterate over values to create properties
function initPortfolio(portfolio, stocks) {
    for (let stock of stocks) {
        portfolio[stock] = {};
    }
}


function initPortfolio2(portfolio, all_stocks) {
    for (let i = 0;
         i < all_stocks.length;
         portfolio[all_stocks[i++]] = null) ;
}

// iterate over properties to fill objects
function getQuotes(portfolio, exchange) {
    for (let symbol in portfolio) {
        portfolio[symbol] = exchange.getStockQuote(symbol);
    }
}

let portfolio = {};
initPortfolio(portfolio, all_stocks);
getQuotes(portfolio, new StockMarket("NYSE"));
console.log(JSON.stringify(portfolio));

