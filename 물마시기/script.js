//---------------------0.상수 정의----------------------------
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
//------------------------------------------------------------

//---------1.작은컵을 마우스 클릭시 -> 컵채우기(full클래스)-----
smallCups.forEach((cup, idx) => {
  //작은컵에 클릭이벤트달때 함수에 idx를 매개변수로 넘김
  cup.addEventListener('click', () => {
    작은컵들채우기(idx);
  });
});
//시작할 때 남은 물량 계산
큰컵채우기();
//--------------------------------------------------------------

//---------------------2.함수정의------------------------------
function 작은컵들채우기(idx) {
  //마지막컵을 클릭했는데 이미 다 차있을 경우
  //contains() = (안의 값)을 포함하는지 확인 //smallCups[idx] = ?
  //nextElementSibling = 
  if (idx === 7 && smallCups[idx].classList.contains('full')) {
    idx--;
  } else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  //일반적인 경우 클릭한 컵이하로는 다 full 아니면 다 full 제거
  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  큰컵채우기();
}
//----------------------------------------------------------------

//--------------------------3.함수정의----------------------------
function 큰컵채우기() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    //채운컵이 없을 경우 퍼센트는 안보이고 높이가 0
    //percentage = ? //style = ? //visibility = ? //hidden
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    //채운컵이 있으면 보이고 높이는
    //
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.textContent = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    //모든 컵이 다 채워졌을 경우 리메인(남은양)은 안보이게 높이는 0
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
  }
}
//--------------------------------------------------------------
