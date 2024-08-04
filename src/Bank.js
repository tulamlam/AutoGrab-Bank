"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Customer_1 = require("./Customer");
class Bank {
    constructor() {
        // In this exercise I am assuming customer names are unique, else I would implement a unique CustomerNumber generator
        this.Customers = new Array();
        this.Customers = new Array();
    }
    CheckTotalBalance() {
        if (this.Customers.length === 0) {
            console.log('No customer signed up.');
            return 0;
        }
        else {
            let totalBalance = 0;
            this.Customers.forEach(function (customer) {
                totalBalance += customer.CheckBalance();
            });
            console.log('Total balance of the bank is: $' + totalBalance);
            return totalBalance;
        }
    }
    SignUpCustomer(accountName, initialDeposit) {
        let customer = new Customer_1.Customer(this, accountName, initialDeposit);
        this.Customers.push(customer);
    }
    // In this exercise I'm going to assume customer names are unique
    FindCustomer(accountName) {
        this.Customers.forEach(function (customer) {
            if (customer.AccountName === accountName) {
                console.log('Customer ' + customer.AccountName + ' found.');
                return customer;
            }
            else {
                console.log('No customer found with account name ' + accountName + '.');
                throw new Error('No customer found.');
            }
        });
        return null;
    }
}
exports.Bank = Bank;
