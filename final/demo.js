window.setInterval(function(){
  shuffleQuotes();
}, 200000);

function shuffleQuotes() {
  for (var i = 0; i < document.getElementsByClassName('quote').length; i++){
    document.getElementsByClassName('quote')[i].style.display = "none";
  }
  randomIndice = Math.floor(Math.random() * document.getElementsByClassName('quote').length);
  document.getElementsByClassName('quote')[randomIndice].style.display = "inherit";
}get

function hidePlayer(){
  document.getElementById('player').style.display = "none";
  document.getElementById('hide').style.display = "none";
  document.getElementById('show').style.display = "inherit";
}
function showPlayer(){
  document.getElementById('player').style.display = "inherit";
  document.getElementById('hide').style.display = "inherit";
  document.getElementById('show').style.display = "none";
}
