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

### Binary Search
```
def binarySearch(array, target):
  return binarySearchHelper(array, target, 0, len(array) - 1)

binarySearchHelper(array, target, left, right):
  if left > right:
    return -1
  
  mid = (left + right) // 2
  currNum = array[mid]

  if currNum == target:
    return mid
  elif currNum < target:
    return binarySearchHelper(array, target, left, middle - 1)
  else:
    return binarySearchHelper(array, target, middle + 1, right)
```

### Two Number Of Sum
```
# if array is not sorted
def twoNumberSum(array, target):
  nums = {}
  for num in array:
    matchNum = target - num
    if matchNum in nums:
      return [matchNum, num]
    else:
      nums[num] = True
  return []

# if array is sorted
def twoNumberSum(array, target):
  array.sort()
  left = 0
  right = len(array - 1)

  while left < right:
    currSum = array[left] + array[right]
    if currSum == target:
      return [array[left], array[right]]
    elif currSum < target
      left += 1
    else currSum > target
      right -= 1

  return []
```