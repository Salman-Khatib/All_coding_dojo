

arr = [4, 5, 2, 5, 1, 7, 8, 3, 1, 6]


def insertion_sort(arr):

    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr


print(insertion_sort(arr))
