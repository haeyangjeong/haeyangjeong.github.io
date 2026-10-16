// content shared by both versions of the site (index.html and v2/index.html)
const PROJECTS = [
  {
    key: "poltergeist",
    title: "Poltergeist",
    tag: "2D Game Art / 기업협약",
    role: "Logo Design & Game Poster",
    meta: { 제작기간: "2026.08.31 – 2026.09.30", 개발인원: "4명", 장르: "SRPG", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "모바일" },
    slides: ["18"],
    links: [
      { label: "플레이 영상", url: "https://youtu.be/64PHtlV8q3M" },
      { label: "GIT", url: "https://github.com/Ryukon97/Poltergeist" },
    ],
  },
  {
    key: "mirrors",
    title: "Mirrors",
    tag: "2D Game Art",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.05.01 – 2026.05.31", 개발인원: "4명", 장르: "오픈월드", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["20", "21"],
    links: [
      { label: "플레이 영상", url: "https://youtu.be/3L-w9T-UCMY" },
      { label: "GIT", url: "https://github.com/Ryukon97/Mirrors" },
    ],
  },
  {
    key: "backtogether",
    title: "Back Together",
    tag: "2D Game Art",
    role: "Character Animation",
    meta: { 제작기간: "2026.07.01 – 2026.07.31", 개발인원: "5명", 장르: "멀티 파티플레이, 플랫포머", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["06", "07"],
    links: [
      { label: "상점페이지", url: "https://store.steampowered.com/app/5086830/BACK_TOGETHER/" },
      { label: "플레이 영상", url: "https://youtu.be/64PHtlV8q3M" },
      { label: "GIT", url: "https://github.com/Ryukon97/BackTogether" },
    ],
  },
  {
    key: "pixelchroma",
    title: "Pixel Chroma",
    tag: "2D Game Art",
    role: "Character Animation & UI",
    meta: { 제작기간: "2026.06.26 – 2026.09.01", 개발인원: "4명", 장르: "멀티 파티플레이, Hide and Seek", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["09", "10", "11", "12"],
    links: [
      { label: "상점페이지", url: "https://store.steampowered.com/app/5023800/Pixel_Chroma/?l=koreana" },
      { label: "공식 트레일러", url: "https://youtu.be/hEiYHdttB30" },
      { label: "GIT", url: "https://github.com/Ryukon97/PixelChroma" },
    ],
  },
  {
    key: "jewelrun",
    title: "Jewel Run",
    tag: "2D Game Art",
    role: "UI & Logo",
    meta: { 제작기간: "2026.10.12 – 2026.10.16", 개발인원: "1명", 장르: "캐주얼 런앤 점프 플랫포머", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "모바일" },
    slides: ["14", "15", "16"],
    links: [],
  },
  {
    key: "teacher",
    title: "선생님 잠깐 시간 좀 될까요?",
    tag: "Development",
    role: "Toon Shader & Character Interaction",
    meta: { 제작기간: "2026.09.03 – 2026.09.10", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "Meta Quest 3s" },
    slides: ["24", "25", "26", "27", "28"],
    links: [
      { label: "플레이 영상", url: "https://youtu.be/64PHtlV8q3M" },
      { label: "GIT", url: "https://github.com/Ryukon97/VRProject" },
    ],
  },
  {
    key: "mastertools",
    title: "Master Tools",
    tag: "Development",
    role: "Visual Game Maker",
    meta: { 제작기간: "2026.04.01 – 2026.04.30", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC, 모바일, VR" },
    slides: ["29"],
    links: [
      { label: "플레이 영상", url: "https://youtu.be/01IqTF0F9SA" },
      { label: "GIT", url: "https://github.com/Ryukon97/MasterTool" },
    ],
  },
];

const ACTIVITIES = [
  { key: "video", title: "영상편집", desc: "본코스메틱 마케터 / Pixel Chroma 영상 마케팅", slides: ["31"] },
  { key: "goods", title: "굿즈 제작", desc: "캔뱃지 / 아크릴 스탠드 / 포토카드 / 핸드폰거치대", slides: ["32"] },
  { key: "banner", title: "현수막 제작", desc: "행사 부스용 현수막 일러스트", slides: ["33"] },
];

// clickable areas on the work images, as percentages of the image (from the PDF's link positions)
const HOTSPOTS = {
  6: [{ label: "게임 스크린샷 및 쇼츠 영상", url: "https://youtu.be/64PHtlV8q3M", box: [86.7, 16.8, 6.3, 10.5] }],
  7: [
    { label: "인게임 쇼츠 1", url: "https://www.youtube.com/shorts/c7GH5WagXX4?feature=share", box: [69.96, 62.5, 8.7, 15.3] },
    { label: "인게임 쇼츠 2", url: "https://www.youtube.com/shorts/kVdBY1qEDkU?t=18&feature=share", box: [81.84, 62.3, 8.7, 15.4] },
  ],
  11: [
    { label: "인게임 쇼츠 1", url: "https://www.youtube.com/shorts/RndHLzNhqSs?t=1&feature=share", box: [68.1, 61.7, 10.1, 17.6] },
    { label: "인게임 쇼츠 2", url: "https://www.youtube.com/shorts/tHYJCxr2Uns?feature=share", box: [80.65, 61.4, 10.1, 17.9] },
  ],
  31: [
    { label: "광고 영상 모음", url: "https://youtu.be/vC0grSFlpOo", box: [47.2, 20.7, 5.6, 9.9] },
    { label: "게임 공식 유튜브", url: "https://youtube.com/@pixelchroma_youtube?si=XFHdWRVVgRahQ_mw", box: [47.2, 38.0, 5.6, 9.9] },
  ],
};

// slides shown as draggable before/after comparisons instead of a flat picture (frames taken from the capture video)
const COMPARES = {
  24: [
    { title: "셀식 스타일 구현", sub: "인물", name: "cel-close" },
    { title: "셀식 스타일 구현", sub: "배경", name: "cel-wide" },
  ],
  25: [
    { title: "그라데이션을 셀 방식화", name: "cel-step", labels: ["그라데이션", "셀 방식화"] },
    { title: "음영 3단계화", name: "shade", labels: ["음영 2단계화", "음영 3단계화"] },
  ],
};
