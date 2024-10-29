let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");  
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let block = document.getElementById("block");
let title = document.getElementById("title");
let btn = document.getElementById("btn");

let array = [one, two, three, four, five, six, seven, eight, nine];  

let i = 0;
let gameActive = true;  

function play(element) {
  if (!gameActive || element.style.backgroundImage != "") return;

  if (i == 0) {
    element.style.backgroundImage = "url(../image/dagger.png)";
    element.style.backgroundSize = "cover";
    i = 1;
  } else {
    element.style.backgroundImage = "url(../image/zero.png)";
    element.style.backgroundSize = "cover";
    i = 0;
  }

  setTimeout(() => {
    winer();
  }, 1000); 
}

array.forEach(cell => {
  cell.onclick = function() {
    if (gameActive) { 
      play(this);
    }
  };
});

function winer() {
  let lines = [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
    [one, four, seven],
    [two, five, eight],
    [three, six, nine],
    [one, five, nine],
    [three, five, seven]
  ];

  for (let line of lines) {
    if (line.every(cell => cell.style.backgroundImage === 'url("../image/zero.png")')) {
      endGame("Zeros won");
      return;
    }
    if (line.every(cell => cell.style.backgroundImage === 'url("../image/dagger.png")')) {
      endGame("The Crusaders WON");
      return;
    }
  }

  if (array.every(cell => cell.style.backgroundImage !== "")) {
    endGame("NOBODY");
  }
}

function endGame(result) {
  gameActive = false;  
  btn.style.display = "block";
  block.style.display = "none";
  title.innerText = result;
}
