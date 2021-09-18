function sushiMaker (amount){

    for (let i = 0; i < amount; i++){
        let plate = document.querySelector(".inside")
        let sushiDiv = document.createElement('div')
        let sushi = document.createElement('img')
        sushi.src="images/sushi/sushi-06_resize.png"
        sushi.classList = "sushi"
        sushiDiv.classList = "sushiDiv"
    
        sushiDiv.appendChild(sushi);
        plate.appendChild(sushiDiv)
    }
   
}

sushiMaker(2)

let switchToggle = document.querySelector('#switch');
switchToggle.onchange = function(){
    console.log(switchToggle.checked)
}
