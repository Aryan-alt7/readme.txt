

function rollDice(){

    const dices = Number(document.getElementById("dices").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    for(let i = 0; i < dices; i++){
       const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="dices/${value}.png" alt="Dice ${value}">`)

    }
    diceResult.textContent =`dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}