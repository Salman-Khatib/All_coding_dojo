public class Author implements Comparable <Author> {
    private String firstName;
    private String lastName;
    private String bookName;
    public Author(String firstName, String lastName, String bookName){ //press Source and press generate constructor from fields
    // and this will be generated automatically
        this.firstName = firstName;
        this.lastName= lastName;
        this.bookName = bookName;
    }
    @override
    public int compareTo(Author o ){
        // u press on the class and this will be auto generated in STS
        return this.firstName.compareTo(o.firstName);
    }
}
