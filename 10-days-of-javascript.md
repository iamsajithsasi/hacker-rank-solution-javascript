# Day 0
### Hello, World!
```
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable); 
}
```
### Data Types
```
const firstInteger = 4;
const firstString = 'HackerRank ';
console.log(parseInt(firstInteger) + parseInt(secondInteger));
console.log(Number(firstDecimal) + Number(secondDecimal));
console.log(firstString + secondString); 

```
# Day 1

### Arithmetic Operators

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

### Functions

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

### Let and Const
```
    let rad = readLine();
    const pi = Math.PI;

    // Print the area of the circle:
    console.log(pi * rad * rad)

    // Print the perimeter of the circle:
    console.log(2 * pi * rad)
```

# Day 2
### Conditional Statements: If-Else

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

### Conditional Statements: Switch

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

### Loops

```
function vowelsAndConsonants(s) {
    let vowels = "";
    let constants = "";

    <!-- let vow_check = "aeiou"; // method 2 -->
    
    for(let i = 0; i < s.length; i++) {
      if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
      <!-- if(vow_check.includes(s[i])) { // method 2 -->
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

# Day 3
### Arrays

```
function getSecondLargest(nums) {
    // Complete the function
    
    let nums_s = nums.sort((a,b) => a - b);
    let st = [...new Set(nums_s)];
    return st[st.length - 2]
}
```
### Try, Catch, and Finally
```
function reverseString(s) {
    try {
     console.log(s.split("").reverse().join(""))
    } catch(e) {
        console.log(e.message);
        console.log(s)
    }
}
```

### Throw
```
function isPositive(a) {
    if(a > 0) {
        return 'YES'
    } else if (a == 0) {
        throw Error("Zero Error");
    } else if (a < 0) {
        throw Error("Negative Error");
    }
}
```

# Day 4
### Create a Rectangle Object

```
function Rectangle(a, b) {
    let perm = 2*(a+b);
    let area = a*b;
    
    return { 
        length: a,
        width: b,
        perimeter: perm,
        area: area
    };
}

```

### Count Objects

```
function getCount(objects) {
    let flt = objects.filter(item => item.x === item.y)
    return flt.length;
}
```


### Classes

```
class Polygon {
    
    constructor(array) {
        this.array = array;
    }
    
    perimeter() {
        let op = 0;
        for (let i = 0; i < this.array.length; i++) {
            op += this.array[i]
        }
        return op;
    }
}
let triangle = new Polygon([3, 4, 5]);
```
# Day 5

### Inheritance
```
Rectangle.prototype.area = function() {
    return this.w * this.h
}

class Square extends Rectangle {
    constructor(s) {
        super()
        this.w = s;
        this.h = s;
    }
}

```
### Template literals
```
function sides(literals, ...expressions) {    
    var area = expressions[0];
    var perimeter = expressions[1];
    
    var s1 = (perimeter + Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s1: " + s1);
    var s2 = (perimeter - Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s2: " + s2);
    var array = [s1, s2];
    array =  array.sort(function (a,b) {return a-b;});
    return array;
}
```
### Arrow Functions
```
function modifyArray(nums) {
    let mod = nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
    return mod;
}
```
# Day 6

### Bitwise operators
```
function getMaxLessThanK(n, k) {
    let maximum = 0;
    let current = -1;
    for (let i = 1; i < k; i++) 
    {
        for (let j = i + 1; j <= n; j++) 
        {
            current = i & j;
            if (current < k && current > maximum) 
            {
                maximum = current;
            }
        }
    }
    return maximum;
}
```
### Javascript Dates
```
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const day = new Date(dateString);
    switch(day.getDay()) {
        case 0:
            dayName = 'Sunday'
            break;
        case 1:
            dayName = 'Monday'
            break;
        case 2:
            dayName = 'Tuesday'
            break;
        case 3:
            dayName = 'Wednesday'
            break;
        case 4:
            dayName = 'Thursday'
            break;
        case 5:
            dayName = 'Friday'
            break;
        case 6:
            dayName = 'Saturday'
            break;
        default:
            dayName = 'Unknown'
            break;
    }
    return dayName;
}
```

# Day 7

### Regular Expressions 1
```
```

### Regular Expressions 2
```
```
### Regular Expressions 3
```
```

# Day 8
### Day 8: Create a Button
```
css:
#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}

JS:
let btn = document.querySelector('#btn');
function increment() {
    btn.innerHTML = parseInt(btn.innerHTML) + 1;
}

html:
<button id="btn" onClick="increment()">0</button>
```

### Buttons Container
```
```

# Day 9
### Binary Calculator
```
```
