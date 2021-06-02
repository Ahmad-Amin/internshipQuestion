const DividingNumber = (left, right) => {
    var Answers = [];
    for(var i = left; i <= right; i++){

        // No need to Check if the digit is single-digit becuase it is 
        // obvious that they are divided by themself with remainder ZERO (0)

        if( i >= 1 && i <= 9){          
            Answers.push(i);    // Pushing the Value in the Answers Array 
        }else{          
            var j = 0;      // Initilize the variable to get individual digit from the big digits
            var count = 0;      // count vairable initialized to check if all the individual digits divide the number or not
            const value = i.toString();     // I used special way to get individual digit. Instead of dividing them, I convert it to the string and used 'j' variable to get individual characters from the string of digits

            while(j < value.length){    // It will run till all of the individual digits are checked
                if(i % Number(value[j]) === 0){     // checking if the individual digit and digit divide and gave remainder ZERO (0) like 128 % 1 === 0
                    count++;            
                }
                j++;
            }
            if(count === value.length){     // Checking if all digits self divide the number or not
                Answers.push(i);        // push the final result to the Answers Array
            }
        }
    }
    return Answers;     // Return the Answers Array
}

var left =  47;
var right = 85;

var selfDividingNumber = DividingNumber(left, right);       // Call the Function and Store the Value in the variable
console.log(selfDividingNumber);        // Printing the Result