const hrat = document.querySelector('.hrat');
const uvodni = document.querySelector('.uvodni');

const quiz_box = document.querySelector('.quiz_box');
const result_box = document.querySelector('.result_box');
const option_list = document.querySelector('.option_list');

hrat.onclick = () => {
  uvodni.classList.add('activeInfo');
  hrat.classList.toggle('nonvisible');
};

const exit_btn = uvodni.querySelector('.buttons .quit');
exit_btn.onclick = () => {
  uvodni.classList.remove('activeInfo');
};

const continue_btn = uvodni.querySelector('.buttons .restart');
continue_btn.onclick = () => {
  uvodni.classList.remove('activeInfo');
  quiz_box.classList.add('activeQuiz');
  showQuetions(0);
  queCounter(1);
};

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let widthValue = 0;

const restart_quiz = result_box.querySelector('.buttons .restart');
const quit_quiz = result_box.querySelector('.buttons .quit');

restart_quiz.onclick = () => {
  quiz_box.classList.add('activeQuiz');
  result_box.classList.remove('activeResult');

  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count);
  queCounter(que_numb);
  clearInterval(counter);

  next_btn.classList.remove('show');
};

quit_quiz.onclick = () => {
  window.location.reload();
};

const next_btn = document.querySelector('footer .next_btn');
const bottom_ques_counter = document.querySelector('footer .total_que');

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);

    next_btn.classList.remove('show');
  } else {
    clearInterval(counter);

    showResult();
  }
};
const image = option_list.querySelectorAll('.image');

for (i = 0; i < image.length; i++) {
  image[i].setAttribute('onclick', 'optionSelected(this)');
}
let curiosity = document.querySelector('.curiosity');
let titleQuestion = document.querySelector('.title');
showQuetions = (index) => {
  const que_text = document.querySelector('.que_text ');

  let que_tag = '<div>' + `<img src =${questions[index].image}></div>`;
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    '</span></div>' +
    '<div class="option"><span>' +
    questions[index].options[1] +
    '</span></div>' +
    '<div class="option"><span>' +
    questions[index].options[2] +
    '</span></div>' +
    '<div class="option"><span>' +
    questions[index].options[3] +
    '</span></div>';

  titleQuestion.textContent = questions[index].question;
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  curiosity.innerHTML = '';

  const option = option_list.querySelectorAll('.option');

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
};

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);

  let userAns = answer.textContent;
  let correcAns = questions[que_count].answer;
  const allOptions = option_list.children.length;

  if (userAns == correcAns) {
    userScore += 1;
    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', tickIconTag);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIconTag);

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        option_list.children[i].setAttribute('class', 'option correct');
        option_list.children[i].insertAdjacentHTML('beforeend', tickIconTag);
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add('disabled');
  }
  curiosity.innerHTML = questions[que_count].curiosity;
  next_btn.classList.add('show');
}

function showResult() {
  uvodni.classList.remove('activeInfo'); //hide info box
  quiz_box.classList.remove('activeQuiz'); //hide quiz box
  result_box.classList.add('activeResult'); //show result box
  const scoreText = result_box.querySelector('.score_text');
  if (userScore > 8) {
    let scoreTag =
      '<span>Poznal jsi více než 8 plemen. Jsi opravdový znalec. <p>' +
      userScore +
      '</p> / <p>' +
      questions.length +
      '</p></span>';
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 5) {
    let scoreTag =
      '<span>Poznal jsi alespoň 5 plemen <p>' +
      userScore +
      '</p> / <p>' +
      questions.length +
      '</p></span>';
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      '<span>Poznal jsi více než jedno plemeno <p>' +
      userScore +
      '</p> / <p>' +
      questions.length +
      '</p></span>';
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      '<span>Vůbec neznáš kočičí plemena <p>' +
      userScore +
      '</p> out of <p>' +
      questions.length +
      '</p></span>';
    scoreText.innerHTML = scoreTag;
  }
}

function queCounter(index) {
  let totalQueCounTag = '<span><p>' + index + '</p> / <p>' + questions.length;
  bottom_ques_counter.innerHTML = totalQueCounTag;
}
