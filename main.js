const PROJECTS = [
  {
    key: "poltergeist",
    title: "Poltergeist",
    tag: "2D Game Art / 기업협약",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.08.31 – 2026.09.30", 개발인원: "4명", 장르: "SRPG", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["06"],
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
    slides: ["08", "09"],
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
    slides: ["11", "12"],
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
    slides: ["14", "15", "16", "17"],
    links: [
      { label: "상점페이지", url: "https://store.steampowered.com/app/5023800/Pixel_Chroma/?l=koreana" },
      { label: "공식 트레일러", url: "https://youtu.be/hEiYHdttB30" },
      { label: "GIT", url: "https://github.com/Ryukon97/PixelChroma" },
    ],
  },
  {
    key: "teacher",
    title: "선생님 잠깐 시간 좀 될까요?",
    tag: "Development",
    role: "Toon Shader & Character Interaction",
    meta: { 제작기간: "2026.09.03 – 2026.09.10", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "Meta Quest 3s" },
    slides: ["20", "21", "22", "23"],
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
    slides: ["25"],
    links: [
      { label: "플레이 영상", url: "https://youtu.be/01IqTF0F9SA" },
      { label: "GIT", url: "https://github.com/Ryukon97/MasterTool" },
    ],
  },
];

const ACTIVITIES = [
  { key: "video", title: "영상편집", desc: "본코스메틱 마케터 / Pixel Chroma 영상 마케팅", slides: ["27"] },
  { key: "goods", title: "굿즈 제작", desc: "캔뱃지 / 아크릴 스탠드 / 포토카드 / 핸드폰거치대", slides: ["28"] },
  { key: "banner", title: "현수막 제작", desc: "행사 부스용 현수막 일러스트", slides: ["29"] },
];

// clickable areas on the work images, as percentages of the image (from the PDF's link positions)
const HOTSPOTS = {
  11: [{ label: "게임 스크린샷 및 쇼츠 영상", url: "https://youtu.be/64PHtlV8q3M", box: [87.42, 22.8, 6.3, 11.2] }],
  12: [
    { label: "인게임 쇼츠 1", url: "https://www.youtube.com/shorts/c7GH5WagXX4?feature=share", box: [71.42, 62.13, 8.7, 15.46] },
    { label: "인게임 쇼츠 2", url: "https://www.youtube.com/shorts/kVdBY1qEDkU?t=18&feature=share", box: [83.18, 62.13, 8.7, 15.46] },
  ],
  16: [
    { label: "인게임 쇼츠 1", url: "https://www.youtube.com/shorts/RndHLzNhqSs?t=1&feature=share", box: [69.86, 61.8, 8.44, 15.0] },
    { label: "인게임 쇼츠 2", url: "https://www.youtube.com/shorts/tHYJCxr2Uns?feature=share", box: [81.27, 61.8, 8.44, 15.0] },
  ],
  27: [
    { label: "광고 영상 모음", url: "https://youtu.be/vC0grSFlpOo", box: [45.04, 26.76, 3.75, 6.67] },
    { label: "게임 공식 유튜브", url: "https://youtube.com/@pixelchroma_youtube?si=XFHdWRVVgRahQ_mw", box: [51.62, 26.76, 3.75, 6.67] },
  ],
};

const el = (id) => document.getElementById(id);

function external(a, url) {
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
}

function replay(node) {
  node.classList.remove("is-swap");
  void node.offsetWidth;
  node.classList.add("is-swap");
}

function showWorks(container, item) {
  container.replaceChildren();
  for (const n of item.slides) {
    const work = document.createElement("div");
    work.className = "work";
    const img = document.createElement("img");
    img.src = `assets/slides/${n}.jpg`;
    img.alt = `${item.title} 작업물`;
    img.loading = "lazy";
    work.append(img);
    for (const spot of HOTSPOTS[Number(n)] || []) {
      const a = document.createElement("a");
      const [x, y, w, h] = spot.box;
      a.className = "hot";
      a.style.cssText = `left:${x}%;top:${y}%;width:${w}%;height:${h}%`;
      a.setAttribute("aria-label", `${spot.label} 열기`);
      a.title = spot.label;
      external(a, spot.url);
      work.append(a);
    }
    container.append(work);
  }
  replay(container);
}

