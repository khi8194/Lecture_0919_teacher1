console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

const h3 = document.querySelector("h3");
const h3_text = h3.innerText;
//h3문자열을 0위치에서부터 50번째 위치까지 짜른뒤
//짜른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용

/*
if (h3_text.length > 30) {
  h3.innerText = h3_text.substring(0, 30) + "...";
} else {
  h3.innerText = h3_text;
}
*/

/*
if (h3_text.length > 30) h3.innerText = h3_text.substring(0, 30) + "...";
else h3.innerText = h3_text;
*/

h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;

//미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
// shortenText('h3', 30); 9시 30분까지
