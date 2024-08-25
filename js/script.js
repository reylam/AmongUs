let btnHtp = document.getElementById("htp-btn");
let htpSection = document.getElementById("how-to-play");
let xBtn = document.getElementById("x-btn");
let backBtn = document.getElementById("back");
let onlineBtn = document.getElementById("online-btn");
let inputUsername = document.getElementById("username");
let lobbyBtn = document.getElementById("lobby-btn");

document.addEventListener('click', function() {
  document.querySelector('audio').play();
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
      const clickSound = document.getElementById('audio-click');
      clickSound.currentTime = 0.5;
      clickSound.play();

      setTimeout(() => {
        clickSound.pause()
        clickSound.currentTime = 0.5;
      },1000)
  });
});

btnHtp.addEventListener("click", () => {
  htpSection.classList.remove("hidden");
});

xBtn.addEventListener("click", () => {
  htpSection.classList.add("hidden");
});

backBtn.addEventListener("click", () => {
  document.querySelector(".game-host").classList.add("hidden");
  document.querySelector(".dashboard").classList.remove("hidden");
});

onlineBtn.addEventListener("click", () => {
  document.querySelector(".game-host").classList.remove("hidden");
  document.querySelector(".dashboard").classList.add("hidden");
  lobbyBtn.disabled = true;
});

inputUsername.addEventListener("input", () => {
  if (inputUsername.value === "") {
    console.log("halo");
    lobbyBtn.disabled = true;
  } else {
    lobbyBtn.disabled = false;
  }
});

lobbyBtn.addEventListener("click", () => {
  document.querySelector(".game-host").classList.add("hidden");
  document.querySelector(".lobby-page").classList.remove("hidden");
  const username = inputUsername.value;
  let lobby = new Lobby(username);
  lobby.startGame();
});
