let gameboard = (function() {
  let  gameboard = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
   
    ];
    return gameboard;
})()

console.log(gameboard)

   let playerFactory = function(name, number, assignedxo){
       let getPlayerName = () => {name; 
    console.log("this is the name of the player " + number + " " + name); }
       return {getPlayerName, name, number, assignedxo}
    };
    
   let martin =  playerFactory("Martin", 1, "x");
  let julice = playerFactory("Julice", 2, "o");
martin.getPlayerName();
 console.log(martin, julice)
