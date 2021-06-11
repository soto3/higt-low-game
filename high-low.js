// 1. まずは汎用的なものを定義する
// ------------------------------------------------

function generateAnswer() {
  const answer = Math.floor(Math.random() * 11);
  return answer;
}

function display(area, result) {
  area.textContent = result;
}

function toggle(el, bool) {
  el.style.display = bool ? "block" : "none";
}

// 2. このアプリで特有のものを定義する
// ------------------------------------------------

// 今回のDOM要素のように、常に存在するものは先に
const resultArea = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");
const btns = document.querySelectorAll("#numbers button");

// アプリの中で書き換わる"状態"にあたるもの
let answer = generateAnswer();

// 3. 定義したものを紐付けて動かす
// ------------------------------------------------

display(resultArea, "数字をえらんでね");

btns.forEach((el) => {
  el.addEventListener("click", (event) => {
    const guessNumber = parseInt(event.currentTarget.value);

    //     console.log({ answer, guessNumber });

    if (guessNumber === answer) {
      display(resultArea, "あたり！天才！");
      toggle(resetBtn, true);
    } else if (guessNumber < answer) {
      display(resultArea, "小さいかも..");
    } else if (guessNumber > answer) {
      display(resultArea, "大きいわ!");
    }
  });
});

resetBtn.addEventListener("click", () => {
  toggle(resetBtn, false);
  display(resultArea, "数字を選んでね");
  answer = generateAnswer();
});
