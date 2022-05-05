// global constants
const initClueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const gameLength = 8; // number of game rounds
const buttonCount = 5; // number of buttons
const strikesCount = 3; // the maximum number of stricks allowed

// global variables
var pattern = []; // to store the buttons' order
var progress = 0; // progress of game
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0; // user's # in the clue
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var mistakeCounter = 0; // track the number of misclick
var addAnimation = false; // check if the user wants to dropGame

// click helpbutton to open/close the help toggle button
$(".helpBtn").click(function () {
  // open/close helo button itself
  $(this).toggleClass("active");

  // open/close playguide
  $("#playGuide").toggleClass("hidden");
});

// generates a random integer within the range of min and max (inclusive)
function randomIntInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// start game
function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakeCounter = 0;

  // randomly create a game pattern
  pattern = [];
  for (let i = 0; i < gameLength; i++) {
    pattern.push(randomIntInterval(1, buttonCount));
  }

  // show start and close end button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");

  // when game strts, remove the hover effect on start button
  document.getElementById("startBtn").classList.add("noAnimation");
  document.getElementById("startBtn").classList.remove("animation");

  // start play game
  const delay = playClueSequence();

  // trigger countdown timer after playing tones
  const guessTime = Math.round((delay / 1000) * 1.2);
  setTimeout(tickTime, delay, guessTime);
}

// end game
function endGame() {
  // account for the case where user wants to quit game while...
  // the middle of play sequence
  gamePlaying = false;

  // or the tone is played
  if (tonePlaying) {
    stopTone(pattern[progress]);
  }

  // to stop and reset countdown timer
  clearInterval(tick);
  document.getElementById("progress").style.width = 0 + "%";
  document.getElementById("timeText").innerHTML = "Remaining Time: -- s";

  // to show start and hide end button
  document.getElementById("endBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");

  // to add hover animation
  addAnimation = true;
}

// after game finishes and the mouse leaves the start button
// enable hover animation
function addHoverAnimation() {
  // when end button is hidden and add hover variable is true
  if (
    addAnimation &&
    document.getElementById("endBtn").classList.contains("hidden")
  ) {
    document.getElementById("startBtn").classList.remove("noAnimation");
    document.getElementById("startBtn").classList.add("animation");
  }
  addAnimation = false;
}

// // required version of sound for each button
// Sound Synthesis Functions
// const freqMap = {
//   1: 261.6,
//   2: 329.6,
//   3: 392,
//   4: 466.2,
//   5: 528
// };

// defines audio name for each button
const audioMap = {
  1: "birdAudio",
  2: "jungleAudio",
  3: "oceanAudio",
  4: "windAudio",
  5: "rainAudio",
};

// play tone automatically
function playTone(btn, len) {
  // // required version
  // // btn # corresponds the key of map
  // o.frequency.value = freqMap[btn]
  // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  // context.resume()

  document.getElementById(audioMap[btn]).play();

  // enable repeating music
  document.getElementById(audioMap[btn]).loop = true;
  tonePlaying = true;

  // after playing tone for "len" call stopTone function
  setTimeout(stopTone, len, btn);
}

// start playing a tone upon click
function startTone(btn) {
  if (!tonePlaying) {
    // // required version
    // o.frequency.value = freqMap[btn]
    // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    // context.resume()

    document.getElementById(audioMap[btn]).play();

    // enable repeating music
    document.getElementById(audioMap[btn]).loop = true;
    tonePlaying = true;
  }
}

function stopTone(btn) {
  // // required version
  // g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)

  document.getElementById(audioMap[btn]).pause();
  tonePlaying = false;
}

// // required version
// Page Initialization
// Init Sound Synthesizer
// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();
// var o = context.createOscillator();
// var g = context.createGain();
// g.connect(context.destination);
// g.gain.setValueAtTime(0,context.currentTime);
// o.connect(g);
// o.start(0);

// light up button while playing tone
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

