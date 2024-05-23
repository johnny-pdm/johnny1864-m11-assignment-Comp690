//STEP 1

let userName = window.prompt("What is your Name?");
window.alert('Your name length is ' + userName.length);

//STEP 2

let userName2 = window.prompt("What is your Name?");
let stringIndex = +window.prompt("Enter Number");
window.alert('Your name length is ' + userName2[stringIndex] );

//STEP 3

let userFistName = window.prompt("What is your first name?");
let userLastName = window.prompt("What is your last name?");
let fullname = userFistName.concat(userLastName);
window.alert('Your name is ' + fullname );

//STEP 4

const str = "The quick brown fox jumps over the lazy dog";
let foxIndex = str.indexOf('fox');
 window.alert(foxIndex);


//STEP 5

const str2 = "The quick brown fox jumps over the lazy dog";
let foxLastIndex = str2.lastIndexOf('fox');
window.alert(foxLastIndex);

//STEP 6

const str3 = "The quick brown fox jumps over the lazy dog";
let word = window.prompt("Enter Word");
window.alert(str3.replace('the lazy dog', word));

//STEP 7

const str4 = "The quick brown fox jumps over the lazy dog";
let word2 = window.prompt("Enter Word");
let search = str4.search(word2)
window.alert(search);

//STEP 8

const old_str = "The quick brown fox jumps over the lazy dog";
let strIndex = old_str.indexOf('the lazy dog');
let new_str = old_str.substring(strIndex);
window.alert(new_str);

//STEP 9

const old_str2 = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
let new_str2 = old_str2.toLowerCase().trim();
window.alert(new_str2);

//STEP 10

const old_str3 = "The quick brown fox jumps over the lazy dog";
let strArray = old_str3.split(" ");
let new_str3 = [];

strArray.forEach(word => {
    let capWord = word[0].toUpperCase() + word.slice(1);
    new_str3.push(capWord);
});

new_str3 = new_str3.join(' ');

alert(new_str3);

