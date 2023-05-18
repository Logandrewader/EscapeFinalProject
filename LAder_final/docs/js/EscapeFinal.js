/*
  This is the JavaScript code for
  "Lab Final: Escape the Room"
  File: /LAder_final/docs/js/EscapeFinal.html
*/

function EscapeFinal() {
  //Declare variables
  var questionCounter = 1;
  var sword = "false";
  var friend;
  var colour;
  var response;
  var troll = "alive";
  var easterEgg;

  //Start loop
  alert('A troll sits in a chair. He turns to you and says "Answer my questions three and you may leave." What do you do?');
  while(questionCounter <= 3) {
    if (sword === "true") {
      response = prompt("The troll looks at you nervously as you hold the sword. What will you do?");
    } else if (questionCounter === 1) { //Different prompts for choices
      response = prompt("Do you fight, answer, or search?");
    } else if (questionCounter === 2) {
      response = prompt("You have two questions left. Do you fight, answer, or search?");
    } else if (questionCounter === 3) {
      response = prompt("You have one question left. Do you fight, answer, or search?");
    }
    if (response == "fight" || response == "Fight") {
      //Fight responses
      if (sword === "false") {
        alert('The troll stops you and says, "Woah there friend. No need to get violent."');
      } else if (sword === "true"){
        alert("You have slain Frank the Friendly Troll, you monster.");
        troll = "dead";
        questionCounter = 4;
      }
    } else if (response == "answer" || response == "Answer") {
      //Answer responses
        if (questionCounter === 1) {
          friend = prompt('The troll asks you "What is your name friend?"');
          questionCounter++;
        } else if (questionCounter === 2) {
          colour = prompt('The troll looks at you and asks "What is your favorite colour?"');
          questionCounter++;
        } else if (questionCounter === 3) {
           easterEgg = prompt('The troll stands up and asks "What is the airspeed velocity of an unladen swallow?"');
          questionCounter++;
        }
    } else if (response == "search" || response == "Search"){
      //Search responses
        alert("You find a decorative sword above the fireplece in the trolls home.");
        sword = "true"; 
    }
  }   //Final Messages
  if(easterEgg == "african or european") {
    document.write("<img src=recources/easterEgg.gif>");
  } else if(questionCounter === 4 && troll === "alive") {
    alert("Thank you for answering my questions " + friend + " of " + colour + ". Whether true or not, right or wrong, you are free to go. Thank you for visiting.");
    document.write("Thank you for being nice to Frank.");
  } else if(questionCounter === 4 && troll === "dead") {
    alert("You feel a great sense of shame as you leave the trolls home. Take time to reflect on your violent tendancies.");
    location.reload();
  }
}

EscapeFinal();
