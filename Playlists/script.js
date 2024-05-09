var playlistListText = document.getElementById("playlistListText")
var addToPlaylistButton = document.getElementById("addToPlaylistButton")
var invisible = document.getElementById("invisible")
var linkInput = document.getElementById("linkInput")
var loadLibraryInput = document.getElementById("loadLibraryInput")
var loadLibraryButton = document.getElementById("loadLibraryButton")
var invisible2 = document.getElementById("invisible2")
var settingsButtonOpen = document.getElementById("settingsButtonOpen")
var settingsButtonClose = document.getElementById("settingsButtonClose")
var spanId1 = document.getElementById("spanId1")
var playTracksButton = document.getElementById("playTracksButton")
var timeInput = document.getElementById("timeInput")
var previousTrackButton = document.getElementById("previousTrackButton")
var nextTrackButton = document.getElementById("nextTrackButton")
var titleInput = document.getElementById("titleInput")
var rangeInput = document.getElementById("rangeInput")
var changePlayType = document.getElementById("changePlayType")

function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
if(localStorage.getItem('playType')){
      var playType = JSON.parse(localStorage.getItem('playType'))
      changePlayType.innerHTML = playType
}else{
      var playType = "⮂"
      changePlayType.innerHTML = playType
      localStorage.setItem('playType', JSON.stringify(playType))
}
loadLibraryButton.onclick = function(){
      localStorage.setItem('PATH', JSON.stringify(loadLibraryInput.value))
}
if(localStorage.getItem('PATH')){
      var PATH = JSON.parse(localStorage.getItem('PATH'))
      loadLibraryInput.value = PATH
}else{
      var PATH = null
}
changePlayType.onclick = function(){
      if(changePlayType.innerHTML == "⮂"){
            playType = "↻"
            changePlayType.innerHTML = playType
            localStorage.setItem('playType', JSON.stringify(playType))
      }else if(changePlayType.innerHTML == "↻"){
            playType = "↫"
            changePlayType.innerHTML = playType
            localStorage.setItem('playType', JSON.stringify(playType))
      }else{
            playType = "⮂"
            changePlayType.innerHTML = playType
            localStorage.setItem('playType', JSON.stringify(playType))
      }
}
//<audio src="${localStorage.getItem('PATH').replace(/"/g, '')}${element}" controls></audio>
if(localStorage.getItem('shifer')){
      spanId1.style.display = "none"
      var shifer = JSON.parse(localStorage.getItem('shifer'))
      shifer.reverse()
      shifer.forEach(element => {
            var listItem = document.createElement("p")
            listItem.style.marginBottom = "20px"

            var p = document.createElement("p")
            p.innerHTML = `${element.replace(/.mp3/g, '').replace(/.wav/g, '')}`
            p.style.margin = "0px"
            p.style.fontSize = "30px"
            p.id = `${element}`
            p.className = "pNAME"
            listItem.appendChild(p)
            
            var br = document.createElement("br")
            listItem.appendChild(br)

            playlistListText.appendChild(listItem)

      })
}else{
      var shifer = []
}

function loadSong(song){
      titleInput.innerHTML = song
      JSON.parse(localStorage.getItem('shifer'))
      var nameIndex = shifer.indexOf(song)
      var items = document.querySelectorAll(".pNAME")
                  items.forEach(element => {
                        element.style.color = "white"
                  })
      shifer.forEach(element => {
            if(element == song){
                  document.getElementById(`${element}`).style.color = "red"
            }
      })
}

var i = 0
loadSong(shifer[i])
var listAudio = new Audio()
if(localStorage.getItem('PATH')){
      listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
}else{
      listAudio.src = null
}

const timer = setInterval(() => {
      if(i == -1 || titleInput.innerHTML == "undefined" && shifer.length > 0){
            i = 0
            loadSong(shifer[i])
            if(localStorage.getItem('PATH')){
                  listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            }else{
                  listAudio.src = null
            }
            playTracksButton.innerHTML = "∥"
            listAudio.play()
      }
}, 200)

