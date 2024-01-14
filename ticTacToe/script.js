const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector(".resetGame");
const newGame = document.querySelector(".newGame");
const resetmsg = document.querySelector(".reset");
const newmsg = document.querySelector(".new");
const winmsg = document.querySelector(".winmsg");

const toReset = () => {
  boxes.forEach((box) => {
    box.disabled = true;
    box.innerHTML = "";
    resetmsg.style.display = "block";
    setTimeout(() => {
      resetmsg.style.display = "none";
      box.disabled = false;
    }, 1500);
  });
};
resetbtn.addEventListener("click", toReset);

const toNewGame = () => {
  boxes.forEach((box) => {
    box.disabled = true;
    box.innerHTML = "";
    newmsg.style.display = "block";
    setTimeout(() => {
      newmsg.style.display = "none";
      box.disabled = false;
    }, 1500);
  });
};
newGame.addEventListener("click", toNewGame);

const winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let turn = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
    } else {
      box.innerHTML = "0";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let p1 = boxes[pattern[0]].innerHTML;
    let p2 = boxes[pattern[1]].innerHTML;
    let p3 = boxes[pattern[2]].innerHTML;
    if (p1 != "" && (p2 != "") & (p3 != "")) {
      if (p1 === p2 && p2 === p3) {
        boxes.forEach((box) => {
          box.disabled = true;
        });
        winner(p1);
      }
    }
  }
};

const winner = (msg) => {
  winmsg.innerHTML = `${msg} is winnner`;
  winmsg.style.display = "block";

  setTimeout(() => {
    winmsg.innerHTML = `New Game Start Soon`;
  }, 1000);

  setTimeout(() => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerHTML = "";
      winmsg.innerHTML = ``;
      winmsg.style.display = "none";
    });
  }, 3000);
};
