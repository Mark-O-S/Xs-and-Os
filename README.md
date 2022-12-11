One issue during the creation stage was that I was not able to see the game fully playing out as I expected it to. I tried changing keywords and functions around on the "script.js" file.
I managed to fix this issue by moving the whole "// Modal pop up box for the 'How to play' section" from the top of the script.js file to the bottom. After moving this and creating a separate file for the javascript functions, I was able to see my fully functioning code for both the modal pop up box and the game finally worked.
I am still not sure as to why I have to separate these files and codes however.

Resolved an error from the HTML validator which pointed out that I had nested an "<a>" element inside of a "<button>" element. 
To resolve this issue, i removed the "<a>" tag and added an onclick attribute so that the button remains functioning as intended
        