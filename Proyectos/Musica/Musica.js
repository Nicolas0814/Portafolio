const canciones = [
  { nombre: 'Hair Trigger', ruta: 'audio/Hair-Trigger-WST011601.mp3' },
  { nombre: 'Ultimate Victory', ruta: 'audio/Ultimate-Victory-WST010901.mp3' },
  { nombre: 'Visionary', ruta: 'audio/Visionary-WVM011601.mp3' },
  { nombre: 'With You in My Arms', ruta: 'audio/With-You-in-My-Arms-SSJ011001.mp3' }
];


const reproductorAudio = document.getElementById('audio-player');
const songListElement = document.getElementById('song-list');

function selectSong(index) {
  reproductorAudio.src = canciones[index].ruta;
  reproductorAudio.play();
  updateSelectedSong(index);
}

function updateSelectedSong(index) {
  const listItems = songListElement.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    if (i === index) {
      listItems[i].classList.add('selected');
    } else {
      listItems[i].classList.remove('selected');
    }
  }
}

function createSongList() {
  for (let i = 0; i < canciones.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = canciones[i].nombre;
    listItem.addEventListener('click', function() {
      selectSong(i);
    });
    songListElement.appendChild(listItem);
  }
}

createSongList();