// one row of buttons; pressing one shows that item right on the page
function buildTabs(tabsEl, items, onSelect) {
  for (const item of items) {
    const b = document.createElement("button");
    const label = document.createElement("span");
    b.className = "tab";
    b.setAttribute("role", "tab");
    b.dataset.key = item.key;
    label.textContent = item.title;
    b.append(label);
    tabsEl.append(b);
  }
  const select = (key) => {
    for (const b of tabsEl.children) {
      const on = b.dataset.key === key;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    }
    onSelect(items.find((x) => x.key === key));
  };
  tabsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (b) select(b.dataset.key);
  });
  select(items[0].key);
  return select;
}

const selectProject = buildTabs(el("project-tabs"), PROJECTS, (p) => {
  el("stage-img").src = `assets/thumbs/${p.key}.jpg`;
  el("stage-img").alt = `${p.title} 대표 이미지`;
  replay(el("stage-img").parentElement);
  el("stage-tag").textContent = p.tag;
  el("stage-title").textContent = p.title;
  el("stage-role").textContent = p.role;
  const meta = el("stage-meta");
  meta.replaceChildren();
  for (const [k, v] of Object.entries(p.meta)) {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = k;
    dd.textContent = v;
    row.append(dt, dd);
    meta.append(row);
  }
  const links = el("stage-links");
  links.replaceChildren();
  for (const link of p.links) {
    const a = document.createElement("a");
    const label = document.createElement("span");
    a.className = "btn btn-sm";
    label.textContent = link.label;
    a.append(label);
    external(a, link.url);
    links.append(a);
  }
  showWorks(el("project-works"), p);
});

buildTabs(el("activity-tabs"), ACTIVITIES, (a) => {
  el("activity-desc").textContent = a.desc;
  // the video tab also offers its YouTube links as buttons
  const links = el("activity-links");
  links.replaceChildren();
  for (const link of a.key === "video" ? HOTSPOTS[27] : []) {
    const btn = document.createElement("a");
    const icon = document.createElement("img");
    const label = document.createElement("span");
    btn.className = "link-pill";
    icon.src = "assets/icons/youtube.png";
    icon.alt = "";
    label.textContent = link.label;
    btn.append(icon, label);
    external(btn, link.url);
    links.append(btn);
  }
  showWorks(el("activity-works"), a);
});

// home screen: left banners are built from the project list
function goToProject(key) {
  selectProject(key);
  el("project").scrollIntoView();
}

for (const p of PROJECTS) {
  const b = document.createElement("button");
  b.className = "banner";
  b.textContent = p.title;
  b.addEventListener("click", () => goToProject(p.key));
  el("banners").append(b);
}

// top-right card: arrows switch between the Steam games, the card itself opens the store page
const FEATURES = [
  { key: "pixelchroma", name: "Pixel Chroma", url: "https://store.steampowered.com/app/5023800/Pixel_Chroma/" },
  { key: "backtogether", name: "Back Together", url: "https://store.steampowered.com/app/5086830/BACK_TOGETHER/" },
];
let featureIndex = 0;

function showFeature(step) {
  featureIndex = (featureIndex + step + FEATURES.length) % FEATURES.length;
  const f = FEATURES[featureIndex];
  el("feature-link").href = f.url;
  el("feature-link").setAttribute("aria-label", `${f.name} Steam 상점 페이지 열기`);
  el("feature-name").textContent = f.name;
  el("feature-img").src = `assets/thumbs/${f.key}.jpg`;
  if (step) replay(el("feature-link"));
}

el("feature-prev").addEventListener("click", () => showFeature(-1));
el("feature-next").addEventListener("click", () => showFeature(1));
showFeature(0);

// back-to-top button appears once the home screen is scrolled past
const toTop = el("to-top");
const toggleTop = () => toTop.classList.toggle("is-shown", scrollY > innerHeight * 0.6);
addEventListener("scroll", toggleTop, { passive: true });
toggleTop();

// overview popup: every project in one scrolling sheet, built the first time it opens
const overview = el("overview");

// "2026.08.31 – 2026.09.30" -> "2026.08.31~09.30" (the year is repeated only when it differs)
function shortPeriod(period) {
  const [from, to] = period.split("–").map((x) => x.trim());
  return `${from}~${to.slice(0, 5) === from.slice(0, 5) ? to.slice(5) : to}`;
}

const slashed = (text) => text.replaceAll(" · ", " / ");

