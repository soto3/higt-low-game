// console.log("出題者の数字を決定する");
function setAnswer (){
  const answer = Math.floor( Math.random() * 11 );
  return answer;
}


// console.log("ボタンが押されたら回答者のボタンの値をもらう");

// 宿題：ボタンを複数個おいて、それぞれのボタンがおされたときに、それぞれのメッセージを出力するようにする

function compare (answer, guessNumber){
  if(guessNumber == answer){
    return "あたり！";
  }
  else if (guessNumber < answer){
    return "小さい";
  }
  else if (guessNumber > answer){
    return "大きい";
  }
}

function display (result){
  const div = document.getElementById("result");
  div.innerHTML = result;
}

function showResetBtn (result){
  if (result === "あたり！"){
    const resetBtn = document.getElementById("reset");
    resetBtn.style.display = "block";
  }
}

let answer = setAnswer();

function game(){
  const btn = document.querySelectorAll("div.number > button");
  btn.forEach((el) => {
    el.addEventListener("click", (event) => {
      const guessNumber = event.currentTarget.value;
      console.log(answer);
      console.log(guessNumber);
      const result = compare (answer, guessNumber);
      display (result + "です。");
      showResetBtn (result);
    });
  })
}

game ();

document.getElementById("reset").onclick  = function (){
  const restbtn = document.getElementById("reset");
  restbtn.style.display = "none";
  const div = document.getElementById("result"); // ここ加えました
  div.innerHTML = ""; // 結果表示も消す処理をしてます。
  let newAnswer;
  newAnswer = setAnswer();
  console.log(newAnswer);
  answer = newAnswer;
  }



// answerの初期値をリセットする方法がわからん。



// console.log("判定する");

// (answer, )

// console.log("判定結果を受けて、表示する");

// console.log("bingoだったらstart againボタンを表示する");

// console.log("start againボタンが押されたら、はじめに戻る");