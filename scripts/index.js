function playSound(soundName) {
  const audio = new Audio('../sounds/' + soundName + '.mp3');
  audio.play();
}
function soundGenerator(key) {
  
  switch (key) {
    case "w":
      playSound('tom-1');
      break;
    case "a":
      playSound('tom-2');
      break;
    case "s":
      playSound('tom-3');
      break;
    case "d":
      playSound('tom-4');
      break;
    case "j":
      playSound('snare');
      break;
    case "k":
      playSound('kick-bass');
      break;
    case "l":
      playSound('crash');
      break;
    default:
      break;
  }
}

const allDrumsList = document.querySelectorAll('.drum');
allDrumsList.forEach(function (drumButton) {
  drumButton.addEventListener('click', function (event) {
    //console.log(event.target.innerHTML);
    const targetKey = event.target;
    const keyPressed = targetKey.innerHTML;
    
    targetKey.classList.add('pressed');
    setTimeout(function () {
      targetKey.classList.remove('pressed');
    }, 100);
    
    soundGenerator(keyPressed);
  })
})

document.addEventListener('keydown', function(event) {
  const keyPressed = event.key;
  const targetKey = document.querySelector('.' + keyPressed);

  if(targetKey !== null) {
    targetKey.classList.add('pressed');
    setTimeout(function () {
      targetKey.classList.remove('pressed');
    }, 100);

    soundGenerator(targetKey.innerHTML);
  }
  
})