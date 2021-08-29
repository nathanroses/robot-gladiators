// blank

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log of "values"

console.log(playerName, playerHealth, playerAttack); 

var enemyNames = ["Kai", "Amy Android", "Robo Trumble"]; console.log(enemyNames);
var enemyHealth = "50";
var enemyAttack =  "12";

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}

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
           playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining. "
    );
  
     //Check enemy's health
     if (enemyHealth <= 0) {
         window.alert(enemyNames + " has DIED! " );
     }   
     
     else {
         window.alert(enemyNames + " stil has " +  enemyHealth  + "  health left. ");
     }

   
   
  //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
     playerHealth = playerHealth - enemyHealth;
   //Log a resulting message to the console so we know that it worked
      console.log(
         enemyNames + " attacked " +  playerName  + " . " + playerName + " now has " +  playerHealth + " health remaining. "
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
 //cONFIRMS Skip Action
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), LEAVE FIGHT
   if (confirmSkip) {
       window.alert( playerName + " has decied to skip the fight. Goodbye! ");
       //SUBTRACT PLAYER MONEY
       playerMoney = playerMoney - 2;
   }
   // if no (false), ask question again by running fight again
     {
         fight();
     }



} else {
    window.alert(" You need to choose a valid option, Try AGAIN! ");
}    




};
  
















//Function Call

  fight();