
const btnNick = document.querySelector(".btn-nickname");

function toggleVisible() {
  const nicknameDom = document.querySelector(".nickname-popup");
  const chatDom = document.querySelector(".chat-container");

  nicknameDom.hidden = true;
  chatDom.hidden = false;
};

btnNick.addEventListener("click", toggleVisible);
