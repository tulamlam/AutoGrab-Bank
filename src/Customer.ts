import {Bank} from './Bank';

export class Customer {
    Bank: Bank;
    AccountName: String;
    private Balance: number;

    constructor(bank: Bank, accountName: string, initialDeposit: number) {
        if (initialDeposit < 0) {
            console.log('Initial deposit must be higher than $0.');
            throw new Error ('Initial deposit lower than $0');
        } else {
            this.Bank = bank;
            this.AccountName = accountName;
            this.Balance = initialDeposit;
        }
    }

    Deposit(amount: number): void {
        if (amount < 0) {
            console.log('Amount deposited must be higher than $0.');
            throw new Error ('Deposit lower than $0');
        } else {
            this.Balance += amount;
            console.log('$' + amount + ' has been deposited for customer ' + this.AccountName);
        }
    }

    // private so only this account can withdraw
    Withdraw(amount: number): void {
        if (this.Balance < amount) {
            console.log(this.AccountName + ' has insufficient Fund.');
            throw new Error ('Insufficient Fund.');
        }
        else if (amount < 0) {
            console.log('Amount withdrawn must be higher than $0.');
            throw new Error ('Withdrawal lower than $0');
        }
        else {
            this.Balance -= amount;
            console.log('$' + amount + ' has been withdrawn from customer ' + this.AccountName);
        }
    }

    CheckBalance(): number {
        console.log('The current balance of customer ' + this.AccountName + ' is: $' + this.Balance);
        return this.Balance;
    }

    Transfer(accountName: string, amount: number) {
        if (amount < 0) {
            console.log('Amount transferred must be higher than $0.');
            throw new Error ('Transfer amount lower than $0');
        } else {
            this.Withdraw(amount);
            this.Bank.FindCustomer(accountName).Deposit(amount);
            console.log('$' + amount + ' has been transferred to ' + accountName)
        }
    }
}