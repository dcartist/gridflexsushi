let plate = document.querySelector(".inside")
let count = 3
function sushiMaker (amount){

    for (let i = 0; i < amount; i++){
        let plate = document.querySelector(".inside")
        let sushiDiv = document.createElement('div')
        let sushi = document.createElement('img')
        if (i < 5){
            sushi.src=`images/sushi/sushi-0${count}_resize.png`
        } else {
            sushi.src=`images/sushi/sushi-0${count + 1}_resize.png`
        }
       
        sushi.classList = "sushi"
        sushiDiv.classList = "sushiDiv"
    
        // sushiDiv.appendChild(sushi);
        plate.appendChild(sushi)
    }
   
}

sushiMaker(10)

let switchToggle = document.querySelector('#switch');
switchToggle.onchange = function(){
    if(switchToggle.checked){
        plate.classList.remove('grid-selection');
        plate.classList.add('flex-selection');
        console.log(switchToggle.classList)
        console.log(switchToggle)
    } else {
        plate.classList.remove('flex-selection');
        plate.classList.add('grid-selection');
        console.log(switchToggle.classList)
        console.log(switchToggle)
    }
}
