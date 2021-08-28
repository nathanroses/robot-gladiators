// blank

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//log of "values"

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Kai";
var enemyHealth = "50";
var enemyAttack =  "12";

var fight = function() {
  
    //Alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

  
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and us that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

  
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
  
    // check enemy's health
     if (enemyHealth <= 0) {
         window.alert(enemyName + " has DIED! " );
     }   
     
     else {
         window.alert(enemyName + " stil has " +  enemyHealth  + "  health left. ");
     }


  //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyHealth;

  //Log a resulting message to the console so we know that it worked
     console.log(
         enemyName + " attacked " +  playerName  + " . " + playerName + " now has " +  playerHealth + " health remaining. "
   );
  
  //Check Players Health
    
   if (playerHealth <= 0) {
         window.alert(playerName + " has DIED! ");
     }
  
    else {
         window.alert(playerName + " still has " + playerHealth + " health left ");
  }




};
  
















//Function Call

  fight();