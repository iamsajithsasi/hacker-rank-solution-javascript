## Day 1: Data Types

```
// Declare second integer, double, and String variables.
    var s_i = 0;
    var s_f = 0;
    var str = "";

// Read and save an integer, double, and String to your variables.
    s_i = parseInt(readLine());
    s_f = parseFloat(readLine());
    str = readLine();

// Print the sum of both integer variables on a new line.
    console.log(i + s_i)

// Print the sum of the double variables on a new line.
    console.log((d + s_f).toFixed(1))
    
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
    console.log(s + str)
```

## Day 2: Operators

```
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    
    let mc = meal_cost + ((tip_percent / 100) * meal_cost) + ((tax_percent / 100) * meal_cost) 
    
    console.log(Math.round(mc));
}
```
## Day 3: Intro to Conditional Statements

```
function main() {
    const N = parseInt(readLine().trim(), 10);
    if(N % 2 == 0) {
        // even
        if((N >= 2 && N <= 5) || (N > 20)) {
            console.log("Not Weird")
        } else {
            console.log("Weird")        
        }
    } else {
        // odd
        console.log("Weird")
    }
}
```

## Day 4: Day 4: Class vs. Instance
```
function Person(initialAge) {
    this.age = initialAge;

    if (initialAge < 0) {
        console.log('Age is not valid, setting age to 0.');
        this.age = 0;
    }

    this.amIOld = function () {
        if (this.age < 13) {
            console.log('You are young.');
        } else if (this.age < 18) {
            console.log('You are a teenager.')
        } else {
            console.log('You are old.')
        }
    };

    this.yearPasses = function () {
        // Increment the age of the person in here
        this.age++;
    };
}
```

## Day 5: Loops

```
function main() {
    const n = parseInt(readLine().trim(), 10);
    const max = 10;
    for(let i = 1; i <= max; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
}
```

## Day 6: Let's Review

```
function processData(input) {
    //Enter your code here
    
    let str = input.split("\n");
    let corr = str.shift();
    
    str.forEach(string => {
        let evenStr = "";
        let oddStr = "";
        for(let i = 0; i < string.length; i++) {
            if( i % 2 == 0) {
                evenStr += string[i]
            } else {
                oddStr += string[i]                
            }
        }
        console.log(evenStr + " " + oddStr)
    })
    
}
```

## Day 7: Arrays

```
function main() {
    console.log(arr.reverse().join(" "))
}
```

## Day 8: Dictionaries and Maps

```
```

## Day 9: Recursion 3

```
function factorial(n) {
    // Write your code here
    if(n == 1) { return n }
    return n * factorial(n-1);
}
```

## Day 10: Binary Numbers

```
```

## Day 11: 2D Arrays

```
```

## Day 12: Inheritance

```
```

## Day 13: Abstract Classes

```
```

## Day 14: Scope

```
```

## Day 15: Linked List

```
```

## Day 16: Exceptions - String to Integer

```
```

## Day 17: More Exceptions

```
```

## Day 18: Queues and Stacks

```
```

## Day 19: Interfaces

```
```

## Day 20: Sorting

```
```

## Day 21: Generics

```
```

## Day 22: Binary Search Trees

```
```

## Day 23: BST Level-Order Traversal

```
```

## Day 24: More Linked Lists

```
```

## Day 25: Running Time and Complexity

```
```

## Day 26: Nested Logic

```
```

## Day 27: Testing

```
```

## Day 28: RegEx, Patterns, and Intro to Databases

```
```

## Day 29: Bitwise AND

```
```