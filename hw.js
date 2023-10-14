// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function grade_desc(score){
    if(score >= 80 && score <= 100 ){
        console.log("You did a good job")
    }
    else if(score >= 70 && score <= 79){
        console.log("Keep trying")
    }
    else if(score >= 60 && score <= 69){
        console.log("ehhhhh")
    }
    else if(score >= 55 && score <= 59){
        console.log("Not too good")
    }
    else if(score <= 55 && score >= 0){
        console.log("Bad Grade! But you'll get next time")
    }
    else{
        console.log("Not a valid score")
    }
}
grade_desc(78)


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

console.log("----------------------------------------------------------------------");


function multiples(multiple,num){
    for(let i=multiple;i<=num;i++){
        if(i%multiple==0){
            console.log(i)
        }
    }
}
multiples(10,50)

console.log("----------------------------------------------------------------------");


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function count_quarters(bill_amt,itm_price){
    let change_ret = bill_amt - itm_price;
    change_ret *= 4;
    return change_ret;
}
console.log("No of quarters : "+count_quarters(10,7));

console.log("----------------------------------------------------------------------");

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

    function count_bills(amt_paid,amt_cost){
        let denominations = [100,50,20,10,5,1];
        let change = amt_paid - amt_cost;
        let bill_cntr = 0;
        for(let denomination of denominations ){
            if(change >= denomination){
                bill_cntr += calculate_denom(denomination,change);
                change = change%denomination;
            }
        }  
        return bill_cntr;  
    }
    function calculate_denom(denom,change){
        return Math.floor(change/denom);
    }
    console.log("No. of bills received in change : "+count_bills(100,6));

    console.log("----------------------------------------------------------------------");

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
    

    function FizzBuzz(limit){
        for(let i=0;i<=limit;i++)
        {
            if(i % 5 === 0 && i%3 === 0){
                console.log("FizzBuzz");
            }
            else if(i%3 == 0){
                console.log("Fizz");
            }
            else if(i%5 === 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }
    }

    FizzBuzz(20);

