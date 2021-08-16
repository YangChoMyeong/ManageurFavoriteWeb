// Slack에서 도움을 받았음.Slack에서 도움 받음. 
1. input에 id, class 부여 필요 x
2. 복습 필요- localstorage에 왜 set을 해야하는지
3. location.href는 뭘까??
4. getitem 과 null 여부를 통해 공백으로 제출한 경우를 배제할 수 있다. 그리고 값이 있는 한 계속 유지. 값을 없애면 다시 나오게하는 역할
5. class 로 통일

/////

const div = document.getElementById("div");
const form = document.getElementById("form");
const input_first = form.querySelector("input:first-child"); //input에 id, class를 부여할 필요가 없었네....
const input_last = form.querySelector("input:nth-child(2)");
const button = document.getElementById("button");
const a = document.getElementById("a");

function saveName(nickname) {
  localStorage.setItem("nickname", nickname);
}

function saveUrl(url) {
  localStorage.setItem("url", url); //이걸 하는 이유가 무엇인지 다시한번 알아보자
}

function page() {
  location.href = input_last.Value;
} // location.href 로 설정 가능한가??

function clicked(e) {
  e.preventDefault();
  const nickname = input_first.value;
  const url = input_last.value;
  a.innertext = nickname;
  input_first.value = ""; // 다시 원복귀를 위해
  input_last.value = "";
  div.classList.add("hidden");
  saveName(nickname);
  saveUrl(url);
}

form.addEventListener("submit", clicked);
button.addEventListener("click", clicked);

const getNickName = localStorage.getItem("nickname");
const getUrl = localStorage.getItem("url");

if (getNickName === null || getUrl === null) {
  div.classList.remove("hidden");
} else {
  div.classList.add("hidden");
  a.innerText = getNickName;
  a.href = getUrl;
}



//*  HTML은
  <body>
    <div>
      <li>
        <a id="a" href="" target="_blank" onclick="page()">##</a>
      </li>
      <div id="div">
        <form id="form">
          <input type="text" value="" />
          <input type="text" value="" />
          <button id="button">설정</button>
        </form>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>

*//
