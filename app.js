let audio = document.getElementById('player')
let input = document.getElementById('open')

input.addEventListener('click', function () {
    if (audio.paused) {
        audio.play()
        audio.currentTime = 0
        input.innerHTML = 'Пауза'
    } else {
        audio.pause()
        input.innerHTML = 'Воспроизвести'
    }
})

