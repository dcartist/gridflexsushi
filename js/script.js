let plate = document.querySelector(".inside")
let gridColumns = document.querySelector("#gridColumns")
let gridFeatures = document.querySelector(".grid-features")
let flexFeatures = document.querySelector(".flex-features")
let switchToggle = document.querySelector('#switchSelection');
let flexDirectionToggle = document.querySelector("#switch-flex-direction")
let count = 3
function sushiMaker(amount) {

    for (let i = 0; i < amount; i++) {
        let plate = document.querySelector(".inside")
        let sushi = document.createElement('img')
        if (i < 4 & i > -1) {
            sushi.src = `images/sushi/sushi-03_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        } else if (i > 3 & i < 8) {
            sushi.src = `images/sushi/sushi-04_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        } else {
            sushi.src = `images/sushi/sushi-0${count + 2}_resize.png`
            sushi.classList = "sushi"
            plate.appendChild(sushi)
        }


    }

}

sushiMaker(12)

switchToggle.onchange = function () {
    if (switchToggle.checked) {
        plate.classList.remove('grid-selection');
        plate.classList.add('flex-selection');
        gridFeatures.style.display = "none"
        flexFeatures.style.display = "flex"

    } else {
        plate.classList.remove('flex-selection');
        plate.classList.add('grid-selection');
        gridFeatures.style.display = "block"
        flexFeatures.style.display = "none"
    }
}


flexDirectionToggle.onchange = function(e){
    let direction = document.querySelector('.flex-selection')
    console.log(direction)
    e.preventDefault()
    if (flexDirectionToggle.checked) {
        direction.style.flexDirection="column"
    } else {
        direction.style.flexDirection="row"

    }
}
gridColumns.onchange = function (e) {
    let plateColumns = document.querySelector(".grid-selection")
    e.preventDefault()
    plateColumns.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`
}
