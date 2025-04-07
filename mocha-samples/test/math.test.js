/**
 * @typedef {import('mocha').SuiteFunction} SuiteFunction
 * @typedef {import('mocha').TestFunction} TestFunction
 */

import { expect } from 'chai';
import { add } from "../math.js";

describe('math', () => {  
    it('should add two numbers', () => { 
           expect(add(2, 3)).to.eq(5);
    });
});