import { Bank } from '../src/Bank';
import { Customer } from '../src/Customer';

describe('Testing banking app', () => {
    // Negative amount tests
    test('Initial deposit a negative amount', () => {
        let bank = new Bank();
        expect(() => new Customer(bank, 'Jensen', -100)).toThrow('Initial deposit lower or equals to $0');
    })
    test('Deposit a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Alannah', 100);
        expect(() => bank.FindCustomer('Alannah').Deposit(-100)).toThrow('Deposit lower or equals to $0');
    })
    test('Withdraw a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Frank', 100);
        expect(() => bank.FindCustomer('Frank').Withdraw(-100)).toThrow('Withdrawal lower or equals to $0');
    })
    test('Transfer a negative amount', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Max', 100);
        bank.SignUpCustomer('Zach', 100);
        expect(() => bank.FindCustomer('Max').Transfer(bank, 'Zach', -100)).toThrow('Transfer amount lower or equals to $0');
    })

    // Deposit tests
    test('Deposit', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Jimmy', 100);
        bank.FindCustomer('Jimmy').Deposit(100);
        expect(bank.FindCustomer('Jimmy').CheckBalance()).toBe(200);
    })

    // Withdrawal tests
    test('Withdraw too much', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Lam', 100);
        expect(() => bank.FindCustomer('Lam').Withdraw(200)).toThrow('Insufficient Fund.');
    })
    test('Withdrawal', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Rebecca', 100);
        bank.FindCustomer('Rebecca').Withdraw(50);
        expect(bank.FindCustomer('Rebecca').CheckBalance()).toBe(50);
    })

    // Transfer tests
    test('Transfer', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Shannon', 100);
        bank.SignUpCustomer('Jean', 100);
        bank.FindCustomer('Shannon').Transfer(bank, 'Jean', 50);
        expect(bank.FindCustomer('Shannon').CheckBalance()).toBe(50);
        expect(bank.FindCustomer('Jean').CheckBalance()).toBe(150);
    })

    test('Transfer more than balance', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Patterson', 100);
        bank.SignUpCustomer('Allison', 100);
        expect(() => bank.FindCustomer('Patterson').Transfer(bank, 'Allison', 150)).toThrow('Insufficient Fund.');
    })

    test('Transfer to different bank', () => {
        let bank1 = new Bank();
        bank1.SignUpCustomer('Raja', 100);
        let bank2 = new Bank();
        bank2.SignUpCustomer('Archibald', 100);
        bank1.FindCustomer('Raja').Transfer(bank2, 'Archibald', 50);
        expect(bank1.FindCustomer('Raja').CheckBalance()).toBe(50);
        expect(bank2.FindCustomer('Archibald').CheckBalance()).toBe(150);
    })

    // Bank total balance
    test('Total balance of the bank', () => {
        let bank = new Bank();
        bank.SignUpCustomer('Suzanne', 100);
        bank.SignUpCustomer('Raja', 200);
        bank.SignUpCustomer('Patrick', 300);
        bank.SignUpCustomer('Shaq', 400);
        bank.SignUpCustomer('Ken', 500);
        expect(bank.CheckTotalBalance()).toBe(1500);
    });
    test('Total balance of the bank with no customer', () => {
        let bank = new Bank();
        expect(bank.CheckTotalBalance()).toBe(0);
    })
});