//<img src="img_chania.jpg" alt="Flowers in Chania">

//When Clickme button is clicked, change display settings and show makeemoji button
document
  .getElementById("makeemojiBtn")
  .addEventListener("click", makeemojiBtnClicked);

function makeemojiBtnClicked() {
  document.getElementById("makeemojiBtn").style.display = "none";
  document.getElementById("emojis").outerHTML += `<p>😘❤️😘❤️😘❤️😘</p>
  `;
}