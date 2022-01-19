import java.util.Scanner; 
public class CustomerClass {
    

        String accountType, info; 
        int customerID, balance, amount;
        Scanner input = new Scanner(System.in);
      
      
        public CustomerClass(int customerID, String accountType, int balance){
          this.accountType = accountType;
          this.balance = balance; 
          this.amount = amount; 
        }
      
        public CustomerClass() {
        }

        public int deposit(int amount){
      
          amount = input.nextInt();
          if (amount >= 500) {
            System.out.println("Invalid");
      
          }
          else{
            balance = balance + amount;
      
          }
          return balance;
        }
      
    public int withdraw(int amount){

        if (balance < amount) {
          System.out.println("Invalid amount.");
        }
        else if (amount >= 500) {
          System.out.println("Invalid");
        }
        else {
          balance = balance - amount;
    
        }
        return balance;
      }
    
    
      public void display(CustomerClass customer) {
        System.out.println("Account Type:" + customer.accountType); 
        System.out.println("Balance:" + customer.balance);
    
      }
    
      public  void balance(CustomerClass customer) {
        System.out.println("Balance:" + customer.balance);
      }
    
    
    
    
    
    
}
