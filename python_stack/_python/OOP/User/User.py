class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawl(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")

    def transfer_money(self, other_user, amount):
        other_user.account_balance += amount
        self.account_balance -= amount


Salman = User("Salman Khatib", "salman.malkhatib@gmail.com")
Khalid = User("Khalid abo rob", "Khalid.aborob@gmail.com")
Mohammad = User("Mohammad rami", "mohammad.rami@gmail.com")

print(Salman.name)
print(Salman.email)
print(Salman.account_balance)
Salman.make_deposit(100)
Salman.make_deposit(200)
Salman.make_deposit(300)
Salman.make_withdrawl(100)
Salman.display_user_balance()
Khalid.make_deposit(1000)
Khalid.make_deposit(1000)
Khalid.make_withdrawl(100)
Khalid.make_withdrawl(100)
Khalid.display_user_balance()
Mohammad.make_deposit(10)
Mohammad.make_withdrawl(2)
Mohammad.make_withdrawl(2)
Mohammad.make_withdrawl(2)
Mohammad.display_user_balance()
Salman.transfer_money(Mohammad, 100)
print(Salman.account_balance)
print(Mohammad.account_balance)
