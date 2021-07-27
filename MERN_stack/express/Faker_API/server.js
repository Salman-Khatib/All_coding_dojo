
const express = require("express");
const app = express();
const faker = require("faker");

class User {
    constructor(){

        this.id = faker.datatype.uuid() ;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email =faker.internet.email() ;
        this.password = faker.internet.password();

    }
    

}

class Company {


    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.name.findName();
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.cityName(),
            state : faker.address.state() ,
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }

    }
  
}


var user = new User();
app.get("/api/users/new", (req, res) => {
    res.json( user );
  });


var companyXD = new Company();
app.get("/api/companies/new", (req, res) => {
    res.json( companyXD );
  });




var lmao = {
    company : new Company(),
    users : new User()
}
app.get("/api/user/company", (req, res) => {
    res.json( lmao );
  });





const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);