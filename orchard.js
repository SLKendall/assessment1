///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0

for (i = 0; i < fujiAcres.length; i++){
    
    totalAcres += fujiAcres[i];
    //console.log(totalAcres);
}
for (i = 0; i < galaAcres.length; i++){
    
    totalAcres += galaAcres[i];
    //console.log(totalAcres);
}
for (i = 0; i < pinkAcres.length; i++){
    
    totalAcres += pinkAcres[i];
    //console.log(totalAcres);
}

console.log(totalAcres)

// Using the for loop format I simply created 3 for loops that would run through each array and update the totalAcres value everytime they moved along the index. 
// I feel like the code could have been condensed to only one loop but I wasn't sure how to iterate between the 3 different arrays withough the code getting too messy
// This was a simple solution that really only required I write the first for loop out and then just alt+shift the code twice and adjust the respective array calls
// I also console logged the individual for loops to ensure they were working properly before moving on but I commented them out to keep the terminal clean

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / fujiAcres.length

console.log(averageDailyAcres)

// To keep the variables dynamic, I used the length of the fujiAcres array rather than just put 7 in case any adjustments were made to the array such as if they didn't pick during one of those days.
// I only used fujiAcres since I assume all the differnet apple fields were picked on the same days of the week rather than each apple variant being picked on seperate weeks.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    days += 1
    //console.log(days)
    acresLeft -= averageDailyAcres
    //console.log(acresLeft)
}

console.log(days)

// Pretty self explanatory. Set the while condition to be acresLeft > 0 since the amount of work left to do in the acres is what determines how many days are estimated to finish the work
// I commented out the seperate aspects of the while loop and was a bit alarmed when I got back a negative number. But it was from averageDailyAcres being subtracted from acresLeft
// and it not being zero. As long as days worked properly and the while loop ended after going past 0, it didn't matter that I got a negative return

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

 let fujiTons = fujiAcres.slice()
 let galaTons = galaAcres.slice()
 let pinkTons = pinkAcres.slice()

 //console.log(fujiTons, galaTons, pinkTons)
 //Just a console log to double check the slices worked properlly

 for (i = 0; i < fujiTons.length; i++){
    
    fujiTons[i] = fujiAcres[i] * 6.5;
    //console.log(fujiTons);
 }
 for (i = 0; i < galaTons.length; i++){
    
    galaTons[i] = galaAcres[i] * 6.5;
    //console.log(galaTons);
 }
 for (i = 0; i < pinkTons.length; i++){
    
    pinkTons[i] = pinkAcres[i] * 6.5;
    //console.log(pinkTons);
 }

console.log(fujiTons, galaTons, pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0

for (i = 0; i < fujiTons.length; i++){
    
    fujiPounds += fujiTons[i] * 2000;
}

console.log("Fuji are ", fujiPounds);

let galaPounds = 0

for (i = 0; i < galaTons.length; i++){
    
    galaPounds += galaTons[i] * 2000;
}

console.log("Gala are ", galaPounds);

let pinkPounds = 0

for (i = 0; i < pinkTons.length; i++){
    
    pinkPounds += pinkTons[i] * 2000;
}

console.log("Pinks are ", pinkPounds);

//The same process of sorting through the arrays as problem 1 except I added a multiplier of 2000 at the end of the for loop in order to conver from tons to pounds




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("The profits for Fujis, Galas, and Pinks respectively are:", fujiProfit, galaProfit, pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

const totalProfit = fujiProfit + galaProfit + pinkProfit

console.log("Total profit is:", totalProfit)