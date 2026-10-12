// 메인 배너 설정 — 이 파일만 고치면 메인 화면의 배너가 바뀝니다.
//
// 그림 바꾸기 : assets/hero 폴더에 그림을 넣고, 아래 img 에 파일 이름을 적습니다.
//               같은 이름(01.jpg 등)으로 덮어쓰면 이 파일을 고치지 않아도 바뀝니다.
// 문구 바꾸기 : lead 의 글자를 고칩니다. 비워 두면("") 문구 없이 그림만 나옵니다.
// 장 수 바꾸기: 한 줄을 지우면 줄어들고, 같은 모양으로 한 줄을 더하면 늘어납니다.
// 권장 크기   : 가로 1920 x 세로 1080 이상의 가로형 그림 (jpg, png, webp)
const HERO = [
  { img: "01.jpg", lead: "앞서가는 아티스트, 정해양" },
  { img: "02.jpg", lead: "Toon Shader & Character Interaction" },
  { img: "03.jpg", lead: "2D & 3D Game Artist" },
];

// 한 장이 화면에 머무는 시간(초)
const HERO_SECONDS = 7;
