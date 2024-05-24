//STEP 1

function sortString(str) {
  return str.split("").sort().join("");
}

console.log(sortString("webmaster"));

//STEP 2

function capitalizeString(str) {
  let strArray = str.split(" ");
  let new_str = [];
  strArray.forEach((word) => {
    let capWord = word[0].toUpperCase() + word.slice(1);
    new_str.push(capWord);
  });

  return new_str.join(" ");
}

console.log(capitalizeString("the quick brown fox"));

//STEP 3

function numVowels(str) {
  let strArray = str.toLowerCase().split('');
  let counter = 0;

  strArray.forEach((char) => {
    switch (char) {
      case "a":
        counter++;
        break;
      case "e":
        counter++;
        break;
      case "i":
        counter++;
        break;
      case "o":
        counter++;
        break;
      case "u":
        counter++;
        break;
    }
  });

  console.log(counter);
}

numVowels("The quick brown fox");

//STEP 4





//STEP 5

function longestCountry(countryArr) {
    let longest = "";
    countryArr.forEach(country =>{
        if(longest.length < country.length) {
            longest = country;
        }
    });
    console.log(longest);
}

let countryArr = ["Australia", "Germany", "United States of America"];
longestCountry(countryArr);


