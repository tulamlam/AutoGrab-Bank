import { Bank } from '../src/Bank';
import { Customer } from '../src/Customer';

describe('Testing banking app', () => {
    // Negative amount tests
    test('Initial deposit a negative amount', () => {
        let bank = new Bank();
        expect(() => new Customer(bank, 'Lam', -100)).toThrow('Initial deposit lower than $0');
    })
    test('Deposit a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        expect(() => bank.FindCustomer('Lam').Deposit(-100)).toThrow('Deposit lower than $0');
    })
    test('Withdraw a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        expect(() => bank.FindCustomer('Lam').Withdraw(-100)).toThrow('Withdrawal lower than $0');
    })
    test('Transfer a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam Transfer', 100);
        bank.SignUpCustomer('Lam Received', 100);
        expect(() => bank.FindCustomer('Lam Transfer').Transfer('Lam Received', -100)).toThrow('Transfer amount lower than $0');
    })

    // Deposit tests
    test('Deposit', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        bank.FindCustomer('Lam').Deposit(100);
        expect(bank.FindCustomer('Lam').CheckBalance()).toBe(200);
    })

    // Withdrawal tests
    test('Withdraw too much', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        expect(() => bank.FindCustomer('Lam').Withdraw(200)).toThrow('Insufficient Fund.');
    })
    test('Withdrawal', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        bank.FindCustomer('Lam').Withdraw(50);
        expect(bank.FindCustomer('Lam').CheckBalance()).toBe(50);
    })

    // Transfer tests
    test('Transfer', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam Transfer', 100);
        bank.SignUpCustomer('Lam Received', 100);
        bank.FindCustomer('Lam Transfer').Transfer('Lam Received', 50);
        expect(bank.FindCustomer('Lam Transfer').CheckBalance()).toBe(50);
        expect(bank.FindCustomer('Lam Received').CheckBalance()).toBe(150);
    })

    // Bank total balance
    test('Total balance of the bank', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam 1', 100);
        bank.SignUpCustomer('Lam 2', 200);
        bank.SignUpCustomer('Lam 3', 300);
        bank.SignUpCustomer('Lam 4', 400);
        bank.SignUpCustomer('Lam 5', 500);
        expect(bank.CheckTotalBalance()).toBe(1500);
    });
});