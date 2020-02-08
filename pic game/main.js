var scores,roundScore,activePlayer,dice,gamePlaying;
init();
//
function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector("#score-0").textContent=dice;
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
document.getElementById("name=0").textContent="player 1";
document.getElementById("name=1").textContent="Player 2";
}
//new player codeing

function newPlayer(){
    activePlayer=activePlayer===0? activePlayer=1:activePlayer=0;
    roundScore=0;


    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";

    document.querySelector(".player-0-penal").classList.toggle("active");
    document.querySelector(".player-1-penal").classList.toggle("active");
}
 //role button
document.querySelector(".btn-role").addEventListener("click" ,() =>{
if(gamePlaying){
    dice=Math.floor(Math.random() * 6) + 1;
    
    if(dice !==1){
        roundScore+=dice;

        document.querySelector("#current-" + activePlayer).textContent=roundScore;
    }
    else{
        newPlayer()
   }
}
})

//hold button
document.querySelector(".btn-hold").addEventListener("click",()=>{
    if(gamePlaying){
  //add cuurnt score to global score
  scores[activePlayer]+=roundScore;

  //update ui
  document.querySelector("#score-" +activePlayer).textContent=scores[activePlayer];
 
  //if player won the game
  if(scores[activePlayer]>=100) {
document.getElementById("name=" + activePlayer).textContent="Winner";
gamePlaying=false;
  }
  else{
      newPlayer();
  }
    }
})
//new button
document.querySelector(".btn-new").addEventListener("click",init);









