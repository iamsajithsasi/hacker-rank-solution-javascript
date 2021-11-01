### Bubble Sort
```
array = [1,2,6,4,5];

isSorted = False
counter = 0

def swap(curr, nxt, arr):
  arr[curr], arr[nxt] = arr[nxt], arr[curr]


while not isSorted:
  isSorted = True
  
  for i in range(len(array) - 1 - counter):
    if array[i] > array[i+1]:
      swap(i, i+1, array)
      isSorted = False
  
  counter += 1

print("sorted array", array)
```