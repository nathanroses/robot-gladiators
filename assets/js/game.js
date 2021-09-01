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

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(enemyNames.length);

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
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

 //REMOVE ENEMY HEALTH BY SUBTRACTING THE AMOUNT SET IN THE PLAYER ATTACK
     enemyHealth = enemyHealth - playerAttack;
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
playerHealth = playerHealth - enemyAttack;
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
  enemyHealth = 50;

          
  //DEBUGGER

  fight(pickedEnemyName);

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
 }
 else {
   window.alert("You've lost your robot in battle.");
 }

//ASK TOP PLAY AGAIN
 var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  startGame();
} else {
  window.alert("Thank you so much for playing Robot Gladiators! Come Back SOON!");
}
};

//start when pages reloads
startGame ();