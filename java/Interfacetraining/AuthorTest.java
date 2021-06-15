public class AuthorTest {
    public static void main (String[] args){
        Author A1 = new Author("Salman","khatib","one");
        Author A2 = new Author("Mohammad","rami","two");
        Author A3 = new Author("Ghaled","Awada","three");
        A1.firstName.equalsTo(A2.firstName);

    }
}
