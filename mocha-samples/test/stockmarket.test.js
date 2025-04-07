/**
 * @typedef import("mocha").SuiteFunction SuiteFunction
 * @typedef import("mocha").TestFunction TestFunction
 */

import { expect } from "chai";
import StockMarket from "../stockmarket.js"

describe("testing the Stockmarket API", () => {
    it("the stockmarket returns an APPLE symbol", () => {
        let sm = new StockMarket("NYSE");
        const quote = sm.getStockQuote("APPLE");
        expect(quote.exchange).to.be.eq("NYSE");
        expect(quote.symbol).to.be.eq("APPLE");
        expect(quote.price).to.exist;
        expect(quote.timestamp.getMilliseconds()).to.be.lessThanOrEqual(new Date().getMilliseconds());
    });
});
