# AutoGrab-Bank
This is a simple bank app with basic functions only. 
Customers can deposit, withdraw, transfer and check their balances.
Banks can sign up or find customers and check their total balances.
## Prerequisites
* Node 14 (later versions may work but are untested)

## Module Installation
`npm install`

## Run All The Tests
`npm test`

# Design Choices
I decided to make 2 separate classes, Customer and Bank.

## Customer
A Customer would always have a Bank linked to it to identify which bank a customer would have an account with.
A Customer object should only be created through the Bank object with SignUpCustomer so that the bank can save 
the customer to its array.

Customer's Balance member is made private so that it can only be accessed by the methods within the class itself, 
other processes cannot modify the Balance.

For Customer.Transfer(), I included bank as a parameter in case the customer would like to transfer to another
customer who has an account with another bank.

## Bank
A bank should maintain an array of customers since there is a requirement of no DB. This array is made private so other
classes cannot modify the customers inside. Another reason I did this is because a Customer object by itself should
not be able to find another Customer to interact with, this has to go through the Bank's FindCustomer() function.
E.g. Customers cannot transfer money to someone without a bank account.

In this Bank class, I don't want to maintain a balance member all the time like Customer class since total balance 
can always change whenever a customer transfer or withdraw, which would create extra steps to update the Bank balance
every time. Instead, the most accurate and up to date way to get the bank's total balance is to loop through the 
array of customers aggregate their balances.

