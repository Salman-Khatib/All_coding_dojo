# 1-Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
# def biggie_size(list):
#     for x in range(len(list)):
#         if(list[x] > 0):
#             list[x] = 'big'
#     return list

# print(biggie_size([1, 2, 3, -1, -4, 2]))


# print(big_size([2, 3, -1, 2, -1]))
# 2-Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
# def count_positive(list):
#     count = 0
#     for x in range(len(list)):
#         if(list[x] > 0):
#             count += 1
#     list[len(list)-1] = count
#     return list
# print(count_positive([1, 2, 3, -4, -2, 2]))
# 3-Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1, 2, 3, 4]) should return 10
# Example: sum_total([6, 3, -2]) should return 7
# def sum_total(list):
#     sum = list[0]
#     for x in range(1, len(list)):
#         sum += list[x]
#     return sum


# print(sum_total([1, 2, 3, 4, 5]))
# 4-Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5
# def Average(list):
#     sum = list[0]
#     for x in range(1, len(list)):
#         sum += list[x]
#     average = sum / len(list)
#     return average


# print(Average([1, 2, 3, 4]))
# 5-Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
# def length_list(list):
#     return len(list)


# print(length_list([1, 2, 3, 4]))
# print(length_list([]))
# 6-Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
# def Minimum(list):
#     if(len(list) == 0):
#         return False
#     min = list[0]
#     for x in range(1, len(list)):
#         if(list[x] < min):
#             min = list[x]
#     return min


# print(Minimum([1, 2, 3, 4, 5, 6, -3]))

# 7-Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

# def maximum(list):
#     if(len(list) == 0):
#         return False
#     max = list[0]
#     for x in range(1, len(list)):
#         if(list[x] > max):
#             max = list[x]
#     return max


# print(maximum([25, 2, 4, -1]))

# 8-Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

# def ultimate_analysis(list):
#     max = list[0]
#     min = list[0]
#     sum = list[0]
#     direct = {}
#     for x in range(1, len(list)):
#         if(list[x] > max):
#             max = list[x]
#         if(list[x] < min):
#             min = list[x]
#         sum += list[x]
#     direct = {"sumTotal": sum, "average": sum /
#               len(list), "minimum": min, "maximum": max, "length": len(list)}
#     return direct


# print(ultimate_analysis([37, 2, 1, -9]))
# 9-Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37, 2, 1, -9]) should return [-9, 1, 2, 37]

# def reverse_list(array):
#     for i in range((len(array)-1) // 2):
#         temp = array[i]
#         array[i] = array[len(array)-1-i]
#         array[len(array)-1-i] = temp
#     return array


# print(reverse_list([1, 2, 3, 4, 5]))
