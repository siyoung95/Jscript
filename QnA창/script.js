// v 버튼을 클릭헀을때 active 클래스를 객체(.faq)에 넣기
const toggles = document.querySelectorAll('.faq-toggle'); // 버튼 태그를 모두 선택

//어떤 태그가 조건(btn을 클릭)을 충족할 시 .active를 추가하는 방법
toggles.forEach((toggle) => {
  //toggle = 파라미터,
  //모든 토글에 클릭시 상위객체 (.parentNode)를 찾아서 acive클래스에 토글
  toggle.addEventListener('click', () => {
    //.parentNode : 부모태그를 선택하는 용도, .classList : ?
    // toggle에 .addEventListener를 추가 , click을 했을 때 {기능}을 실행

    toggle.parentNode.classList.toggle('active');
  });
});
