//START CONSOLE
  //FUNCTION TO GENERATER RANDOM NUMBER VALUES
    var randomNumber = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1) + min);

      return value;
    };

//END OF CONSOLE

// LOG OF VALUES
var playerInfo = {                                           
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, //COMMA!
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  }, //COMMA!
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
 {
   name: "Roborto",
   attack: randomNumber (10,14)
 },
 {
   name: "Amy Android",
   attack: randomNumber (10, 14)
 },
 {
   name: "Mana Motherboard",
   attack: randomNumber (10, 14) 
 }
];

//END OF VALUES



//FIGHT GAME
var fight = function(enemy) {
            
        while (playerInfo.health > 0 && enemy.health > 0) {
   

    //ask player if they'd like to run or fight
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    

    //if player picks "skip" confirm and then stop the loop 
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      //confirms player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
      //IF YES (true), leave the fight
      if (confirmSkip) {
        window.alert(playerInfo.name + 'has decoded to skip this fight. GOODBYE!');

        //subtract money from Player Money for Skipping
        playerInfo.money = Math.max;(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money)
        break;
      }
    }

 //REMOVE ENEMY HEALTH BY SUBTRACTING THE AMOUNT SET IN THE PLAYER ATTACK
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
   enemyHealth = Math.max(0, enemyHealth - damage);
 
 
 console.log(
    playerInfo.attack + 'attacked' + enemyName + '.' + enemyName + 'now has' + enemyHealth + 'health remaning.'
  );

     // CHECK ENEMY HEALTH
       if (enemyHealth <= 0) {
       window.alert(enemyName + 'has died!');

    //AWARD PLAYER MONEY FOR WINNING
      playerInfo.money = playerInfo.money + 20;

    //LEAVE WHILE LOOP SINCE ENEMY DIED
    break;
    } else {
      window.alert(enemyName + 'still has' + enemyHealth + 'health left.');
    }


 
//REMOVE PLAYER HEALTH BY SUBTRACTING THE AMOUNT SET IN THE ENEMYATTACk
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

console.log(
  enemyName + 'attacked' + playerInfo.name + '.' + playerInfo.name + 'now has' + playerInfo.health + 'health remaning.'
);

   //CHECK PLAYERS HEALTH
   if (playerInfo.health <= 0) {
     window.alert(playerName + 'has DIED!');
     //LEAVE WHILE LOOP IF PLAYER DIED
     break;
     
   } else {
     window.alert(playerInfo.name + 'still has' + playerInfo.health + 'health left.');
   }
 
 
 
 
 
 
 
 
 
  }


};
//LOOP AT THE END OF THE CODE TO START GAME
var startGame = function () {

      //Reset Player Stats
       playerInfo.reset(); 

  for (var i = 0; i < enemyInfo.length; i++) {
 
    if (playerHealth > 0) {

  //Let Player Let The Round Start
    window.alert('Welcome to Robot Glaudators! Round ' + (i + 1));

  //Pick NEW ENEMY TO FIGHT BASED ON INDEX
   var pickedEnemyObj = enemyInfo[i];

  //RESET ENEMYHEALTH BEFORE NEW FIGHT
   pickedEnemyObj.health = randomNumber(40, 60);

          
  //DEBUGGER

  fight(pickedEnemyObj);

  
  // IF WERE NOT THE LAST ENEMY IN THE ARRAY
  if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
 if (playerInfo.health > 0) {
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
       if (this.money >= 7) {
         window.alert("Refilling a players health by 20 for 7 Dollars");
        // increase health and descrease money
         this.health += 20;
         this.money -= 7;
         break;
       }
      else {
        window.alert("You don't have enough money!");
      }
    

     
      upgradeAttack: function() {
       if (this.money >= 7) {
         window.alert("Upgrading player's attack by 6 for 7 dollars");
          this.attack += 6;
          this.money -= 7;
       }
       else {
         window.alert("You don't have enough money!");
       }
      }

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

