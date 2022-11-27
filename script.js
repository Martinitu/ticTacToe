let gameboard = (function() {
  let  gameboard = [
        "x",
        "o",
        "x",
        "x",
        "x",
        "o",
        "x",
        "o",
        "o",
   
    ];
    return gameboard;
})()

let renderGameBoar = (function() {
  for (let i = 0; i < gameboard.length; i++ ) {
   let squareContent =  document.querySelector(".square"+ i)
   squareContent.textContent = gameboard[i]
  }
})()

   let playerFactory = function(name, number, assignedxo){
       let getPlayerName = () => {name; 
    console.log("this is the name of the player " + number + " " + name); }
       return {getPlayerName, name, number, assignedxo}
    };
    
   let martin =  playerFactory("Martin", 1, "x");
  let julice = playerFactory("Julice", 2, "o");
martin.getPlayerName();
 console.log(martin, julice)
