arr = [12, 4, 1, 3, 6, 2, 7, 5]


def selection_sort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if(arr[min_index] > arr[j]):
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr


print(selection_sort(arr))
