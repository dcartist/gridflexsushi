let plate = document.querySelector(".inside")
let count = 3
function sushiMaker (amount){

    for (let i = 0; i < amount; i++){
        let plate = document.querySelector(".inside")
        // let sushiDiv = document.createElement('div')
        let sushi = document.createElement('img')
        if (i < 5 & i > -1){
            sushi.src=`images/sushi/sushi-03_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        } else if (i > 4 & i < 10){
            sushi.src=`images/sushi/sushi-04_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        } else {
            sushi.src=`images/sushi/sushi-0${count + 2}_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        }
       
        
    }
   
}

sushiMaker(15)

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


let gridColumns = document.querySelector("#gridColumns")

gridColumns.onchange = function(e){
    let plateColumns = document.querySelector(".grid-selection")
    e.preventDefault()
    let text = "1fr ".repeat(e.target.value)
    // let text = Array(e.target.value).join("a")

    console.log(text)
    console.log(e.target.value)
    plateColumns.style.gridTemplateColumns=`repeat(${e.target.value}, 1fr)`
}
