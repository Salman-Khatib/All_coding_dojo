
public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount user1 = new BankAccount();
		BankAccount user2 = new BankAccount();
		BankAccount user3 = new BankAccount();
		System.out.println(user1.checkingBalance());
		user1.totalMoneyCheckingAndSaving();
		System.out.println(user1.getAccountNumber());
		user1.depositMoney(100, 9999);
		System.out.println("checking Balance : " + user1.checkingBalance());
		System.out.println("saving Balance : " + user1.savingBalance());
		System.out.println("Total Money : " + user1.getTotalMoneyInAccount());
		user1.withdrawMoney( 50 , 99);
		System.out.println("checking Balance : " + user1.checkingBalance());
		System.out.println("saving Balance : " + user1.savingBalance());
		user1.withdrawMoney( 501231312 , 9912313);
		user1.totalMoneyCheckingAndSaving();
		
		
	}

}
