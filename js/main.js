document.querySelector('.guess').addEventListener('click', flagGuess)
document.querySelector('.generate').addEventListener('click', generateFlag)
let country = null

function generateFlag() {

    let randomNum = (Math.random() * 100).toFixed(0)
   
    
    if(randomNum < 2) {
        country = 'chile'
    }
    else if(randomNum < 4) {
        country = 'brazil'
    }
    else if(randomNum < 6) {
        country = 'armenia'
    }
    else if(randomNum < 8) {
        country = 'argentina'
    }
    else if(randomNum < 10) {
        country = 'japan'
    }
    else if(randomNum < 12) {
        country = 'kenya'
    }
    else if(randomNum < 14) {
        country = 'kuwait'
    }
    else if(randomNum < 16) {
        country = 'kazakhstan'
    }
    else if(randomNum < 18) {
        country = 'liberia'
    }
    else if(randomNum < 20) {
        country = 'peru'
    }
    else if(randomNum < 22) {
        country = 'pakistan'
    }
    else if(randomNum < 24) {
        country = 'portugal'
    }
    else if(randomNum < 26) {
        country = 'senegal'
    }
    else if(randomNum < 28) {
        country = 'tunisia'
    }
    else if(randomNum < 30) {
        country = 'uganda'
    }
    else if(randomNum < 32) {
        country = 'yemen'
    }
    else if(randomNum < 34) {
        country = 'netherlands'
    }
    else if(randomNum < 36) {
        country = 'nigeria'
    }
    else if(randomNum < 38) {
        country = 'iceland'
    }
    else if(randomNum < 40) {
        country = 'algeria'
    }
    else if(randomNum < 42) {
        country = 'ecuador'
    }
    else if(randomNum < 44) {
        country = 'estonia'
    }
    else if(randomNum < 46) {
        country = 'egpyt'
    }
    else if(randomNum < 48) {
        country = 'spain'
    }
    else if(randomNum < 50) {
        country = 'fiji'
    }
    else if(randomNum < 52) {
        country = 'scotland'
    }
    else if(randomNum < 54) {
        country = 'wales'
    }
    else if(randomNum < 56) {
        country = 'georgia'
    }
    else if(randomNum < 58) {
        country = 'ghana'
    }
    else if(randomNum < 60) {
        country = 'gibraltar'
    }
    else if(randomNum < 62) {
        country = 'guatemala'
    }
    else if(randomNum < 64) {
        country = 'ireland'
    }
    else if(randomNum < 66) {
        country = 'israel'
    }
    else if(randomNum < 68) {
        country = 'mali'
    }
    else if(randomNum < 70) {
        country = 'mongolia'
    }
    else if(randomNum < 72) {
        country = 'mexico'
    }
    else if(randomNum < 74) {
        country = 'oman'
    }
    else if(randomNum < 76) {
        country = 'poland'
    }
    else if(randomNum < 78) {
        country = 'serbia'
    }
    else if(randomNum < 80) {
        country = 'rwanda'
    }
    else if(randomNum < 82) {
        country = 'slovakia'
    }
    else if(randomNum < 84) {
        country = 'slovenia'
    }
    else if(randomNum < 86) {
        country = 'somalia'
    }
    else if(randomNum < 88) {
        country = 'ukraine'
    }
    else if(randomNum < 90) {
        country = 'venezuela'
    }
    else if(randomNum < 92) {
        country = 'zambia'
    }
    else if(randomNum < 94) {
        country = 'jamaica'
    }
    else if(randomNum < 96) {
        country = 'italy'
    }
    else if(randomNum < 98) {
        country = 'iran'
    }
    else if(randomNum < 100) {
        country = 'ethiopia'
    }
    fetch(`https://countryflagsapi.com/png/${country}`)

    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
    })
    .catch(err => console.log(`error ${err}`))
    document.querySelector('.right').classList.add('hidden')
    document.querySelector('.wrong').classList.add('hidden')
}
function flagGuess () {
let guess = document.querySelector('input').value


if(guess.toLowerCase() === country) {
    document.querySelector('.right').classList.remove('hidden')
    document.querySelector('.wrong').classList.add('hidden')
}
else if(guess.toLowerCase() !== country) {
    document.querySelector('.wrong').classList.remove('hidden')
    document.querySelector('.right').classList.add('hidden')

}

}

