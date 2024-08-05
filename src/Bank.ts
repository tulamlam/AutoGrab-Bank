import {Customer} from './Customer';

export class Bank {
    // In this exercise I am assuming customer names are unique, else I would implement a unique CustomerNumber generator
    private Customers= new Array<Customer>();

    CheckTotalBalance(): number {
        let totalBalance = 0;
        this.Customers.forEach(function (customer) {
            totalBalance += customer.CheckBalance();
        });
        console.log('Total balance of the bank is: $' + totalBalance);
        return totalBalance;
    }

    SignUpCustomer(accountName: string, initialDeposit: number) {
        const customer = new Customer(this, accountName, initialDeposit);
        this.Customers.push(customer);
    }

    // In this exercise I'm going to assume customer names are unique
    FindCustomer(accountName: string): Customer{
        for (const customer of this.Customers) {
            if (customer.AccountName === accountName) {
                //console.log('Customer ' + customer.AccountName + ' found.');
                return customer;
            }
        }
        console.log('No customer found with account name ' + accountName + '.');
        throw new Error ('No customer found.');
    }
}