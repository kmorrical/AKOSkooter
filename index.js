alert("hi!");

var music = document.getElementById('janesMusic');
var button = document.getElementById('muteButton');

function myFunction(){

var media = document.getElementById('janesMusic');
media.volume = 0; /*set volume to zero|takes values btw 0-1*/
media.pause(); /*pause the audio/video*/

alert("AKO!");


}

