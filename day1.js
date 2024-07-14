// Day 1: Variables and Data types
// Task and Activities:
// Activity 1: Variable Declaration
    // Task 1: Declare a variable using var, assign it a number, and log the value on console.
    var variable1 = 10;
    console.log(variable1);

    // Task 2: Declare a variable using let, assign it a string, and log the value on console.
    let variable2 = "Abhi";
    console.log(variable2);


// Activity 2: Constant Declaration
    // Task 3: Declare a variable using cosnt, assign it a boolean value, and log the value on console.
    const variable3 = false;
    console.log(variable3);

    // Activity 3: Data types
    // Task 4: Create variables of different data types(number,string, boolean,
    // object, array) and log each variable's type using the typeof operator.
    let rollNumber = 1  // Number
    let myName = "Abhishek"     // String 
    let passed = true   // Boolean

    console.table([rollNumber,myName,passed])

    let myObj = {
        Roll_Number: rollNumber,
        Name: myName,
        Status: passed,
    }

    console.log(myObj)

    let myList = [rollNumber,myName,passed]
    
    console.log(myList)
    
    // types
    console.log("Data           Datatype")
    console.log("Roll_Number    ",typeof rollNumber)
    console.log("My_Name        ",typeof myName)
    console.log("Passed_status  ",typeof passed)
    console.log("Detail_Object  ",typeof myObj)
    console.log("Detail_List    ", typeof myList)
    
// Activity 4: Reassingining Variables
    // Task 5: Declare a variable using let, assign it an initial value, reassign a new
    // value, and log both values to the console.
    console.log("\nReassigning")
    let num = 12;
    console.log(num)
    num = 18
    console.log(num)

// Activity 5: Understanding const
    // Task 6: Try reassigning a variable declared with const and observe the error.
    console.log("\nConstant Handling")
    const pi = 3.14
    console.log(pi)
    // pi = 4                      // this will show the error while compiling
    console.log(pi) 
    
    

    
// Reature Request:
    // 1. Variable Types Console Log: Write a script that declares variables of different 
    //    data types and logs both the value and type of each variable to the console.
     
    // 2. Create a script that demonstrates the difference in behavior between let and 
    //    const when it comes to reassignment.

// Achievement:
    // By the end of these activities, you will:
        // Know how to declare variables using var, let, and const.
        // Understand the different data types in JavaScript.
        // Be able to use the typeof operator to identify the data type of a variable.
        // Understand the concept of variable reassignment and the immutability of const variables.