# Random-Password-Generator
The goal of this assignment was to create a random password generator website.

After having initially creating my own HTML and CSS, I realized that both of those files had been provided to us and the main objective was to write the JS.

I started by creating strings for each variable / password option (lower letters, upper letters, numbers and special characters) and used conditionals to create all options for those variables.
Realizing this created very dry code, I went back and attempted to focus on creating a new array with all arrays of selected variables (based on the confirm questions).
To ensure at least one part of each variable (e.g. one lower case letter, one upper case letter, etc.), I immediately added one random index for each confirm that was selected then ran the remaining characters through a for loop to finish out the number of characters the user desired in the password.

Finally I created a shuffle function to take the password and shuffle the characters to ensure each password does not start with whichever confirm question was confirmed first.

This was a challenging javascript assignment that forced me to not only think through the logic and code it out but focus on not having dry code and eliminating repitions.