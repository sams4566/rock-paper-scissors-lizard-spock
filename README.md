# Rock, Paper, Scissors, Lizard, Spock Game

The Rock, Paper, Scissors, Lizard, Spock game concept was recently popularised through the American TV show, The Big Bang Theory, as an improvement on the original game of chance, Rock, Paper, Scissors. The idea of the reinvention was to make the original game more exciting through adding in two extra variables, Lizard and Spock. 

The game is designed in a way to make it easy to understand the new rules along with having different game options so the user is challenged to progress to the next stage. The site is targeted at children and young people as they are ones most likely to play the original game. The page’s design should also make it easy for children and young people to remember how to play with their friends outside of the site.

![Am I Responsive Mockup](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-screens.jpg)

## Features
- __Header__

  - Featured at the top of the page the heading clearly displays the name of the game in bold, uppercase letters allowing the user to quickly establish what the page is about.
  - The header is navy to keep in line with the pages blue and white theme.

![__Header__](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-nav.jpg)

- __Game Options__

  - As the user enters the site they first encounter the two game options which allow them to choose the difficulty depending on the number of rounds they would like to play against the computer. 
  - The background of each game option is turquoise so that they stand out when the user first enters the site. 
  - The ‘Choose game’ message in the middle makes it clear that the user has to complete a step before the game starts. 

![Game Options](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-portrait.jpg)

- __‘Choose below to start’ Message__
  - The ‘Choose below to start’ message alongside the downward arrows are activated after the user has clicked their desired game option. 
  - The arrows highlight that the user has to click one of the five option buttons to start the game against the computer.

![‘Choose below to start’ Message](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-facts.jpg)

- __The Game Area__
__
  - The game area has the five options (Rock, Paper, Scissors, Lizard, Spock) as buttons  layed out in a pentagon.
  - Each button has a caption and a picture of the hand gesture that goes with each option - this makes it easier for users to remember how to play the game with their friend outside the site. 
  - The arrows in the middle and around the perimeter of the pentagon help users understand what option wins and loses against the others, for example, that rock beats lizard and scissors but loses against paper and spock.

![The Game Area](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-video.jpg)

- __Collecting Points__
  - After the user has clicked one of the five options their choice is displayed in the top left box where the downward arrows used to be. 
  - The computer will then choose a random option which will be displayed in the box adjacent.
  - A point will then be awarded to either the user or computer and will be added to their previous score.
  - A message of ‘Well done!’ will be displayed if the user wins the point and a message of ‘Unlucky’ will be displayed if the computer wins.

![Collecting Points](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-footer.jpg)

- __Announcing Winner__
  - Once the user or computer reaches 5 or 10 points (depending on the game) the message will display either ‘You Win! Or ‘Computer Wins’. 
  - The user can then either click on one of the five game options to refresh the page or refresh their browser to start the game again. 

![Announcing Winner](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-early-life.jpg)

- __Future features__
  - Future features would include having an option to play against a friend on the same device and online. I would also add a tally highlighting how many games each player has won instead of the page refreshing at the end of every game.

## Testing
  - I have tested that all the JavaScript on the site works smoothly and is responsive alongside all the images loading correctly.
  - This webpage works on all screen sizes at any height between a width of 320px to 2000px. Between these dimensions the site is easily readable on all devices. These dimensions were tested using the developer tools in Google Chrome, Safari and Mozilla Firefox to ensure the page works on all browsers.

### Validator Testing
- HTML
  - No errors were returned when passing through the official [W3C Validator](#######################################)
- CSS
  - No errors were found when passing through the official [(Jigsaw) Validator](##################################)
- JavaScript
  - No significant issues were found when passing through the [JSHint JavaScript Validator](##################################)
- Accessibility
  - The web page was tested through Lighthouse in developer tools and confirmed a high level of accessibility

![Validator](https://github.com/sams4566/winston-churchill-biography/blob/main/media/winston-churchill-biography-statistics.jpg)

### Bugs
#### Solved Bugs 

- On Safari, the computer’s score was being covered by the game area background for smaller screen sizes. The below photo shows the issue that was occurring: 

  ![Bug1](https://github.com/sams4566/rock-paper-scissors-lizard-spock/blob/main/media/bug1.jpg)

  This was resolved by decreasing the line spacing and increasing the margin.

- The JSHint Validator was producing large numbers of the below errors:

  ![Bug2](https://github.com/sams4566/rock-paper-scissors-lizard-spock/blob/main/media/bug2.jpg)

  This was resolved through adding /*jshint esversion: 6 */ at the top of my script.js file as advised through the following website - https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const 

#### Unfixed Bugs
- No unfixed bugs

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the repository for rock-paper-scissors-lizard-spock and then click on the setting tab.
- Click on the pages tab from the list of options on the left hand side of the page.
- Select ‘main’ from the button displaying ‘None’ under the ‘Source’ sub-section.
- Once saved the page will take a couple of seconds to be uploaded onto the web. The link to the page will be provided above the ‘Source’ sub-section when refreshed.
- The live link can be found here - https://sams4566.github.io/rock-paper-scissors-lizard-spock/ 

## Credits
### Content
- The code for working out how to refresh the page when the user clicks one of the five options what taken from the below site -
https://www.bitdegree.org/learn/javascript-refresh-page 
- The code for working out how to get rid of the “esversion: 6” errors in JSHint was used from the below website - 
https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const 

### Media
- The main picture of the five options in a pentagon was taken from -
https://vertexgraphics.co.uk/shop/t-shirts/rock-paper-scissors-lizard-spock-t-shirt/