// turning off while playing tone
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// when game is played, execute each clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    // play tone while clueHoldtime
    playTone(btn, clueHoldTime);

    // call function "clearButton(btn)" after "clueHoldTime" sec
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// play the sequence of clues
function playClueSequence() {
  // // required version
  // resume previously suspended audio
  // context.resume()
  guessCounter = 0; // initialize the counter
  let delay = nextClueWaitTime; //set delay to initial wait time

  // disable click while tone sequence is played
  document.getElementById("gameButtonArea").classList.add("clickDisabled");

  // as game progresses, clue hold time gets shorter
  clueHoldTime = initClueHoldTime * (1 - 0.6 * (progress / gameLength) ** 2);

  // for each clue, playclue
  for (let i = 0; i <= progress; i++) {
    console.log(
      "play single clue: " +
        pattern[i] +
        " in " +
        delay +
        "ms for " +
        clueHoldTime
    );
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  // enable game buttons click after playing all tones
  setTimeout(function () {
    document.getElementById("gameButtonArea").classList.remove("clickDisabled");
  }, delay);

  // return the final delay time to start count down after playing all tones
  return delay;
}

// end game and show the message when losing the game
function loseGame() {
  endGame();
  addAnimation = false; // prevent addHoverAnimation function to be triggered
  document.getElementById("startBtn").classList.remove("noAnimation");
  document.getElementById("startBtn").classList.add("animation");
  alert("Game Over. You lost.");
}

// end game and show the message when winning the game
function winGame() {
  endGame();
  addAnimation = false; // prevent addHoverAnimation function to be triggered
  document.getElementById("startBtn").classList.remove("noAnimation");
  document.getElementById("startBtn").classList.add("animation");
  alert("Game Completed! You won!🥳");
}

// check the guess on click
function guess(btn) {
  console.log("User guessed: " + btn);

  // execute nothing if game is not running
  if (!gamePlaying) {
    return;
  }

  // game logic

  // guess wrongly
  if (pattern[guessCounter] != btn && mistakeCounter + 1 == strikesCount) {
    loseGame();
  } else if (pattern[guessCounter] != btn && progress == gameLength - 1) {
    // if you mistake in the final round but hasn't reached the strike count
    winGame();
  } else if (pattern[guessCounter] != btn) {
    // if the user mistake in the middle of the progress and hasn't reached the strike count
    // caution: that mistaken round is considered as passed. do not ask for more button
    mistakeCounter++;
    progress++;

    // reset the count down timer
    clearInterval(tick);
    document.getElementById("progress").style.width = 0 + "%";
    document.getElementById("timeText").innerHTML = "Remaining Time: -- s";

    const delay = playClueSequence();
    // change guess time based on the progress of game (i.e., delay)
    const guessTime = Math.round((delay / 1000) * 1.2);

    // run countdown timer after playing all sequences
    setTimeout(tickTime, delay, guessTime);
  } else if (progress != guessCounter) {
    // if there is more to guess in the same round and no mistake is detected
    guessCounter++;
  } else if (progress != gameLength - 1) {
    // if the game has not finished, move on to the next stage
    progress++;

    clearInterval(tick);
    document.getElementById("progress").style.width = 0 + "%";
    document.getElementById("timeText").innerHTML = "Remaining Time: -- s";

    const delay = playClueSequence();
    const guessTime = Math.round((delay / 1000) * 1.2);
    setTimeout(tickTime, delay, guessTime);
  } else {
    // if the user passed all the stage
    winGame();
  }
}

var tick; // declare variable outside the function to use clearinterval

// count down timer
function tickTime(time) {
  var count = 0; // count the number of 10ms
  const initialtime = time; // set the initial time as a constant since time will be modified later
  const progressBar = document.getElementById("progress");
  const countDownText = document.getElementById("timeText");
  let width = 0; // width for progress bar

  // count down only when game is played
  if (gamePlaying) {
    countDownText.innerHTML = "Remaining Time: " + initialtime + " s";

    // run the function every 10 ms
    tick = setInterval(function () {
      // when progress bar exceeds the length of original bar
      if (width >= 100) {
        countDownText.innerHTML = "Remaining Time: 0 s";
        clearInterval(tick);
        // call losegame after 20 ms so that the above innerHTML is shown
        setTimeout(loseGame, 20);
      } else {
        // when 1s (= 10ms * 100 counts)  has passed
        if (count === 100) {
          // reset count for 10ms
          count = 0;
          // count down time
          time--;
          countDownText.innerHTML = "Remaining Time: " + time + " s";
        } else {
          count++;
        }
        width += 1 / initialtime;
        progressBar.style.width = width + "%";
      }
    }, 10);
  }
}
