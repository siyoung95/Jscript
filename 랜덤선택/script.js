//00000000000기본설정
//입력받는 창
const textarea = document.getElementById('textarea');
//태그들을 넣을 태그객체
const tagsEl = document.getElementById('tags');
//처음 시작하자마자 바로 입력을 할수 있도록 커서를 입력창에 넣기
textarea.focus();
//-----------------1.값을 입력받는 메서드-----------------------
//keyup = key를 눌렀다가 뗐을 때 , value = ?
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  //엔터 입력시
  if (e.key === 'Enter') {
    setTimeout(() => {
      //공백값으로 초기화한다
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});
//-------------------------------------------------------------
//---------2.랜덤으로 선택해서 하이라이트 추가 and 삭제---------
function randomSelect() {
  //시간을 바꿀수 있게끔하는 변수선언
  const times = 30;
  //계속 반복하는 함수선언
  const interval = setInterval(() => {
    //0.1초마다 실행되게
    const randomTag = 랜덤태그선택();

    하이라이트(randomTag);

    setTimeout(() => {
      하이라이트제거(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = 랜덤태그선택();
      하이라이트(randomTag);
    }, 100);
  }, times * 100);
}

function 랜덤태그선택() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add('highlight');
}

function 하이라이트제거(tag) {
  tag.classList.remove('highlight');
}
//------------------------------------------------------------

//----------------------3.태그만들기----------------------------
function createTags(input) {
  //.filter = ?, .map = ? input = ?
  //공백만 있는것 제거
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    //공백이 있을때 공백제거
    .map((tag) => tag.trim());

  // console.log(tags);
  tagsEl.innerHTML = ''; //안의 HTML을 공백으로 입력하면 입력값을 모두 삭제함
  tags.forEach((tag) => {
    //tagEl에 span태그를 만들어서 삽입
    const tagEl = document.createElement('span');
    //태그 클래스 추가 classList = ?
    tagEl.classList.add('tag');
    //글자내용을 tag로 입력
    tagEl.textContent = tag;
    //tags에 자식태그로 입력
    tagsEl.appendChild(tagEl);
  });
}
//-------------------------------------------------------------
