// LOG OF VALUES

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = [' Kai ', 'Amy Android', 'Robo Trumble']; 
var enemyHealth = 50;
var enemyAttack =  12;

//END OF VALUES

//START CONSOLE


  //FUNCTION TO GENERATER RANDOM NUMBER VALUES
    var randomNumber = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1) + min);

      return value;
    };

//END OF CONSOLE

//FIGHT GAME
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
   

    //ask player if they'd like to run or fight
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    

    //if player picks "skip" confirm and then stop the loop 
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      //confirms player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
      //IF YES (true), leave the fight
      if (confirmSkip) {
        window.alert(playerName + 'has decoded to skip this fight. GOODBYE!');

        //subtract money from Player Money for Skipping
        playerMoney = Math.max;(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }

 //REMOVE ENEMY HEALTH BY SUBTRACTING THE AMOUNT SET IN THE PLAYER ATTACK
    var damage = randomNumber(playerAttack - 3, playerAttack);
   enemyHealth = Math.max(0, enemyHealth - damage);
 
 
 console.log(
    playerName + 'attacked' + enemyName + '.' + enemyName + 'now has' + enemyHealth + 'health remaning.'
  );

     // CHECK ENEMY HEALTH
       if (enemyHealth <= 0) {
       window.alert(enemyName + 'has died!');

    //AWARD PLAYER MONEY FOR WINNING
      playerMoney = playerMoney + 20;

    //LEAVE WHILE LOOP SINCE ENEMY DIED
    break;
    } else {
      window.alert(enemyName + 'still has' + enemyHealth + 'health left.');
    }


 
//REMOVE PLAYER HEALTH BY SUBTRACTING THE AMOUNT SET IN THE ENEMYATTACk
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);

console.log(
  enemyName + 'attacked' + playerName + '.' + playerName + 'now has' + playerHealth + 'health remaning.'
);

   //CHECK PLAYERS HEALTH
   if (playerHealth <= 0) {
     window.alert(playerName + 'has DIED!');
     //LEAVE WHILE LOOP IF PLAYER DIED
     break;
     
   } else {
     window.alert(playerName + 'still has' + playerHealth + 'health left.');
   }
 
 
 
 
 
 
 
 
 
  }


};
//LOOP AT THE END OF THE CODE TO START GAME
var startGame = function () {

      //Reset Player Stats
      playerHealth = 100;
      playerAttack = 10; 
      playerMoney = 10; 

  for (var i = 0; i < enemyNames.length; i++) {
 
    if (playerHealth > 0) {

  //Let Player Let The Round Start
    window.alert('Welcome to Robot Glaudators! Round ' + (i + 1));

  //Pick NEW ENEMY TO FIGHT BASED ON INDEX
   var pickedEnemyName = enemyNames[i];

  //RESET ENEMYHEALTH BEFORE NEW FIGHT
  enemyHealth = randomNumber(40, 60);

          
  //DEBUGGER

  fight(pickedEnemyName);

  
  // IF WERE NOT THE LAST ENEMY IN THE ARRAY
  if (playerHealth > 0 && i < enemyNames.length - 1) {
    //ask if player wants to use store before next round
    var storeConfirm = window.confirm("Fight is over, Visit the store before the next round?");

    //if yes, take them to the store function
    if (storeConfirm) {
      shop();
    }
  }

  }
    

  
  else {
    window.alert('You have lost your robot in battle! GAME OVER!');
    break;
  }
}
 //after loop ends, player is either out of health or enemies
 endGame();
};


 //LOOP AT THE END OF THE CODE TO START GAME
var endGame = function() {
 // if player is alive player WIN
 if (playerHealth > 0) {
   window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney +".")
 } else {
   window.alert("You've lost your robot in battle.");
 }

//ASK TOP PLAY AGAIN
 var playAgainConfirm = window.confirm('Would you like to play again?');

 if (playAgainConfirm) {
  startGame();
 } else {
  window.alert('Thank you so much for playing Robot Gladiators! Come Back SOON!');
   }
};

 var shop = function() {
   // ask player what they'd like to do in the shop
   var shopOptionPromopt = window.prompt(
     "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one of the following: 'REFILL', 'UPGRADE, or 'LEAVE'"
   );
 
   
   // USE SWITCH TO CARRY OUT ACTION
   switch (shopOptionPromopt) {
     case "REFILL":
     case "refill":
       if (playerMoney >= 7) {
         window.alert("Refilling a players health by 20 for 7 Dollars");
          
         // increase health and descrease money
         playerHealth = playerHealth + 20;
         playerMoney = playerMoney - 7;
         break;
       }
      else {
        window.alert("You don't have enough money!");
      }
      break;

     case "UPGRADE":
     case "upgrade":
       if (playerMoney >= 7) {
         window.alert("Upgrading player's attack by 6 for 7 dollars");

         //increase attack decrease money
         playerAttack = playerAttack + 6;
         playerMoney = playerMoney - 7;
       }
       else {
         window.alert("You don't have enough money!");
       }
       break;

    case "LEAVE":
    case "leave":
      window.alert('Leaving the store.');

        //do nothing, function will end
        break;
        default:
          window.alert('You did not select a valid option, Try Again!');

          //call shop again to force to pick option
          shop();
          break;
   }
 

  };



//start when pages reloads
startGame ();

