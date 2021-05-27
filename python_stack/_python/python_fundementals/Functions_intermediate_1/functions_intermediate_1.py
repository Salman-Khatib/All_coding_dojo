import random


def randInt(min=None, max=None):
    if(min == None and max == None):
        num = int(random.random() * 100)
        return num
    if(min == None and max != None):
        num = int(random.random() * max)
        return num
    if(min != None and max == None):
        num = int(random.random()*50+50)
        return num
    if(min != None and max != None):
        if(min > max):
            num = int(random.random()*(min-max)+max)  # extreme case
            return num
        num = int(random.random()*(max-min)+min)
        return num


print(randInt()) 		          # should print a random integer between 0 to 100
# should print a random integer between 0 to 50
print(randInt(max=50))
# should print a random integer between 50 to 100
print(randInt(min=50))
# should print a random integer between 50 and 500
print(randInt(min=50, max=500))
