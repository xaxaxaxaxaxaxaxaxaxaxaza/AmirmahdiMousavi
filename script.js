function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("userImg").src = userChoice + "_l.gif";
  document.getElementById("compImg").src = compChoice + "_r.gif";

  let result = "";
  if (userChoice === compChoice) {
    result = "مساوی!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "شما بردی!";
  } else {
    result = "کامپیوتر برد!";
  }

  document.getElementById("result").innerText = result;
}