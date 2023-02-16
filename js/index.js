const $ = (selector) => document.querySelector(selector);

const movieData = [
  {
    rank: 1,
    name: "토이스토리3",
    image: "../images/toy.jpg",
    desc: "모든 장난감들이 겪는 가장 슬픈일은 바로 주인이 성장해 더이상 자신들과 놀아주지 않는 것. 우디와 버즈에게도 그 위기가 찾아온다. 앤디가 대학에 진학, 집을 떠나게 된 것. 헤어짐의 불안에 떨던 토이들은 앤디 엄마의 실수로 집을 나오게 된 이들은 우여곡절 끝에 탁아소에 기증되는 신세가 된다! 그런데 오마이갓, 어린이집 애들 장난이 아니게 난폭하고 험하다. 그리고 상상도 못했던 거대한 음모까지 숨겨져 있는 어린이집 장난감의 세계. 그러다 앤디가 여전히 자신들을 사랑한다는 사실을 알게 된 토이 군단은 앤디 곁으로 돌아가기 위해 생애 가장 큰 모험을 결심한다. 우디를 중심으로 똘똘뭉친 토이들 과연 이들의 위대한 탈출은 성공할 것인가!",
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=66463",
  },
  {
    rank: 2,
    name: "인사이드아웃",
    image: "../images/insideout.jpg",
    desc: "모든 사람의 머릿속에 존재하는 감정 컨트롤 본부 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들. 이사 후 새로운 환경에 적응해야 하는 ‘라일리’를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 ‘기쁨’과 ‘슬픔’이 본부를 이탈하게 되자 '라일리’의 마음 속에 큰 변화가 찾아온다. '라일리'가 예전의 모습을 되찾기 위해서는 ‘기쁨’과 ‘슬픔’이 본부로 돌아가야만 한다! 그러나 엄청난 기억들이 저장되어 있는 머릿속 세계에서 본부까지 가는 길은 험난하기만 한데… 과연, ‘라일리’는 다시 행복해질 수 있을까? 지금 당신의 머릿속에서 벌어지는 놀라운 일! 하루에도 몇번씩 변하는 감정의 비밀이 밝혀진다!",
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=66463",
  },
  {
    rank: 3,
    name: "아이언맨1",
    image: "../images/ironman.jpg",
    desc: "천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 억만장자 토니 스타크.",
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=44885",
  },
  {
    rank: 4,
    name: "이터널 선샤인",
    image: "../images/eternal.jpg",
    desc: "조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.",
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=38444",
  },
  {
    rank: 5,
    name: "반지의 제왕: 두개의 탑",
    image: "../images/ring.jpg",
    desc: "모든 힘을 지배할 악의 군주 ‘사우론’의 절대반지가 깨어나고 악의 세력이 세상을 지배해가며 중간계는 대혼란에 처한다. 호빗 ‘프로도’와 그의 친구들, 엘프 ‘레골라스’, 인간 전사 ‘아라곤’과 ‘보로미르’ 드워프 ‘김리’ 그리고 마법사 ‘간달프’로 구성된 반지원정대는 평화를 지키기 위해 절대반지를 파괴할 유일한 방법인 반지가 만들어진 모르도르를 향해 목숨을 건 여정을 떠난다. 한편, 점점 세력을 넓혀온 사우론과의 피할 수 없는 전쟁을 앞둔 반지원정대는 드디어 거대한 최후의 전쟁을 시작하는데...",
    link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=31795",
  },
];

class App {
  init() {
    this.renderMovieList();
    this.renderGuestBook();
    this.initEventListeners();
  }
  renderMovieList() {
    const template = movieData
      .map(
        (item) => `<div class="movie-item">
        <div class="movie-image">
          <img
            src="${item.image}"
            width="300"
          />
        </div>
        <div class="movie-contents">
          <div class="movie-title">${item.name}</div>
          <div class="movie-desc">${item.desc}
          </div>
          <a
            class="my-btn"
            href="${item.link}"
            target="_blank
          "
            >바로가기</a
          >
        </div>
      </div>`
      )
      .join("");
    $(".movie-list").innerHTML = template;
  }

  renderGuestBook() {
    const template = movieData
      .map(
        (item) =>
          ` <label> <input class="input-checkbox" type="checkbox" name="movie" value="${item.name}" /> ${item.name} </label>`
      )
      .join("");
    $(".guest-movie-list").innerHTML = template;
  }

  alertRegist() {
    const name = $(".input-text").value;
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }

    const movieCount = document.querySelectorAll(".input-checkbox:checked").length;
    alert(`${name}님, 저와 ${movieCount}개의 취향이 같으시네요!`);
    this.deleteGuestBookData();
  }

  deleteGuestBookData() {
    const checked = document.querySelectorAll(".input-checkbox:checked");
    $(".input-text").value = "";

    checked.forEach((item) => (item.checked = false));
  }

  initEventListeners() {
    $(".submit-btn").addEventListener("click", this.alertRegist.bind(this));
    $(".cancel-btn").addEventListener("click", this.deleteGuestBookData);
  }
}

const app = new App();
app.init();