playTracksButton.onclick = function(){
      if(playTracksButton.innerHTML == "▶︎"){
            playTracksButton.innerHTML = "∥"
            listAudio.play() 
                  listAudio.addEventListener('timeupdate', (e) => {
                        var {duration, currentTime} = e.srcElement
                  if(duration != currentTime){
                        timeInput.style.width = `${(currentTime / duration) * 100}%`
                  }else if(JSON.parse(localStorage.getItem('playType')) == "⮂"){
                        i++
                        loadSong(shifer[i])
                        listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
                        listAudio.play()
                  }else if(JSON.parse(localStorage.getItem('playType')) == "↻"){
                        loadSong(shifer[i])
                        listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
                        listAudio.play()
                  }else if(JSON.parse(localStorage.getItem('playType')) == "↫"){
                        i = getRandomArbitrary(0, shifer.length)
                        loadSong(shifer[i])
                        listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
                        listAudio.play()
                  }
                  })
      }else{
            playTracksButton.innerHTML = "▶︎"
            listAudio.pause()
      }
}

nextTrackButton.onclick = function(){
      if(JSON.parse(localStorage.getItem('playType')) == "⮂"){
            i++
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }else if(JSON.parse(localStorage.getItem('playType')) == "↫"){
            i = getRandomArbitrary(0, shifer.length - 1)
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }else if(JSON.parse(localStorage.getItem('playType')) == "↻"){
            i++
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }
}
previousTrackButton.onclick = function(){
      if(JSON.parse(localStorage.getItem('playType')) == "⮂"){
            i -= 1 
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }else if(JSON.parse(localStorage.getItem('playType')) == "↫"){
            i = getRandomArbitrary(0, shifer.length - 1)
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }else if(JSON.parse(localStorage.getItem('playType')) == "↻"){
            i -= 1
            loadSong(shifer[i])
            listAudio.src = `${localStorage.getItem('PATH').replace(/"/g, '')}${shifer[i]}`
            listAudio.play()
      }
}

addToPlaylistButton.onclick = function(){
      if(JSON.parse(localStorage.getItem('PATH')) == ""){
            addToPlaylistButton.innerHTML = "No path! | ERR: NO PATH"
            setTimeout(() => {
                  addToPlaylistButton.innerHTML = "Add to playlist"
            }, 2000);
      }
      else if(!localStorage.getItem('PATH')){
            addToPlaylistButton.innerHTML = "No path! | ERR: NO PATH"
            setTimeout(() => {
                  addToPlaylistButton.innerHTML = "Add to playlist"
            }, 2000);
      }
      else if(invisible.style.display == "none"){
            invisible.style.display = "block"
            addToPlaylistButton.style.marginBottom = "0px"
            invisible.style.marginBottom = "100px"
      }else{
            invisible.style.marginBottom = "0px"
            addToPlaylistButton.style.marginBottom = "100px"
            invisible.style.display = "none"
      }
}
function readFile(input){
      var file = input.files[0]

            var shiferItem = `${file.name}`
            shifer.push(shiferItem)
            localStorage.setItem('shifer', JSON.stringify(shifer))
            location.reload()
}
settingsButtonOpen.onclick = function(){
      if(invisible2.style.display == "none"){
            invisible2.classList.remove("rotateOut")
            invisible2.classList.add("rotate")
            invisible2.style.display = "block"
      }
}
settingsButtonClose.onclick = function(){
      if(invisible2.style.display == "block"){
            invisible2.classList.remove("rotate")
            invisible2.classList.add("rotateOut")
            setTimeout(() => {
                  invisible2.style.display = "none"
            }, 480);
      }
}
rangeInput.onchange = function(){
      if(rangeInput.value == 0){
            listAudio.volume = 0
      }else if(rangeInput.value == 10){
            listAudio.volume = 0.1
      }else if(rangeInput.value == 20){
            listAudio.volume = 0.2
      }else if(rangeInput.value == 30){
            listAudio.volume = 0.3
      }else if(rangeInput.value == 40){
            listAudio.volume = 0.4
      }else if(rangeInput.value == 50){
            listAudio.volume = 0.5
      }else if(rangeInput.value == 60){
            listAudio.volume = 0.6
      }else if(rangeInput.value == 70){
            listAudio.volume = 0.7
      }else if(rangeInput.value == 80){
            listAudio.volume = 0.8
      }else if(rangeInput.value == 90){
            listAudio.volume = 0.9
      }else if(rangeInput.value == 100){
            listAudio.volume = 1
      }
}