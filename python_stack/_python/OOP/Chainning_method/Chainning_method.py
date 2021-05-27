class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        other_user.account_balance += amount
        self.account_balance -= amount
        return self


Salman = User("Salman Khatib", "salman.malkhatib@gmail.com")
Khalid = User("Khalid abo rob", "Khalid.aborob@gmail.com")
Mohammad = User("Mohammad rami", "mohammad.rami@gmail.com")

print(Salman.name)
print(Salman.email)
print(Salman.account_balance)
Salman.make_deposit(100).make_deposit(
    200).make_withdrawl(100).display_user_balance()
Khalid.make_deposit(1000).make_deposit(1000).make_withdrawl(
    100).make_withdrawl(100).display_user_balance()
Mohammad.make_deposit(10).make_withdrawl(2).make_withdrawl(
    2).make_withdrawl(2).display_user_balance()
Salman.transfer_money(Mohammad, 100)
print(Salman.account_balance)
print(Mohammad.account_balance)
