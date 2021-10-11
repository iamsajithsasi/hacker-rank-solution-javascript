### Day 0: Hello, World!
```
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable); 
}
```

### Day 1: Data Types
```
function getArea(length, width) {
    let area = length * width;
    // Write your code here
    
    return area;
}

function getPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    // Write your code here
    
    return perimeter;
}

```

### Day 1: Functions

Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e.,  factorial).

```
function factorial(n) {
    let sm = 1;
    for(let i = n; i > 1; i--) {
        sm = sm * i;
    }
    return sm;
}
```

### Day 1: Let and Const
```
    let rad = readLine();
    const pi = Math.PI;

    // Print the area of the circle:
    console.log(pi * rad * rad)

    // Print the perimeter of the circle:
    console.log(2 * pi * rad)
```

### Day 2: Conditional Statements: If-Else

```
function getGrade(score) {
    let grade;
    // Write your code here
    
    if(score > 25 && score <= 30) {
        grade = 'A'
    } else if (score > 20) {
        grade = "B"
    } else if (score > 15) {
        grade = "C"
    } else if (score > 10) {
        grade = "D"
    } else if (score > 5) {
        grade = "E"
    } else if (score > 0) {
        grade = "F"
    }
    return grade;
}
```

### Day 2: Conditional Statements: Switch

```
function getLetter(s) {
    let letter;
    let firstString = s[0].toLowerCase();
    // Write your code here
    switch(firstString) {        
        case "a" || "e" || "i" || "o" || "u":
            letter = "A"
            break;
        case "b" || "c" || "d" || "f" || "g":
            letter = "B"
            break;     
        case "h" || "j" || "k" || "l" ||  "m":
            letter = "C"
            break;            
        default:
            letter = "D"
    }
        
    return letter;
}
```

### Day 2: Loops

```
function vowelsAndConsonants(s) {
    let vowels = "";
    let constants = "";
    
    for(let i = 0; i < s.length; i++) {
      if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
        vowels += s[i];
      } else {
        constants += s[i];          
      }
    }
    
    let combinedText = vowels.concat(constants);
    for(let i = 0; i < combinedText.length; i++) {
        console.log(combinedText[i])
    }
    
}
```

```
function vowelsAndConsonants(s) {
    let vowels = "";
    let constants = "";
    let vow_check = "aeiou"
    
    for(let i = 0; i < s.length; i++) {
      if(vow_check.includes(s[i])) {
        vowels += s[i];
      } else {
        constants += s[i];          
      }
    }
    
    let combinedText = vowels.concat(constants);
    for(let i = 0; i < combinedText.length; i++) {
        console.log(combinedText[i])
    }
    
}
```