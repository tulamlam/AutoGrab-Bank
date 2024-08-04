"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(bank, accountName, initialDeposit) {
        if (initialDeposit < 0) {
            console.warn('Initial deposit must be higher than $0.');
            throw new Error('Initial deposit lower than $0');
        }
        else {
            this.Bank = bank;
            this.AccountName = accountName;
            this.Balance = initialDeposit;
        }
    }
    Deposit(amount) {
        this.Balance += amount;
        console.log('$' + amount + ' has been deposited for customer ' + this.AccountName);
    }
    // private so only this account can withdraw
    Withdraw(amount) {
        if (this.Balance < amount) {
            console.log(this.AccountName + ' has insufficient Fund.');
            throw new Error('Insufficient Fund.');
        }
        else {
            this.Balance -= amount;
            console.log('$' + amount + ' has been withdrawn from customer ' + this.AccountName);
        }
    }
    CheckBalance() {
        console.log('The current balance of customer ' + this.AccountName + ' is: $' + this.Balance);
        return this.Balance;
    }
    Transfer(accountName, amount) {
        if (this.Bank.FindCustomer(accountName) !== null) {
            this.Withdraw(amount);
            this.Bank.FindCustomer(accountName).Deposit(amount);
        }
        else {
            console.log('No account with name ' + accountName + ' was found.');
        }
    }
}
exports.Customer = Customer;
