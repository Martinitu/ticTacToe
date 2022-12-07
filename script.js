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

let renderGameBoard = function() {
  for (let i = 0; i < gameboard.length; i++ ) {
 
   let squareContent =  document.querySelector(".square"+ i)
   squareContent.textContent = gameboard[i]

   
   
  }

  
}
renderGameBoard()

let addMarks = (function(){
   let player = "o"
   for (let i = 0; i < gameboard.length; i++ ) {
      
      let squareContent =  document.querySelector(".square" + i);
      
      squareContent.addEventListener("click", function() {
         if (gameboard[i] == "") {
            if (player === "x") {
                gameboard[i] = "o";
                player = "o";
              } else if (player === "o") { 
                gameboard[i] = "x";
                player = "x";

           }
          
           console.log(gameboard)
         }
         renderGameBoard()
         checkForWinner()
      })
   }
})()

let checkForWinner = function(){

   if (
      ( gameboard[0] === "x" && gameboard[1] === "x" && gameboard[2] === "x") || 
      ( gameboard[3] === "x" && gameboard[4] === "x" && gameboard[5] === "x") ||
      ( gameboard[6] === "x" && gameboard[7] === "x" && gameboard[8] === "x") ||
      ( gameboard[0] === "x" && gameboard[3] === "x" && gameboard[6] === "x") ||
      ( gameboard[1] === "x" && gameboard[4] === "x" && gameboard[7] === "x") ||
      ( gameboard[2] === "x" && gameboard[5] === "x" && gameboard[8] === "x") ||
      ( gameboard[0] === "x" && gameboard[4] === "x" && gameboard[8] === "x") ||
      ( gameboard[2] === "x" && gameboard[4] === "x" && gameboard[6] === "x") 
      ){
      alert( playerOne.getPlayerName() + " WINS!!")
   } else if (
      ( gameboard[0] === "o" && gameboard[1] === "o" && gameboard[2] === "o") || 
      ( gameboard[3] === "o" && gameboard[4] === "o" && gameboard[5] === "o") ||
      ( gameboard[6] === "o" && gameboard[7] === "o" && gameboard[8] === "o") ||
      ( gameboard[0] === "o" && gameboard[3] === "o" && gameboard[6] === "o") ||
      ( gameboard[1] === "o" && gameboard[4] === "o" && gameboard[7] === "o") ||
      ( gameboard[2] === "o" && gameboard[5] === "o" && gameboard[8] === "o") ||
      ( gameboard[0] === "o" && gameboard[4] === "o" && gameboard[8] === "o") ||
      ( gameboard[2] === "o" && gameboard[4] === "o" && gameboard[6] === "o") 
      )
    {
      alert( playerTwo.getPlayerName() + " WINS!!")
   } else if (gameboard[0] != "" && gameboard[1] != "" && gameboard[2] != "" 
               && gameboard[3] != "" && gameboard[4] != "" && gameboard[5] != ""  
               && gameboard[6] != ""  && gameboard[7] != ""  && gameboard[8] != "" ) {
                  alert( "IT'S A DRAW!!")   
               }

   

}

   let playerFactory = function(name, number, assignedxo){
       let getPlayerName = () => {name; 
    return name; }
       return {getPlayerName, name, number, assignedxo}
    };
    
   let playerOne =  playerFactory("Martin", 1, "x");
  let playerTwo = playerFactory("Julice", 2, "o");
 

