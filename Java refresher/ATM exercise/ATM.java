
    import java.util.ArrayList;
    import java.util.Scanner;
    
    public class ATM{
    
      public static void main(String args[]){
    
    
        ArrayList<CustomerClass> accounts = new ArrayList<CustomerClass>();
    
        CustomerClass customer1 = new CustomerClass(1, "Savings", 800);
        CustomerClass customer2 = new CustomerClass(2, "Checking", 1900);
        
    
        accounts.add(customer1);
        accounts.add(customer2);
        
    
    
        int customerID=3;
        String choice;
        int deposit;
        int withdraw;
        try (Scanner in = new Scanner(System.in)) {
            CustomerClass operation = new CustomerClass();
            boolean details = true;
   
            String accountType;
            int balance;
   
            while(details){
              System.out.println("Select a choice:");
              System.out.println("1. Existing customer");
              System.out.println("2. New customer");   
              System.out.println("3. Quit");
   
   
              String input = in.next();
   
                //existing user
                if(input.equals("1")){
   
                  System.out.println("Enter CustomerID: ");
                  customerID = in.nextInt();
   
   
                  System.out.println("Would you like to: ");
                  System.out.println("1. Deposit ");
                  System.out.println("2. Withdraw ");
                  System.out.println("3. Display account info ");
                  System.out.println("4. Check balance ");
   
                  choice = in.next();
   
                  if(choice.equals("1")){
                    System.out.println("How much would you like to deposit?");
                    deposit = in.nextInt();
                    operation.deposit(deposit);
                  }
   
                  else if (choice.equals("2")){
                   System.out.println("How much would you like to withdraw?");
                    withdraw = in.nextInt(); 
                    operation.withdraw(withdraw);
   
                  }
   
                  else if (choice.equals("3")){
                    operation.display(accounts.get(customerID));
                  }
   
                  else if (choice.equals("4"))
                    operation.balance(accounts.get(customerID));
   
                  else
                    System.out.println("Invalid");
                }
   
   
   
                //new user
                 else if(input.equals("2")){
                  //add new user to arraylist
   
                   int newID = customerID + 1;
   
                   System.out.println("Enter account type: ");
                   accountType = in.next(); 
                   System.out.println("Enter initial balance: ");
                   balance = in.nextInt(); 
   
                   System.out.println("Your customer ID will be: " + newID);
   
   
                   accounts.add(new CustomerClass(newID, accountType, balance));
   
   
                }
   
                else if(input.equals("3")){
   
                  System.out.println("Thanks for using this bank!");
                  details = false;
                }
   
   
                else{
   
                  System.out.println("Invalid");
   
                }
              }
        }
    
        }
    } 

