document.addEventListener("DOMContentLoaded", function () {

  // Click name → change color
  const myName = document.getElementById("myName");
  myName.addEventListener("click", function () {
    myName.style.color = "cyan";
  });

  // Fun fact button
  const factBtn = document.getElementById("factBtn");
  const funFactText = document.getElementById("funFactText");

  const facts = [
    "Fun fact: I went to a military boarding school for high school.",
    "Fun fact: I’m studying Aviation Administration.",
    "Fun fact: I enjoy photography and music."
  ];

  factBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    funFactText.textContent = facts[randomIndex];
  });

});
