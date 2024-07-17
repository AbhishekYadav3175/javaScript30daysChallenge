// Day 3: Control Structures
    // Tasks/Activities:
        //Activity 1: If-Else statements
            // Task 1: WAP to check if a number is positive, negative, or zero, and log the result to the console.
            let num = -5
            if(num<0){
                console.log("Negative number")
            }else if(num>0){
                console.log("Positive Number")
            }else{
                console.log("Zero")
            }
            // Task 2: WAP to check if a person is eligible to vote (age>=18) and log the result to the console.
            let age = 23
            if(age>=18){
                console.log("You are eligible to Vote")
            }else{
                console.log("You are not eligible to Vote")
            }

        //Activity 2: Nested If-Else statements
            // Task 3: Write a program to find the largest of three numbers using nested if-else statements.
            let x = 2, y = 5, z = 1
            if(x>y && x>z){
                console.log("Largest Number: ",x)
            }else{
                if(y>z){
                    console.log("Largest Number: ",y)
                }else{
                    console.log("Largest Number: ",z)
                }
            }

        //Activity 3: Switch Case
            // Task 4: WAP that uses a switch case determine the day of the week based on a number(1-7) and log the day name to the console.
            let dayNumber = 3
            switch(dayNumber){
                case 1: console.log("Monday")
                    break
                case 2: console.log("Tueday")
                    break
                case 3: console.log("Wednesday")
                    break
                case 4: console.log("Thrusday")
                    break
                case 5: console.log("Friday")
                    break
                case 6: console.log("Saturday")
                    break
                case 7: console.log("Sunday")
                    break
                default: console.log("Invalid Number")  
            }
            // Task 5: WAP that uses a switch case to assign a grade ('a','b','c','d','f') based on a score and log the grade to the console.
            let score = 45
            switch (true) {
                case (score>80): console.log("A+")                    
                    break;
                case (score>65): console.log("B+")                    
                    break;
                case (score>45): console.log("C+")                    
                    break;
                case (score>33): console.log("D+")                    
                    break;
                case (score>0): console.log("F")                    
                    break;
                default: console.log("You enter something wrong.")
                    break;
            }

        //Activity 4: Conditional (Ternary) Operator
            // Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result to the console.
            let number = 3
            number = (3%2==0)? console.log("Even Number") : console.log("Odd Number")
        //Activity 5: Combining Conditions
            // Task 7: WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless alos divisible by 400) and log the result to the console.
            let year = 1900
            if(year%100 == 0){
                if(year%400 == 0){
                    console.log(year," is a Leap Year")
                }else{
                    console.log(year," is not a Leap Year")
                }
            }else{
                if(year%4 == 0){
                    console.log(year," is a Leap Year")
                }else{
                    console.log(year," is not a Leap Year")
                }
            }

// Feature Request:
    // 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
    // 2. Voting Eligibility Script: Create a script to check if a person is eligible to bote based on their age and log the result.
    // 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number(1-7) and logs the day name.
    // 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
    // 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
    // Implement and understand basic if-else control flow.
    // Use nested if-else statements to handle multiple conditions.
    // Utilize switch cases for control flow based on specific values.
    // Apply the ternary operator for concise condition checking.
    // Combine multiple conditions to solve more complex problems.