
public class Details {
    
    String name;
 int number;
    public Details(String name, int number) {
        this.name=name;
       this. number=number;
       
        
    }
    public static void main(String[] args){
        Details[] details=new Details[4];
        details[0]=new Details("one",1);
        details[1]=new Details("two",2);
        details[2]=new Details("three",3);
        details[3]=new Details("four",4);
        for(int i=0;i<details.length;i++){
            System.out.println(details[i].name);
            System.out.println(details[i].number);
        }
        for(Details a:details){
            System.out.println(a.name);
            System.out.println(a.number);
        }
        
    } 
    
        

}
    

