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
    
    //Alert Fight OR Skip Battle
    var promptFight = window.prompt("Would you like to FIGHT ot SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
    //If A Player Chooses Fight, Then Fight
     if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        //REMOVE ENEMYS HEALTH BY SUBTRACTING THE AMOUNT SET IN THE PLAYER ATTACK VARIABLE
          enemyHealth = enemyHealth - playerAttack;
        //LOG RESULTING MESSAGE ON REMAING HEALTH
          console.log(
           playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
  
     //Check enemy's health
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

  
  //IF Player Chooses To Skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight! ");

} else {
    window.alert(" You need to choose a valid option, Try AGAIN! ");
}    




};
  
















//Function Call

  fight();