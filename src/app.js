/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let SentenceSubject = [
    "My dog ",
    "The neighbor ",
    "Some dude who blew $44 billion on a website ",
    "100 duck-sized horses ",
    "A penguin that was hiding in the freezer ",
    "Your momma ",
    "A santero selling homemade Viagra in Vicks VapoRub jars from the back of a truck in West Miami ",
    "That one super clingy ex ",
    "The exiled Nigerian prince who emails every week ",
    "ChatGPT’s self-aware AI drone "
  ];

  let SentenceVerb = [
    "ate ",
    "ripped up ",
    "totally PWND ",
    "threw one of those f****ng red shells from Mario Kart 64 at ",
    "86’d ",
    "launched a small nuclear missile at ",
    "took a massive dump on ",
    "stole ",
    "borrowed and never returned ",
    "started a world-wide avian flu pandemic and blamed "
  ];

  let SentenceObject = [
    "my homework ",
    "my car ",
    "my beat-up old boat ",
    "my significant other ",
    "my stuffed animal collection ",
    "my momma ",
    "the shovel I used when burying the evidence ",
    "my vintage ’69 Rolling Stones T-shirt ",
    "my pet pangolin that I got from a Wuhan research lab ",
    "my vast collection of rhinestoned codpieces "
  ];

  let SentenceConditional = [
    "last night.",
    "like, 2 seconds before I beat the final level boss in EXPERT mode.",
    "to get back at me for not splitting the bill when we went to The Tavern on the Green back in ’86.",
    "‘cause they spiteful and petty.",
    "while I was stuck in the line for the port-a-potty.",
    "and then lied about it on Tik-Tok.",
    "at the behest of the Communist Chinese government.",
    "in order to make a weird point about furries.",
    "in order to please and welcome our new alien overlords.",
    "while loudly yelling about wanting to get a tattoo of Donald Trump’s face as a tramp stamp."
  ];

  let FourRandomNumbers = [];
  for (let i = 0; i < 4; i++) {
    let EachRandomNumber = Math.floor(Math.random() * 10);
    FourRandomNumbers.push(EachRandomNumber);
  }

  function FullSentence() {
    document.write(
      "<h3>Judge: Before I read your sentence, is there anything you have to say for yourself?</h3>",
      "<h3>Defendant: Yes, your honor. You're never going to believe this but this wasn't at all my fault. What happened was... well...<br><p>",
      SentenceSubject[FourRandomNumbers[0]],
      SentenceVerb[FourRandomNumbers[1]],
      SentenceObject[FourRandomNumbers[2]],
      SentenceConditional[FourRandomNumbers[3]],
      "</p></h3>"
    );
  }

  FullSentence();
  //
  console.log("Hello Rigo from the console!");
};
