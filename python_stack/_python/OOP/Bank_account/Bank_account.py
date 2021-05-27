class BankAccount:
    def __init__(self, init_rate, balance):

        self.interest_rate = init_rate/100
        self.account_balance = 0

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        if(self.account_balance - amount < 0):
            print("Insuficient funds:charging a $5 fee")
            self.account_balance -= 5
            return self
        else:
            self.account_balance -= amount
            return self

    def display_account_info(self):
        print(f' Balance: ${self.account_balance}')
        return self

    def yield_interest(self):
        if(self.account_balance > 0):
            self.account_balance += (self.account_balance*self.interest_rate)
            return self


Salman_account = BankAccount(5, 0)
Ahmad_account = BankAccount(4, 0)
Salman_account.deposit(300).deposit(300).deposit(
    300).withdraw(100).yield_interest().display_account_info()
Ahmad_account.deposit(100).deposit(100).deposit(
    100).withdraw(50).yield_interest().display_account_info()
