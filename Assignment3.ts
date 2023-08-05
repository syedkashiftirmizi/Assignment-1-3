
// Name: Syed Kashif Shah
// Roll Number: PIAIC213212
// Batch: 48
// Assignment: 3

console.log("بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ");

/*2.Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/

const personName: string = "Kashif";
let msg: string = `Hello ${personName}, would you like to learn some Python today?`;
console.log(msg);

/*3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function titleCase(val: string): string {
    let words: string[] = val.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
let learn: string = titleCase("i am learning typescript")
console.log(learn)

/* 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks: */

const author_Name: string = 'Steve Jobs';
const quote = 'The only way to do great work is to love what you do.';
console.log(`${author_Name} once said, "${quote}"`);

/* 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message. */

const famous_person = "Heraclitus";
const quote2 = "The only thing that is constant is change.";
const message = `${famous_person} once said, "${quote2}"`;
console.log(message);

/*6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

const person_name = "\n Syed Fazal \t"
console.log(person_name);
const noWhiteSpaces = person_name.trim();
console.log(noWhiteSpaces);

/* 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
Be sure to enclose your operations in print statements to see the results. 
8. You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.
*/

console.log(5 + 3); 
console.log(10 - 2); 
console.log(2 * 4); 
console.log(16 / 2);

/* 9. Favorite Number: Store your favorite number in a variable. 
Then, using that variable, create a message that reveals your favorite number. Print that message. */

const favNum = 5;
console.log(`My favorite Number is: ${favNum}`)

/*10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything 
specific to write because your programs are too simple at this point, just add your name and the current date at the top of each 
program file. Then write one sentence describing what the program does.*/

// const favNum = 5;

/* console.log(`My favorite Number is: ${favNum}`)
console.log(5 + 3); 
console.log(10 - 2); 
console.log(2 * 4); 
console.log(16 / 2); */

/* 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each 
element in the list, one at a time.*/

