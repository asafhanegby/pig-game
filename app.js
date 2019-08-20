alert("Game Rules \n1. The game has 2 players, playing in rounds\n2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score \n3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn \n4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn \n5. The first player to reach 100 points on GLOBAL score wins the game");
var scores, roundScore, activePlayer, gamePlaying;


init();

document.querySelector('.middle-section >.roll').addEventListener('click', function () {
    if(gamePlaying){
    //1. generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Disaply the result
    var diceDOM = document.querySelector('.middle-section>.dice-image img');
    diceDOM.style.visibility = 'visible';
    diceDOM.src = 'images/dice-' + dice + '.png';
    //3. Update the round score If the rolled number was not a 1

    if (dice !== 1) {
        //Add score
        roundScore += dice;
        if (activePlayer === 0) {
            console.log(roundScore);
            document.querySelector('.left-section >.player >.final-score p:nth-child(2)').textContent = roundScore;
        } else{
            document.querySelector('.right-section >.player >.final-score p:nth-child(2)').textContent = roundScore;
        }
        
    } else {
        if (activePlayer === 0) {
            roundScore = 0;
            document.querySelector('.right-section >.player >.final-score p:nth-child(2)').textContent = roundScore;
            activePlayer = '1';
           

        } else {
            roundScore = 0;
            document.querySelector('.left-section >.player >.final-score p:nth-child(2)').textContent = roundScore;
            activePlayer = 0;
            
        }
        nextPlayer();
    }
    }

})

document.querySelector('.hold p').addEventListener('click', function (){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    
    //update the UI
    if (activePlayer === 0) {
        document.querySelector('.left-section > .player >.score h1').textContent = scores[activePlayer];
        roundScore = 0;
        document.querySelector('.left-section>.player >.final-score p:nth-child(2)').textContent = roundScore;
        
    } else{
        document.querySelector('.right-section > .player >.score h1').textContent = scores[activePlayer];
        roundScore = 0;
        document.querySelector('.right-section>.player >.final-score p:nth-child(2)').textContent = roundScore;
        
    }
    
    //chack if player won the game
    
    if(scores[activePlayer] >= 100 ){
        if (activePlayer === 0) {
            console.log(activePlayer);
            document.querySelector('.left-section >.player >.name h1').textContent = 'WINNER!';
            document.querySelector('.left-section >.player >.name h1').classList.add('color');
           document.querySelector('.middle-section >.dice-image img ').style.visibility='hidden';
           document.querySelector('.left-section').classList.remove('active');
           gamePlaying = false;
        } else {
            console.log(activePlayer);
            document.querySelector('.right-section >.player >.name h1').textContent = 'WINNER!';
            document.querySelector('.right-section >.player >.name h1').classList.add('color');
            document.querySelector('.middle-section >.dice-image img ').style.visibility='hidden';
            document.querySelector('.right-section').classList.remove('active');
            gamePlaying = false;
        }
    }else{
        if(activePlayer===0){
            activePlayer=1;
            nextPlayer();
        }else{
            activePlayer=0;
            nextPlayer();
        }
        
    }
    }
    //Add current score to global score
    
})

document.querySelector('.middle-section >.new-game').addEventListener('click',init);



function nextPlayer(){
    document.querySelector('.left-section').classList.toggle('active');
    document.querySelector('.right-section').classList.toggle('active');
    document.querySelector('.middle-section>.dice-image img').style.visibility = 'hidden';
}

function init(){
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
        
    document.querySelector('.middle-section>.dice-image img').style.visibility = 'hidden';
    document.querySelector('.left-section >.player >.score h1').textContent = '0';
    document.querySelector('.left-section >.player >.final-score >P:nth-child(2)').textContent = '0';
    document.querySelector('.right-section >.player >.score h1').textContent = '0';
    document.querySelector('.right-section >.player >.final-score >P:nth-child(2)').textContent = '0';
    document.querySelector('.left-section').classList.add('active');
    document.querySelector('.right-section').classList.remove('active');
    document.querySelector('.left-section >.player >.name h1').textContent = 'PLAYER 1';
    document.querySelector('.right-section >.player >.name h1').textContent = 'PLAYER 2';
    document.querySelector('.left-section >.player >.name h1').classList.remove('color');
    document.querySelector('.right-section >.player >.name h1').classList.remove('color');
}