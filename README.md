# X's and O's - A game of Tic Tac Toe

### **[Click here to visit the live website](https://mark-o-s.github.io/Xs-and-Os/)**

This is my JavaScript project of Tic Tac Toe. A fun game where 2 players can take turns in playing against each other.

![multi-device image](assets/images/device-views.jpg)

# UX & Design
The website has two pages. The first page, to give the user the option to have a look at how to play the game along and the second page to play the game.

### User Goals
- To be able to play the game and find out who wins.
- To find and read how to play the game if needed.
- To find out more information on who created the website.

### User Stories
- As a user, I would like to be able to navigate the site easily.
- As a user, I would like to be able to find out how to play the game if I don't know how to play.
- As a user, I would like to have the option to play again if I have already completed a game.
- As a user, I would like to be able to find out more about who created the website and to find external links to see the creators other pieces of work or information.

## Wireframes

I used [Balsamiq](https://balsamiq.com/wireframes/) in order to create the wirframes of the website. This was used as my guide towards building the finish project. Scroll down below to see the wireframes for both mobile and desktop versions.

### Main Page

<img src="assets/images/desktop-wf-1.jpg">

<img src="assets/images/mobile-wf-1.jpg">

### How to Play Section

<img src="assets/images/desktop-wf-2.jpg">

<img src="assets/images/mobile-wf-2.jpg">

### Game Section

<img src="assets/images/desktop-wf-3.jpg">

<img src="assets/images/mobile-wf-3.jpg">

### Game Result Section

<img src="assets/images/desktop-wf-4.jpg">

<img src="assets/images/mobile-wf-4.jpg">

One issue during the creation stage was that I was not able to see the game fully playing out as I expected it to. I tried changing keywords and functions around on the "script.js" file.
I managed to fix this issue by moving the whole "// Modal pop up box for the 'How to play' section" from the top of the script.js file to the bottom. After moving this and creating a separate file for the javascript functions, I was able to see my fully functioning code for both the modal pop up box and the game finally worked.
I am still not sure as to why I have to separate these files and codes however.

Resolved an error from the HTML validator which pointed out that I had nested an anchor tag element inside of a button element. 
To resolve this issue, i removed the anchor tag and added an onclick attribute so that the button remains functioning as intended