const names =["kashif", "umer", "fazal"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

/* 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name. */

console.log(`${names[0]}: Where are you going?`);
console.log(`${names[1]}: I will go with you?`);
console.log(`${names[2]}: Do you want to go with us?`);

/* 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a 
Honda motorcycle.” */

const favTransport = ["Honda", "Yamaha", "Kawasaki", "Suzuki"];

console.log(`I would like to own ${favTransport[0]} a motorcycle.`);
console.log(`I think ${favTransport[1]}  motorcycles are the most reliable.`);
console.log(`${favTransport[2]} motorcycles are the fastest.`);
console.log(`${favTransport[3]} motorcycles are the most affordable.`);

/* 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */

const guestList = ["Asad", "Umer", "Hafiz"];

function inviteGuest(guest: string) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

guestList.forEach(inviteGuest);

console.log(`Guest who can't come to dinner: ${guestList[2]}`)

/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.*/

guestList.pop();
guestList.push("Fazal");

console.log(guestList);
console .log("I have found new bigger dinner table.")
/* 16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

guestList.unshift("Husnain");
console.log(guestList);

guestList.splice(2, 0, "Sajid");
console.log(guestList);

guestList.push("Ali");
console.log(guestList);

/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people
 for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
have an empty list at the end of your program.*/

console.log("I can only invite two people because my new table didnot appeared.");
guestList.pop();
guestList.pop();
guestList.pop();
guestList.pop();
console.log(guestList)

console.log(`${guestList[0]} You are still invited`)
console.log(`${guestList[1]} You are still invited`)

guestList.pop();
guestList.pop();
console.log(guestList);

/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

const locations= ["Makkah", "Madina", "Switzerland", "Turkiya", "London",]
console.log("Orignal Arry of Locations:", locations);
const Alphabetical_order = locations.sort();
console.log("Alphabetical order:", Alphabetical_order);
console.log("Orignal Arry of Locations:", locations);
const revAlphabetical_order =  locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical order:",revAlphabetical_order);
console.log("Orignal Arry of Locations:", locations);
console.log("Reverse order:", locations.reverse());
console.log("Orignal order:", locations.reverse());
console.log("Alphabetical order:", locations.sort());
console.log("Alphabetical order:", locations.reverse());

/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the 
number of people you are inviting to dinner.*/

console.log(guestList);

/* 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, 
languages, or anything else you’d like. Write a program that creates a list containing these items. */

const thinkList = ["Siran Valley", "Hamliya Mountains", "Gawadar Ground"];
console.log(thinkList);

/* 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
 const teamObj = { "game": "Football", "Team": "Pakistan"}
 console.log(teamObj);

 /* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, 
 try to make one happen. Change an index in one of your programs  to produce an index error. 
 Make sure you correct the error before closing the program. */

// const thinkList = ["Siran Valley", "Hamliya Mountains", "Gawadar Ground"];
console.log(thinkList[3]);

/*23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let age = 25;

// Test 1
console.log("Is the age equal to 25? I predict True.");
console.log(age === 25);

// Test 2
console.log("Is the age greater than 20? I predict True.");
console.log(age > 20);

// Test 3
console.log("Is the age less than 30? I predict True.");
console.log(age < 30); 

// Test 4
console.log("Is the age not equal to 18? I predict True.");
console.log(age !== 18);

// Test 5
console.log("Is the age between 22 and 30 (inclusive)? I predict True.");
console.log(age >= 22 && age <= 30); 

// Test 6
console.log("Is the age equal to 18? I predict False.");
console.log(age === 18);
// Test 7
console.log("Is the age less than 20? I predict False.");
console.log(age < 20); 

// Test 8
console.log("Is the age greater than 30? I predict False.");
console.log(age > 30);

// Test 9
console.log("Is the age not equal to 25? I predict False.");
console.log(age !== 25);

// Test 10
console.log("Is the age between 30 and 40 (inclusive)? I predict False.");
console.log(age >= 30 && age <= 40);

/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

let favPak_place: string= "Islamabad";

console.log("Is the Favorite Place 'Islamabad'? I predict True.");
console.log(favPak_place === 'Islamabad');

console.log("Is the Favorite Place 'Karachi'? I predict False.");
console.log(favPak_place === 'Karachi');

console.log("Is the Favorite Place 'Islamabad'? I predict True.");
console.log(favPak_place.toLowerCase() === 'islamabad');

console.log("Is the Favorite Place 'Karachi'? I predict False.");
console.log(favPak_place.toLowerCase() === 'karachi');

// Numerical tests
let number = 42;

console.log("Is the number equal to 42? I predict True.");
console.log(number === 42);

console.log("Is the number less than 50? I predict True.");
console.log(number < 50); 
console.log("Is the number greater than or equal to 30? I predict True.");
console.log(number >= 30); 

console.log("Is the number not equal to 42? I predict False.");
console.log(number !== 42);

// Tests using "and" and "or" operators
const salary = 50000;
const yearsOfExperience = 3;

console.log("Is the salary greater than 40000 and experience greater than 2 years? I predict True.");
console.log(salary > 40000 && yearsOfExperience > 2); 

console.log("Is the salary less than 40000 or experience less than 2 years? I predict False.");
console.log(salary < 40000 || yearsOfExperience < 2); 

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' in the array? I predict False.");
console.log(fruits.includes('grape')); 

// Test whether an item is not in an array

console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape')); 

console.log("Is 'banana' not in the array? I predict False.");
console.log(!fruits.includes('banana'));

/*25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)*/

const alien_color: string = 'red';

if (alien_color === `green`){
    console.log("You earned 5 points")
} 

if (alien_color !== `green`){
    console.log("You earned 5 points")
} 

/*26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/
const alien_color2: string = 'yellow';

if (alien_color2 === 'green') {
    console.log("You earned 5 points")
}
else (alien_color2 !== 'green') 
    console.log("You earned 10 points")


/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

const alien_color3 = 'green';

if (alien_color3 === 'green') {
    console.log("You earned 5 points")
}
else if (alien_color3 === 'yellow') {
    console.log("You earned 10 points")
}

else if (alien_color3 === 'red') {
    console.log("You earned 15 points")
}

/*28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/

const personAge= 30;

if (personAge < 2) {
    console.log("You are baby")
}

else if (personAge >= 2 && personAge < 4 ) {
    console.log("You are toddler")
}
else if (personAge >= 4 && personAge < 13 ) {
    console.log("You are kid")
}
else if (personAge >= 13 && personAge < 20 ) {
    console.log("You are teenager")
}
else if (personAge >= 20 && personAge < 65 ) {
    console.log("You are adult")
}
else if (personAge >= 65 ) {
    console.log("You are elder")
}

/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

const favorite_fruits = ["Apple", "Oranges", "Banana",]

if (favorite_fruits.includes("Apple")) { 
    console.log("You really like Apple!")
}

if (favorite_fruits.includes("Oranges")) { 
    console.log("You really like Oranges!")
}


if (favorite_fruits.includes("Banana")) { 
    console.log("You really like Banana!")
}


if (favorite_fruits.includes("mango")) { 
    console.log("You really like mango!")
}


if (favorite_fruits.includes("strawberry")) { 
    console.log("You really like strawberry!")
}

/*30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/


let usernames = ["Asad", "Saqib", "Kashif", "Fazal", "admin",];

for (const username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }

/* 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

if (usernames.length === 0) {
    console.log("We need to find some users!"); }

    usernames.splice(0, 5);
    console.log(usernames);

if (usernames.length === 0) {
     console.log("We need to find some users!"); }


/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has 
a unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a 
message that the person will need to enter a new username. If a username has not been used, print a message 
saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

const current_users =["kashif", "asad", "umer", "fazal", "saqib"];
const new_users = ["umer", "kashif", "jehangir", "shoaib", "faraz"];

for (let i = 0; i < new_users.length; i++) {
    let username_exists = false;

    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            username_exists = true
        }
    }

    if (username_exists) {
        console.log("User Name Taken")
    } else {
        console.log("Username Available")
    }
}

/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

const ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinal_num.length; i++) {
    let ordinal_ending;

    if (ordinal_num[i] === 1) {
        ordinal_ending = "st";
    } else if (ordinal_num[i] === 2) {
        ordinal_ending = "nd";
    } else if (ordinal_num[i] === 3) {
        ordinal_ending = "rd";
    } else {
        ordinal_ending = "th";
    }

    console.log(ordinal_num[i] + ordinal_ending);
}

/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/

const pizza_name = ["Cheese Pizza", " Pepperoni Pizza", "BBQ Chicken Pizza"];

for (let i=0; i < pizza_name.length; i++){
    console.log(`I love to eat ${pizza_name[i]} once a month`)
}

console.log("But my all-time favorite is the classic Cheese pizza!");
console.log("Pizza is just the best, and it's so versatile with countless toppings.");
console.log("I really love pizza!");


/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/

const animal_names= ["Cat", "Dog", "Parrot"];

for (let i = 0; i < animal_names.length; i++) {
    console.log(`Name of ${animal_names[i]}`)
}

for (let i = 0; i < animal_names.length; i++) {
    console.log(`A ${animal_names[i].toLowerCase()} would make a great pet.`);
  }

console.log("Any of these animals are easy to care!");

/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function. */

function make_shirt(size: string, msg: string) {
console.log(`${size} Shirt is ${msg}`)
}

make_shirt("small", "best fit for you");

/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */

function makeShirt(size= "large", msg= "I love TypeScript") {
    console.log(`${size} Shirt says ${msg}`)
    }
    
    makeShirt();
    makeShirt("medium")
    makeShirt("Medium Large", "I am Learning Typescript")

/* 38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.*/

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`)
}
 describe_city("Islamabad");
 describe_city("Karachi");
 describe_city("Madina", "Saudi Arabia");

/*39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/

function city_country(cityName: string, country: string) {
    return (`"${cityName}, ${country}"`);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "USA"));

/* 40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.

Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album. */

function make_album(artist_name: string, album_title: string, number_of_tracks: number = 0) {
    let album = {
        artist: artist_name,
        title: album_title,
        tracks: number_of_tracks,
    };

    return album;
}

console.log(make_album("Abida Parveen", "Raqs-e-Bismil"));
console.log(make_album("Nusrat Fateh Ali Khan", "Devotional Songs"));
console.log(make_album("Ali Zafar", "Huqa Pani", 5));

/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/

const magicians_array: string[] = ["Asim", "Qasim", "Zahoor"];

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(magicians_array);

/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */

function make_great(magicians_array: string[]) {
    let greatMagiciansArray: string[] = [];
    for (let i = 0; i < magicians_array.length; i++) {
        greatMagiciansArray.push(`The Great Magician Mr. ${magicians_array[i]}`);
    }
    return greatMagiciansArray;
}

let greatMagicians: string[] = make_great(magicians_array);
show_magicians(greatMagicians);

/* 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */

let copiedMagiciansArray = [...magicians_array];
let greatMagicians1 = make_great(copiedMagiciansArray);
show_magicians(magicians_array);
show_magicians(greatMagicians1);

/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/

function items_arry(...items: string[]) {
    console.log("Sandwich Summary:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Sandwich preparation complete.\n");
}

items_arry("spice");
items_arry("lettuce", "tomato");
items_arry("cheese", "ham", "mayonnaise");

/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 

Print the Object that’s returned to make sure all the information was
stored correctly.*/

function createCar(manufacturer: string, modelName: string, ...options: string[]) {
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

const car1 = createCar("Toyota", "Camry", "color", "red", "year", "2023");
const car2 = createCar("Honda", "Accord", "color", "blue", "sunroof", "true", "year", "2022");

console.log(car1);
console.log(car2);
