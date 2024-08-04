"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("../src/Bank");
describe('Testing bank sign ups', () => {
    test('empty string should result in zero', () => {
        let bank = new Bank_1.Bank();
        bank.SignUpCustomer('Lam 1', 100);
        bank.SignUpCustomer('Lam 2', 200);
        bank.SignUpCustomer('Lam 3', 300);
        bank.SignUpCustomer('Lam 4', 400);
        bank.SignUpCustomer('Lam 5', 500);
        expect(bank.CheckTotalBalance()).toBe(1500);
    });
});
