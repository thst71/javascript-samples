/**
 * IDE Support
 * @typedef module(mocha).SuiteFunction SuiteFunction
 * @typedef module(mocha).TestFunction TestFunction
 */

import { expect } from 'chai';
import {BigCalc} from '../BigIntCalc.js'

describe("BigIntCalc", () => {

    it("calculates int with float in high numbers", () => {
        let calc = new BigCalc(5);
        
        let total = calc.plus(10.0)
        .mult(50.0)
        .div(10.0)
        .div(2.5)
        .plus(1_000_000n)
        .total();
    
        expect(total).to.be.a("string");
        expect(total).to.be.eq("30,00000");
    })

    it("calculates below 1", () => {
        let calc = new BigCalc(5);
        
        let total = calc.reset(0.3)
        .minus(0.2)
        .total();
        
        expect(total).to.be.a("string");
        expect(total).to.be.eq(",10000");
    })

    it("calculates very high numbers", () => {
        let calc = new BigCalc(5);
        
        let total = calc.reset(BigInt(Number.MAX_VALUE)*100000n)
        .mult(2)
        .pwr(2n)
        .total();
        
        expect(total).to.be.a("string");
        expect(total).to.be.eq("1292680242852440004995921248983182953723628" +
            "46695288149682063545913171295979972554697927850024923172233008" +
            "90174831751008364556174529160936525856494435998542145918676781" +
            "83882954132471721461838851702785815396085344631961920507780936" +
            "43067292132745744313545135922475425637658909020643459765632719" +
            "14269243628305702162255084897570442475131047872441506392335877" +
            "11707142664069778458642566440112984187272866217955734742598879" +
            "51808123744150474274281611123940795063485467649177095914976003" +
            "47121407137804784265508204685758596733395910878415751445836003" +
            "74012073736363909114673186370025215243706207743316335843758237" +
            "70420144238493696,00000");
    })

    it("calculates potencies with fraction", () => {
        let calc = new BigCalc(5);
        
        let total = calc.reset(6.54321)
        .pwr(40)
        .total();
    
        
        expect(total).to.be.a("string");
        expect(total).to.be.eq("428187866563612320544337764263800,54177");
    })

}); 
