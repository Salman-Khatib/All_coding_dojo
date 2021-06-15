public class Dog extends Animal {
    String type="mammal";
    public void Dog(){
        String type="mammal";
        System.out.println("I am a dog");
    }
    
    public void display(){
         System.out.println("here is a Dog class");
         System.out.println("here is a animal class");
         
        
    }
    public void printMessage(){
        super.display();
        display();
    }
    public void printType(){
        System.out.println(this.type);
        System.out.println(super.type);
    }
}