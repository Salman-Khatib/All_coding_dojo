from django.db import models

# Create your models here.


class User(models.Model):
    __tablename__ = "users"
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
    email_address = models.CharField(max_length=45)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"<User object: ({self.id}) {self.first_name} , {self.last_name} ,{self.email_address} ,{self.age} >"
