let gameboard = (function() {
  let  gameboard = [
        "x",
        "o",
        "x",
        "x",
        "x",
        "o",
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
   for (let i = 0; i < gameboard.length; i++ ) {
   
      let squareContent =  document.querySelector(".square" + i);
      console.log(squareContent);
      squareContent.addEventListener("click", function() {
         if (gameboard[i] == "") {
            gameboard[i] = "x"
         
           
         }
         renderGameBoard()
        
       
      })
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
