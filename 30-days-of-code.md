### Day 1: Data Types

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

### Day 2: Operators

```
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    
    let mc = meal_cost + ((tip_percent / 100) * meal_cost) + ((tax_percent / 100) * meal_cost) 
    
    console.log(Math.round(mc));
}
```
### Day 3: Intro to Conditional Statements

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