function buildOverview() {
  const body = el("overview-body");
  // projects first, then outside activities (goods, banner) and video editing last
  const activity = (key) => ACTIVITIES.find((x) => x.key === key);
  const entries = [
    ...PROJECTS.map((p) => ({
      tag: p.tag,
      title: p.title,
      role: p.role,
      facts: [shortPeriod(p.meta["제작기간"]), p.meta["개발인원"], p.meta["장르"], p.meta["플랫폼"]].join(" / "),
      slides: p.slides,
      links: p.links,
    })),
    // goods and banner belong to the same group, so only the first carries the label
    ...["goods", "banner"].map((k, i) => ({ tag: i ? "" : "대외활동", title: activity(k).title, role: "", facts: slashed(activity(k).desc), slides: activity(k).slides, links: [] })),
    {
      tag: "마케팅 활동",
      title: activity("video").title,
      role: "",
      facts: slashed(activity("video").desc),
      slides: activity("video").slides,
      links: (HOTSPOTS[27] || []).map((s) => ({ label: s.label, url: s.url })),
    },
  ];
  for (const p of entries) {
    const item = document.createElement("section");
    item.className = "overview-item";
    item.innerHTML = `<div class="overview-top"><div><p class="plate"></p><h3></h3><p class="role"></p><p class="facts"></p></div><div class="overview-links"></div></div><div class="shots"></div>`;
    item.querySelector(".plate").textContent = p.tag;
    item.querySelector(".plate").hidden = !p.tag;
    item.querySelector("h3").textContent = p.title;
    item.querySelector(".role").textContent = p.role;
    item.querySelector(".role").hidden = !p.role;
    item.querySelector(".facts").textContent = p.facts;
    for (const n of p.slides) {
      const img = document.createElement("img");
      img.src = `assets/slides/${n}.jpg`;
      img.alt = `${p.title} 작업물`;
      img.loading = "lazy";
      item.querySelector(".shots").append(img);
    }
    for (const link of p.links) {
      const a = document.createElement("a");
      const label = document.createElement("span");
      a.className = "btn btn-xs";
      label.textContent = link.label;
      a.append(label);
      external(a, link.url);
      item.querySelector(".overview-links").append(a);
    }
    body.append(item);
  }
}

el("overview-open").addEventListener("click", () => {
  if (!el("overview-body").children.length) buildOverview();
  overview.showModal();
  el("overview-body").scrollTop = 0;
});
el("overview-close").addEventListener("click", () => overview.close());
overview.addEventListener("click", (e) => { if (e.target === overview) overview.close(); });

// zoom popup: any work image (on the page or inside the overview) opens large, with zoom controls
const zoom = el("zoom");
const zoomImg = el("zoom-img");
let zoomFit = 0; // width at which the whole image fits the screen (= 100%)

function setZoom(percent) {
  const value = Math.min(300, Math.max(50, percent));
  zoomImg.style.width = `${(zoomFit * value) / 100}px`;
  el("zoom-range").value = value;
  el("zoom-value").textContent = `${value}%`;
  el("zoom-stage").classList.toggle("is-pannable", value > 100);
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".work img, .overview-item .shots img");
  if (!img) return;
  zoomImg.src = img.src;
  zoomImg.alt = img.alt;
  zoomFit = Math.min(innerWidth * 0.96, innerHeight * 0.94 * (img.naturalWidth / img.naturalHeight));
  setZoom(100);
  zoom.showModal();
});
el("zoom-range").addEventListener("input", (e) => setZoom(Number(e.target.value)));
el("zoom-in").addEventListener("click", () => setZoom(Number(el("zoom-range").value) + 20));
el("zoom-out").addEventListener("click", () => setZoom(Number(el("zoom-range").value) - 20));
el("zoom-close").addEventListener("click", () => zoom.close());

// above 100% the image can be dragged around; a drag never counts as a click on the backdrop
const stage = el("zoom-stage");
let pan = null;
stage.addEventListener("pointerdown", (e) => {
  if (!stage.classList.contains("is-pannable") || e.button !== 0) return;
  pan = { x: e.clientX, y: e.clientY, left: stage.scrollLeft, top: stage.scrollTop, moved: false };
  try { stage.setPointerCapture(e.pointerId); } catch { /* synthetic pointers cannot be captured */ }
  stage.classList.add("is-panning");
});
stage.addEventListener("pointermove", (e) => {
  if (!pan) return;
  const dx = e.clientX - pan.x;
  const dy = e.clientY - pan.y;
  if (Math.abs(dx) + Math.abs(dy) > 4) pan.moved = true;
  stage.scrollLeft = pan.left - dx;
  stage.scrollTop = pan.top - dy;
});
const endPan = () => {
  stage.classList.remove("is-panning");
  setTimeout(() => { pan = null; });
};
stage.addEventListener("pointerup", endPan);
stage.addEventListener("pointercancel", endPan);
stage.addEventListener("click", (e) => {
  if (e.target === stage && !(pan && pan.moved)) zoom.close();
});
