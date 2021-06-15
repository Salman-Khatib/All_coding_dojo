import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
public class BankAccount {
	private String accountNumber;
	private double checkingBalance;
	private double savingBalance;
	public static int numberOfAccounts;
	public static double TotalMoneyInAccount;
//	public BankAccount(double checkingBalance, double savingBalance) {
//		this.accountNumber = tenDigitRandom();
//		this.checkingBalance = checkingBalance;
//		this.savingBalance = savingBalance;
//		numberOfAccounts++;
//		TotalMoneyInAccount = checkingBalance + savingBalance;
//		
//	}
	public BankAccount() {
		this.accountNumber = tenDigitRandom();
		this.checkingBalance = 0;
		this.savingBalance = 0;
		numberOfAccounts++;
		TotalMoneyInAccount = checkingBalance + savingBalance;
		
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	private String tenDigitRandom() {
		Random r = new Random();
		String subStr = "";
		for (int i =0; i <10;i++) {
			subStr += r.nextInt(10);
		}
		return subStr;
	}
	public double checkingBalance() {
		return checkingBalance;
	}
	public double savingBalance() {
		return savingBalance;
	}
	public double getTotalMoneyInAccount() {
		return TotalMoneyInAccount;
	}
	public void depositMoney(int moneyInSaving, int moneyInChecking) {
		savingBalance += moneyInSaving;
		checkingBalance += moneyInChecking;
		
		TotalMoneyInAccount += moneyInChecking + moneyInSaving;
	}
	public void withdrawMoney(int withdrawSaving, int withdrawChecking) {
		if (savingBalance-withdrawSaving >= 0) {
			savingBalance -= withdrawSaving;
		}
		else {
			System.out.println("Not enough money in the saving account to withdraw");
		}
		if (checkingBalance-withdrawChecking >= 0) {
			checkingBalance -= withdrawChecking;
		}
		else {
			System.out.println("Not enough money in the checking account to withdraw");
		}
		
		
	}
	public void totalMoneyCheckingAndSaving() {
		System.out.println("check account balance : " + checkingBalance + " save account balance " + savingBalance) ;
		
	}
	
	
}
