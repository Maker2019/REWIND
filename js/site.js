// Get the String from the page.
// Controll function
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
// Logic function.
function reverseString(userString){
    // Create empty array.
    let revString = [];

    // reverse a string using a for loop.
    for (let index = userString.length - 1; index >= 0; index--){
        revString += userString[index];
    }
    // Return reverse string.
    return revString;
}

//Display the reverse string to the user.
// View Function.
function displayString(revstring){
    //Write message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}