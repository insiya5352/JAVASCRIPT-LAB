// Experiment 4
// Name: INSIYA HUSSAIN
// PRN: 1156
// Title: Function Types, Scope, Closures, Try-Catch & Palindrome Checker

let welcome = function () {
    console.log("Palindrome Checker Program.");
};

welcome();


let language = "JavaScript";    

function scopeDemo() {
    let topic = "Functions";  

    console.log("Language:", language);
    console.log("Topic:", topic);
}

scopeDemo();



function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Counter:", count);
    };
}

let c = counter();

c();
c();



function palindrome(word) {

    try {

        if (!word)
            throw "Input cannot be empty";

        let reverse = word.split("").reverse().join("");

        if (word.toLowerCase() === reverse.toLowerCase())
            console.log(word + " is a Palindrome.");
        else
            console.log(word + " is not a Palindrome.");

    }

    catch(error) {
        console.log("Error:", error);
    }

}

palindrome("madam");
