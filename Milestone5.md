#Members:

Charles Davies

Hamilton Nelson

James Lagrotteria

Joshua Green

Lake Braun

#Project Name:

MakerGame

#Vision Statement:

To provide entertainment to creative gamers, who want to share their ideas and visions with others. 

#Automated Tests:
We tested our password and name confirmation using PHPUnit Test and tested many different configurations below to see if we could find holes in the system.
However, all the tests were succesful and our system seemed to be able to handle all border cases, such as names with numbers or passwords with only letters. We have included
pictures below of our successful tests and the parameters we inserted in the tests under Milestone5_testResults.png and Milestone5_parameters.png

#User Acceptance Tests:

1) Coin Gathering -- This unit test looks at the functionality of our game to alter the color of the final platform
based upon whether or not all of the coins have been "collected", or the player has moved over them.  The tests are set up to
test for different numbers of coins, and checks the final color of the platform based upon the number that have been collected. 

2) Name and Password Confirmation: Our account creation page allows the user to insert information such as their first name, last name,
password, and a confirmation password. Our php code will go through the submitted data and ensure that the first and last name contain only letters,
the password and confirmation password are the same, and it checks to ensure that the password contains both letters and numbers for security. 

3) Username Confirmation: The account creation also has to check to ensure that each username that is submitted is unique so that each user has their own
identifier. The PHP insert handler will check the MySQL database to see if the submitted username has any matches in the records and if not it will submit the new username
,but if there is a match then it throws up an error and requests that the user try a new username. 
