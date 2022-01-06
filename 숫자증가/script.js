//counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter');

//111111111111111111111111
counters.forEach((counter) => {
  //counters.forEach() 동작원리 = html의 .counter태그들
  //매개변수 동작원리 = ? //counter = ?
  counter.textContent = '0';
  업데이트카운터(counter);
});
//111111111111111111111111

//222222222222222222222222
function 업데이트카운터(counter) {
  //1)목표로 하는 지점 정하기 위함
  //getAttribute = 속성값을 가져옴 // + = +"문자열" = 문자열이 숫자로 바뀜 parseInt()를 써도됨
  //getAttribute vs .value = ?
  const target = +counter.getAttribute('data-target');
  // console.log(target);
  //2)0부터 부터 시작하기 위함
  const c = +counter.textContent; //현재 0
  //3)counter 마다 값이 틀리기 때문에 일정한 비율로 증가하기 위함
  //나누기 200한 비율로 증가
  const increment = target / 200;

  if (c < target) {
    //Math.ceil = 소수점이하를 올림 //Math.round() = 소수점이하를 반올림
    counter.textContent = `${Math.ceil(c + increment)}`;
    //타겟값보다 작으면 0.001초마다 함수계속 실행
    setTimeout(() => {
      업데이트카운터(counter);
    }, 1);
  } else {
    //그게아니면 타겟값 입력
    counter.textContent = target;
  }
}
//2222222222222222222222222222
