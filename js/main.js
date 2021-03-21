function addUser (inputValue) {
        let li = document.createElement('li')
        let span = document.createElement('span')
        let time = document.createElement('time')
        let button = document.createElement('button')

        span.classList.add('toDoList__span')
        li.classList.add('toDoList__item')
        time.classList.add('toDoList__time')
        button.classList.add('toDoList__button')
        span.textContent = input.value

        let today = new Date ()
        let hours = today.getHours()
        let minutes = today.getMinutes()
        let day = hours + ":" + minutes

        time.innerText = day
        button.innerHTML = "X"
        li.appendChild(span)
        li.appendChild(time)
        li.appendChild(button)
        ul.appendChild(li)
        input.value = ""

        button.onclick = () => {
            li.style.transform = "scale(1.1)"
            li.style.opacity = "0.5"
            setTimeout( () => { li.remove() }, 150)
        }
        
    }

    toDoList__add_button.onclick = (event) => {
        if (input.value != ""){
            addUser(input.value)
    }
    
}

input.onkeyup = (event) => {
    if (event.keyCode == 13 && input.value != ""){
        addUser(input.value)
    }
}



const speechRecognition = window.webkitSpeechRecognition
const voice = new speechRecognition()
voice.lang = "uz-Uz"
voice.continuous = false;

toDoListAddMic.onclick = () => {
    voice.start()
    input.placeholder = 'Listening....'
}

voice.onresult = (event) => {
    input.value = event.results[0][0].transcript
}

voice.onspeechend = function() {
    voice.stop();
    input.placeholder = 'Add your new to'
}













