import {Bank} from './Bank';

export class Customer {
    Bank: Bank;
    AccountName: String;
    private Balance: number;

    constructor(bank: Bank, accountName: string, initialDeposit: number) {
        if (initialDeposit > 0) {
            this.Bank = bank;
            this.AccountName = accountName;
            this.Balance = initialDeposit;
        } else {
            console.log('Initial deposit must be higher than $0.');
            throw new Error ('Initial deposit lower or equals to $0');
        }
    }

    Deposit(amount: number): void {
        if (amount > 0) {
            this.Balance += amount;
            console.log('$' + amount + ' has been deposited for customer ' + this.AccountName);
        } else {
            console.log('Amount deposited must be higher than $0.');
            throw new Error ('Deposit lower or equals to $0');
        }
    }

    Withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Amount withdrawn must be higher than $0.');
            throw new Error('Withdrawal lower or equals to $0');
        } else if (this.Balance < amount) {
            console.log(this.AccountName + ' has insufficient Fund.');
            throw new Error ('Insufficient Fund.');
        } else {
            this.Balance -= amount;
            console.log('$' + amount + ' has been withdrawn from customer ' + this.AccountName);
        }
    }

    CheckBalance(): number {
        console.log('The current balance of customer ' + this.AccountName + ' is: $' + this.Balance);
        return this.Balance;
    }

    Transfer(bank: Bank, accountName: string, amount: number) {
        if (amount > 0) {
            this.Withdraw(amount);
            bank.FindCustomer(accountName).Deposit(amount);
            console.log('$' + amount + ' has been transferred to ' + accountName)
        } else {
            console.log('Amount transferred must be higher than $0.');
            throw new Error ('Transfer amount lower or equals to $0');
        }
    }
}