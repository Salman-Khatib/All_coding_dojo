public class Calculator {
    private double operandOne;
    private double operandTwo;
    private char operand;
    private double result;
    

    
    public Calculator(){

    }
    // Constructor if u want to give the values of attributes when u initalize new object
    public Calculator(double operandOne, double operandTwo){
        this.operandOne = operandOne;
        this.operandTwo = operandTwo;
    }
    //Setters and getters for the attributes
    public void setOperandOne(double operandOne){
        this.operandOne = operandOne;
    }
    public double getOperandOne(){
        return operandOne;
    }
    public void setOperandTwo(double operandTwo){
        this.operandTwo = operandTwo;
    }
    public double getOperandTwo(){
        return operandTwo;

    }
    public void setOperand(char operand){
        this.operand = operand ;
    }

    public void performOperation(){
        if(operand == '+'){
           result = operandOne + operandTwo;
        }
        else if (operand == '-'){
            result = operandOne - operandTwo;
        }
    }

     public void getResults(){
        System.out.println(result);
        
    } 
}
