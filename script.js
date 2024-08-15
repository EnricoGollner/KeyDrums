document.body.addEventListener('keypress', (event)=>{
    playSound(event.code.toLowerCase())  // Recebe como parâmetro o código/qual tecla pressionada e coloca em lowerCase()
})

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value  // Pegamos o valor digitado
    
    if(song != ''){  // Verifica se foi digitado algo no input
        let songArray = song.split('')  // Transforma o song em um array
        playComposition(songArray)
    }
})
document.querySelector('.composer button').addEventListener('touchstart', ()=>{
    let song = document.querySelector('#input').value  // Pegamos o valor digitado
    
    if(song != ''){  // Verifica se foi digitado algo no input
        let songArray = song.split('')  // Transforma o song em um array
        playComposition(songArray)
    }
})

function playSound(tecla_sound){
    let audioElement = document.querySelector(`#s_${tecla_sound}`)
    let keyElement = document.querySelector(`div[data-key="${tecla_sound}"]`)

    if(audioElement){  // 'Se encontrou o audio'
        audioElement.currentTime = 0  // zera o tempo do áudio toda vezx que o evento se repetir
        audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('active')
    }

    setTimeout(() => {
        keyElement.classList.remove('active')
    }, 200);
}

function playComposition(songArray){
    let wait = 0

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)
        wait += 250
    }
}
