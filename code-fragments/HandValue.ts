const addUpValue = (hand : {suit : string, value: number}[]) => {
    let value = 0
    hand.forEach(
        (card)=>{
            value += card.value;
        }
    );
    if (value<21){
        return value
    } 
    if (value>21) {
        return <div>
        <h2>Too high, you must really suck. Reset the game here:</h2> 
        <button onClick={resetGame}>LOSER</button>
        </div> 
    }
    if (value = 21){
        return <div>
            <h2>WOW, you lucky son of a *****. Good job, play again:</h2>
            <button onClick={resetGame}>Replay</button>
        </div>
    }

}
