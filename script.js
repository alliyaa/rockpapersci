
let randomNumber;
let cchoice;

function computerchoice() //picks computers choice
{ 
    randomNumber = Math.floor((Math.random() * 3) + 1);
    if(randomNumber===1)
    {
     cchoice= "scissors"; 
    }
    else if (randomNumber===2)
    {
     cchoice= "rock";
    }
    else if(randomNumber===3)
    {
     cchoice ="paper";
    }

return cchoice;
}

let pchoice; 
function playerSelectionc() //gets players choice depending on which image they clicked on
{
  function paperc() {
    pchoice = "paper";
  }
  
  function scic() {
    pchoice = "scissors";    
  }
  
  function rockc() {
    pchoice = "rock";
  }
  
  let clickableImagep = document.getElementById("paperimg");
  clickableImagep.addEventListener("click", function() {
  paperc();
  });

  let clickableImages = document.getElementById("sciimg");
  clickableImages.addEventListener("click", function() {
  scic();
  });
  
  let clickableImager = document.getElementById("rockimg");
  clickableImager.addEventListener("click", function() {
  rockc();
  });

  return pchoice;
}

let gamewin; 
let scorep=0;
let scorec=0;
let playerSelection= playerSelectionc();
let computerSelection = computerchoice();
let click=0;

function playRound() { //takes computer's choice and player's choice and compares both to see which wins
   playerSelection= playerSelectionc();
   computerSelection = computerchoice();
  
   
  
  if(playerSelection==="rock" && computerSelection==="rock")
        {
          gamewin = "try again, you both chose rock!";
          
        }
        else if(playerSelection==="paper" && computerSelection==="paper")
        {
          gamewin = "try again, you both chose paper!";
         
        }
        else if(playerSelection==="scissors" && computerSelection==="scissors")
        {
          gamewin = "try again, you both chose scissors!";
         
        }

        else if((playerSelection==="paper" && computerSelection==="rock")||
        (playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="paper"))
        {
          gamewin = "Point for You";
        }
       
        else if((playerSelection==="paper" && computerSelection==="scissors") || 
        (playerSelection==="rock" && computerSelection==="paper")||
        (playerSelection==="scissors" && computerSelection==="rock"))
        { 
         gamewin = "Point for Computer";
        }
      
        return gamewin; 
      }

      function newt()
      {
         if(scorec+scorep==0) 
          {
          resultContainer.innerHTML += "<h3> Time for A New Tournament! </h3>";
          click=0;          }
         
         
      }

      function game() //adds points based on who wins each round
     { 
     
    
      let resultContainer = document.getElementById("resultContainer");
      resultContainer.innerHTML = ""; 
      
      click++;
      newt();
      resultContainer.innerHTML += "<p> This Round's results are "+ playRound() + "</p>";
           while(gamewin==="try again, you both chose rock!" || gamewin==="try again, you both chose paper!" || gamewin=== "try again, you both chose scissors!")
           {
            resultContainer.innerHTML += "<p> This Round's results were to try again since you both put the same thing, new results are "+ playRound() + "</p>";
          
           }

           if(gamewin==="Point for Computer")
           {
            scorec++;
           }

           else if(gamewin==="Point for You")
           {
            scorep++;
           }

          
           
     resultContainer.innerHTML += "<p> You chose : " + playerSelection + "</p>";
     resultContainer.innerHTML += "<p> Computer chose : " + computerSelection+ "</p>";
     resultContainer.innerHTML+= "<p> Computer : " +scorec +  " You : " +scorep +"</p>";
    
  
    
        if(scorec+scorep===5) //clear scorec and scorep so another round starts
        {
          gamer()
          scorec=0;
          scorep=0;          
         
        }  
        }


     function gamer() //gets final score
     {
        resultContainer.innerHTML = "";
        resultContainer.innerHTML+= " <p> Final score for Computer :  " +scorec+ "</p>";
        resultContainer.innerHTML+= " <p> Final score for You : " +scorep+ "</p>";
        if(scorep>scorec)
        {
          resultContainer.innerHTML+= "<p> You win the tournament! </p>";
        }
        else
        {
          resultContainer.innerHTML+= "<p> Computer wins the tournament! </p>";

        }
       

     

       
     }
    
     
     
  let playButton = document.getElementById("playButton");
  playButton.addEventListener("click", game);

  

  

 

 

    

 
