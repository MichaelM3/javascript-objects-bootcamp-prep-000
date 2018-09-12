<<<<<<< HEAD
var playlist = { 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( playlist, { ['Phil Ochs']: "Here's to the State of Mississippi" })
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.Slowdive
}
=======
var playlist = { linkinPark: 'faint' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, obj, { [key]: value })
}

const playlist = { 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes' }
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
>>>>>>> 3435267f282e272fa3f2c104d0c6c5bb41f1b91a
