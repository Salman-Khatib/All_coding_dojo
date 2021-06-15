public class CalculatorTest {
    public static void main (String[] args){
        Calculator object1 = new Calculator(10,5);
        object1.setOperand('+');
        object1.performOperation();
        object1.getResults();
        object1.setOperand('-');
        object1.performOperation();
        object1.getResults();


    }
}
