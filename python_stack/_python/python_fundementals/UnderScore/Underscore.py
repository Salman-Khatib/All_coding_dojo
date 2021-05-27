class Underscore:
    def map(self, iterable, callback):
        for i in range(len(iterable)):
            iterable[i] = callback(iterable[i])
        return iterable

    def find(self, iterable, callback):
        for i in range(len(iterable)):
            if (callback(iterable[i]) == True):
                return iterable[i]

    def filter(self, iterable, callback):
        arr = []
        for i in range(len(iterable)):
            if(callback(iterable[i]) == True):
                arr.append(iterable[i])
        return arr

    def reject(self, iterable, callback):
        arr = []
        for i in range(len(iterable)):
            if(callback(iterable[i]) == False):
                arr.append(iterable[i])
        return arr

        # your code
        # you just created a library with 4 methods!
        # let's create an instance of our class
# yes we are setting our instance to a variable that is an underscore
# evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above
arr = [1, 2, 3, 4]
Zolter = Underscore()
print(Zolter.map(arr, lambda x: x**2))
print(Zolter.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print(Zolter.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print(Zolter.find([1, 2, 3, 4, 5, 6], lambda x: x > 3))


string = "ABSCAASDA"
subString = "DA"


def count_substrings(string, substring):
    string_size = len(string)
    substring_size = len(substring)
    count = 0
    for i in range(0, string_size-substring_size+1):
        if string[i:i+substring_size] == substring:
            count += 1
    return count


print(count_substrings(string, subString))
