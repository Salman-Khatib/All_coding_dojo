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


class User:
    def __init__(self, account_num, name, email):
        self.name = name
        self.email = email
        self.account_number = account_num
        self.account = BankAccount(init_rate=2, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        print(self.account.account_balance)
        return self

    def make_withdrawl(self, amount):
        self.account.withdraw(amount)
        print(self.account.account_balance)
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account.account_balance}")
        return self

    def transfer_money(self, other_user, amount):

        other_user.account.deposit(amount)
        self.account.withdraw(amount)
        return self


Salman = User(1, "Salman Khatib", "salman.malkhatib@gmail.com")
Khalid = User(10, "Khalid abo rob", "Khalid.aborob@gmail.com")
Mohammad = User(20, "Mohammad rami", "mohammad.rami@gmail.com")

Salman.make_deposit(100).make_deposit(50)
Salman.transfer_money(Khalid, 100)
print(Salman.account.account_balance)
print(Khalid.account.account_balance)

