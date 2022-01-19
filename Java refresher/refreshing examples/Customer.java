public class Customer {
  
      String name="prakitha";
       String password="Praki";


     Customer(String name,String password){
       name="a";
       password="b";
     }
    
    
    public static void main(String[] args){
   
      Boolean  login (String c,String d){
       if((name==c && password==d)){
           System.out.println("login accessed");
           return true;
       } else{
           System.out.println("access denined");
           return false;
       }
      
   
          


}
}