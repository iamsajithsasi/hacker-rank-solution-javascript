## Introduction

```
# Say "Hello, World!" With Python
print("Hello, World!")


# Python If-Else
if __name__ == '__main__':
    n = int(input().strip())
    if(n % 2 == 0):
        if(n >= 2 and n <= 5):
            print('Not Weird')
        elif(n >= 6 and n <= 20):
            print('Weird')
        elif(n > 20):
            print('Not Weird')          
    else:
        print("Weird")


# Arithmetic Operators
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a + b)
    print(a - b)
    print(a * b)


# Python: Division
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a // b)
    print(a / b)

# Loops
if __name__ == '__main__':
    n = int(input())
    
    for i in range(0,n):
        print(i * i)

    (or)

    i = 0
    while (i < n):
        print(i * i)
        i+=1

# Write a function
def is_leap(year):
    leap = False
    
    # Write your logic here
    if year % 4 == 0:
        if year % 400 == 0 or year % 100 != 0:
            leap = True
    
    return leap

# Print Function
if __name__ == '__main__':
    n = int(input())
    op_str = ""
    for i in range(1, n + 1):
        op_str += str(i)
    print(op_str)
```