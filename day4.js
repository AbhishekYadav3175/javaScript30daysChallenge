// Day 4: Loops
// Tasks/Activities
    // Activity 1: For Loop
        // Task 1: WAP to print numbers from 1 to 10 using a for loop.
        for(let i = 0; i<=10 ; ++i){
            console.log(i)
        }
        // Task 2: WAP to print the multiplication table of 5 using a for loop.
        for(let i=0; i<=10 ; ++i){
            console.log("5 x ",i," = ",5*i)
        }
    // Activity 2: While Loop
        // Task 3: WAP to calculate the sun of numbers from 1 to 10 using a while loop.
        let i = 0
        while (i<10) {
            console.log(++i)
        }
        // Task 4: WAP to print numbers from 10 to 1 using a while loop.
        let j = 10
        while(j>0){
            console.log(j--)
        }

    // Activity 3: Do...While Loop
        // Task 5: WAP to print numbers from 1 to 5 using a do...while loop.
        let k = 1
        do{
            console.log(k++)
        }while(k<=5)
        // Task 6: WAP to calculate the factorial of a number using a do...while loop.
        let factorial = 1
        let num = 10
        do{
            factorial = factorial * num--
        }while(num>0)
        console.log(factorial)

    // Activity 4: Nested Loops
        // Task 7: WAP to print a pattern using nested for loops:
                // *
                // * *
                // * * *
                // * * * *
        for(let i=1; i<=4 ; i++){
            for(let j=1 ; j<=i ; j++){
                process.stdout.write("* ")    // for printing without newline 
            }
            console.log()
        }
    // Activity 5: Loop Control Statements
        // Task 8: WAP to print numbers from 1 to 10, but skip the number 5 using the continue statement.
        for(let i=1; i<=10 ; i++){
            if(i==5){
                continue
            }else{
                console.log(i)
            }
        }
        // Task 9: WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
        for(let i=1 ; i<=10 ; i++){
            if(i==7){
                break
            }else{
                console.log(i)
            }
        }

// Feature Request:
    // 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
    // 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
    // 3. Patteern Printing Script: Write a script that prints a pattern of stars using nested loops.
    // 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
    // 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

// Achievement:
    // By the end of these activities, students will:
        // Understand and use for loops to iterate over a sequence of numbers.
        // Utilize while looops for iteration based on a condition.
        // Apply do...while loops to ensure the loop body is executed at least once.
        // Implement nested loops to solve more complex problems.
        // Use loop control statements(break and continue) to control the flow of loops.
