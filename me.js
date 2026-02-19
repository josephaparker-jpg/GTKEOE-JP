// Required: click name changes to favorite color
const myName = document.getElementById("myName");
myName.addEventListener("click", function () {
  myName.style.color = "cyan"; // change this to your favorite color
});

// JS enhancement #2: button changes fun fact text
const factBtn = document.getElementById("factBtn");
const funFactText = document.getElementById("funFactText");

const facts = [
  "Fun fact: I went to a Military Boarding school for high school.",
  "Fun fact: I’m studying Aviation Administration.",
  "Fun fact: I enjoy photography and music."
];

factBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * facts.length);
  funFactText.textContent = facts[randomIndex];
});
