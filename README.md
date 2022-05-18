# Light-and-Sound-Memory-Game
It is part of pre-work for CodePath's SITE Program application, which I eventually did not apply for. 

Link to project: [https://telling-coral-income.glitch.me](https://telling-coral-income.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented individually:
- [x] Users can check the playguide by clicking the help button
  - [x] the help button has an animated toggle down move
- [x] A countdown timer is displayed in the right while game is played by using setinterval and clearinterval 
- [x] User can see an interesting animation when hovering over the start button 
  - [x] The animation is disabled when users click end button 
  - [x] It is enabled again once users leave the button and move back
- [x] Game buttons change color when the mouse hovers over each of them
- [x] Clicking game buttons is disabled while tone sequence is played


## Video Walkthrough (GIF)

Here are 6 demo GIF each of which acccounts for different scenario and shows some optionally implemented features. 
- Demo 1: I made no mistake and win the game.
![Demo 1](https://i.imgur.com/Ber0Luf.gif)

- Demo 2: I made 2 mistakes, but win the game. (Also showing hover animation feature and help button's animated toggle down move)
![Demo 2](https://i.imgur.com/xoBv3n2.gif)

- Demo 3: I made 3 mistakes and lose the game when making the 3rd mistake.
![Demo 3](https://i.imgur.com/XaeGbTA.gif)

- Demo 4: time-up during guess making and lose the game.
![Demo 4](https://i.imgur.com/VUlErpZ.gif)

- Demo 5: Quit the game while tone sequence is played.
![Demo 5](https://i.imgur.com/qQgsLH8.gif)
 
- Demo 6: Quit the game while guessing (i.e., countdown bar is moving) (Also, showing the hover animation is back once we leave and move back the cursor over start button.)
![Demo 6](https://i.imgur.com/GYMTAhL.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Style 
  - https://www.w3schools.com/css/css3_borders.asp 
  - https://leannezhang.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6#:~:text=In%20a%20nutshell%20%E2%80%A6,changing%20the%20layout%20around%20it 
  - https://stackoverflow.com/questions/38309480/how-to-animate-gifs-in-html-document 
  - https://stackoverflow.com/questions/39033070/css-color-vs-background-color-vs-background

- General JS Coding
  - https://api.jquery.com/toggleclass/
  - https://www.w3schools.com/jquery/html_toggleclass.asp
  - https://stackoverflow.com/questions/2167544/what-does-the-function-do-in-javascript
  - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contai  ns
- Toggle down 
  - https://stackoverflow.com/questions/9416917/how-to-toggle-dropdown-arrows
  - https://codepen.io/pepijnvandenhoven/pen/eVBZPw
- Audio
  - https://www.chosic.com/free-music/nature/
  - https://programminghead.com/how-to-play-audio-in-html-using-javascript/
  - https://stackoverflow.com/questions/22058786/play-pause-audio-on-mousedown-up-with-jquery
- Hover
  - https://www.w3schools.com/csSref/sel_hover.asp
  - https://medium.com/@erinannette/css-pointer-events-simple-clever-hovers-with-just-a-few-lines-of-code-d44a14a4e06f
  - https://css-tricks.com/almanac/properties/p/pointer-events/
  - https://stackoverflow.com/questions/5069110/remove-hover-css-behavior-from-element
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
  - https://localcoder.org/jquery-if-condition-on-mouse-leave-or-mouse-enter
  - https://api.jquery.com/mouseleave/

- Float 
  - https://stackoverflow.com/questions/25037084/how-can-i-display-two-div-in-one-line-via-css-inline-property
  - https://www.w3schools.com/cssref/pr_class_float.asp
  - https://css-tricks.com/all-about-floats/#:~:text=Clearing%20the%20Float,itself%20down%20past%20the%20float.
  - https://stackoverflow.com/questions/28784099/css-float-right-moves-element-right-and-down-i-dont-want-down
  - https://www.mediaevent.de/css/position-clear.html

- Countdown 
  - https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  - https://www.w3schools.com/jsref/met_win_clearinterval.asp
  - http://vaidehijoshi.github.io/blog/2015/01/06/the-final-countdown-using-javascripts-setinterval-plus-clearinterval-methods/


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   &emsp;  Among a couple of challenges including setting up the countdown timer with a progress bar and floating element to right without changing other elements’ location, it was most difficult to manage the timing of activating hovering effect over the start-button.

   &emsp; To interest users, I implemented a gif animation on the start-button activated upon hovering. First, I simply addied a pseudoclass “:hover”. However, I realized once I press the end-button to terminate the game, the animation is on the start-button as if it is default. It was because the cursor hovers is on the start-button once it appears in the exact same place as the end-button.

    &emsp;  Since I want to prevent potential confusion, I started to seek ways to disable animation after the game ends but reactivate it when cursors move back to the start-button. I found a property “pointer-events: none” can remove the hover event, so I added it upon clicking the end-button and remove it upon the cursor leaving the start-button. Then, I encountered another issue: the animation is not back upon hovering back to the start-button, which even does not recognize click. I later realized the added property makes element ignore all mouse’s moves. 

    &emsp;  Given my goal and that end-button is hidden (i.e., not consuming pointer-events), I reckoned it is better to substitute the background animation to the still color. Upon implementation, I considered two scenarios: after 1) quitting the game and 2) completing the game (lose or win). In the 1st scenario, since the cursor is initially over the start-button element, the reactivation should take place onmouseleave or onmouseenter. Since onmouseenter can be tricky because this event happens upon start-button appears, I used onmouseleave and created an addAnimation boolean variable to track if animation needs to be activated. In the 2nd scenario, upon game end, the cursor is away from start/end-button to close the alert, so the animation should be activated when the cursor visits the button for the first time. Through adding animation at loseGame and winGame function instead of endGame function, I isolate the 2nd scenario from the 1st one. It was a very long challenge for an HTML/CSS novice like me, but this process allows me to grasp the key concepts around the hover and click features. (376 words)

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    &emsp; While implementing some additional features to make the game website more interactive, I started to wonder if there is a generalizable guidelines or principles of usability upon web development. When I implemented features, I kept in mind about the best user-friendliness. For instance, I added hovering effects to all the game buttons to inform users that those fields are clickable or for some actions. I implemented it since when I played the game while pretending I know nothing about it, I was slightly confused about where to click before actually clicking the button to find out the relevance between click and tone-playing. Then, I realized the benchmark of user-friendliness is myself, and it is not ensured if my subjective viewpoint is applicable to the greater public. Through the past business internships, I have some understandings about AB test and beta-version, but I am curious how they are specifically integrated into the real development environment. Since the quality of user experience is the key to attract and retain many users and adequately communicate developers intention to the user sides, I reckon that this question is very important upon creating a clear seamless design in web development. (195 words)


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    &emsp;  While working on this project, I had various ideas about potential improvements. First, I want to refactor the functions related to control hover animation over the start-button. In my current code, the animation activity is controlled in various functions separately, which make it difficult to track the transformation of animation states. It is problematic particularly when modifying the functionality of hovering effect in the future. I have to check over all inter-related functions surrounding that hovering activities and restructure accordingly. Thus, I want to create one or a few functions which are solely designated to this effect. Here, I have to be aware of the efficiency as well. My code now attained the high efficiency by preventing meaningless trigger events; in addHoverAnimation(), the animation is added only if addAnimation boolean variable is True and end-button is hidden – which is the single possible case after quitting the game. Similarly, I have to make sure the refactored code achieve the efficiency by checking the activated condition using boolean value. 

    &emsp;  Besides, although I implemented some features I reckoned with high priority and necessity, I want to add some others as well. For instance, I want to set a few difficulty levels to accommodate various users. Here, I need to implement buttons corresponding with the difficulty levels and transform the gameLength constant into variable that accepts the varying game length chosen by the clicked button. Another feature can be while the game is being played, the number of strikes is updated on the game screen so that users are aware of their mistakes. Also, upon the game finishes, it shows the number of strikes in the alert regardless of if the users lose, win, or quit the game. These features can enhance the game’s usability and attractiveness.  (293 words)




## License

    Copyright Youqi Yang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
