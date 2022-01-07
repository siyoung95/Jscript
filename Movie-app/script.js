//----------------------------변수입력---------------------------
//1
//본인 api_key 입력하고 인기도순으로 가져온 영화정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=e288f960013f0540cbe80e3a24a37bda&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
//이미지 앞의 주소 = ?
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
//6
const SERACH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=e288f960013f0540cbe80e3a24a37bda&language=ko&query="';
//3
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
//-----------------------------------------------------------------

//---------------------------함수선언-----------------------------
//2
//이거 왜씀 ? 기본화면을 보여주기 위해서 함수를 사용, 밑에 함수는 복잡한 데이터를 보기편하게 바꾸는 함수
getMovies(API_URL);

// async(asynchronous) = 자바스크립트는 비동기프로그램(동시에 일을 처리)
// await = 정보를 모두 가져올때까지 기다려라 //fetch() = url 주소로 요청해서 데이터를 전송받음 //.json = 복잡한 데이터로 구성된 문서를 json문서로 변환해서 data로 저장
// async와 await은 같은 짝꿍 , await 을 쓰기 위함 , 쓰는 이유는 데이터를 모두 불러오기 전에 출력하면 출력 x
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data.results); // data안에 있는 results만 출력(results = 영화정보)
  영화보여주기(data.results);
}
//-----------------------------------------------------------------

//-------------------------검색기능추가-----------------------------
//7
//submit = 폼안에 데이터를 입력했을 때 서버로 데이터를 보냄 //preventDefault() = 원래 이벤트 제거
//원래 이벤트 제거 왜 = ?
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value; //인풋창에 적은 내용
  // console.log(serachTerm); //내용 출력
  //입력 내용이 공백이 아닐경우 처리 = ?
  if (searchTerm && searchTerm !== '') {
    getMovies(SERACH_API + searchTerm);
    search.value = ''; //검색한 후 공백으로 다시 되돌림
  } else {
    window.location.reload(); //입력이 잘못되었을 경우 윈도우를 새로고침
  }
});
//----------------------------------------------------------------

//----------------------------함수선언---------------------------
//4
//.append vs .appendChild = 둘다 부모노드에 자식노드를 추가하는 메서드
//.append는 Node Object 나 DOMString을 사용가능, 여러개 자식노드 추가가능.
//.appendChild는 Node Object만 사용가능, 한번에 하나의 자식노드만 추가가능.
function 영화보여주기(movies) {
  //처음에 비우기 , 왜 = 기존에 main태그에 예시를 보여주기위한 여러 태그들이 있어서 그것들을 삭제하고 다른 값들을 넣음
  main.innerHTML = '';

  //하나의 영화정보를 가져와 화면에 출력
  movies.forEach((movie) => {
    const title = movie.title; //영화의 제목
    const poster_path = movie.poster_path; //영화의 주소
    const vote_average = movie.vote_average; //영화의 평점
    const overview = movie.overview; //영화의 설명

    const moveEl = document.createElement('div'); //div태그 생성
    moveEl.classList.add('movie'); //div태그에 class="movie"를 붙임
    //div 태그에 들어갈 구성요소들을 입력
    moveEl.innerHTML = `
    <img
          src="${IMG_PATH + poster_path}" 
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${평점색선택(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>상세보기</h3>
          ${overview}
        </div>
    `;
    main.appendChild(moveEl); //main에다가 moveEl을 달아줌, 왜 = main태그에 moveEl이라는 노드를 추가해
  });
}
//----------------------------------------------------------------
//--------------------------함수선언----------------------------
//5
function 평점색선택(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
//-----------------------------------------------------------------
