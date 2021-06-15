import java.lang.Math;
public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB){
        int x = (legA*legA) + (legB*legB);
        double squareRoot = Math.sqrt(x);
        return  squareRoot;
    }
}
