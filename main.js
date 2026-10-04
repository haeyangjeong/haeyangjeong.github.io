const PROJECTS = [
  {
    key: "poltergeist",
    title: "Poltergeist",
    tag: "2D Game Art · 기업협약",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.08.31 – 2026.09.30", 개발인원: "4명", 장르: "SRPG", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["06"],
  },
  {
    key: "mirrors",
    title: "Mirrors",
    tag: "2D Game Art",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.05.01 – 2026.05.31", 개발인원: "4명", 장르: "오픈월드", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["08", "09"],
  },
  {
    key: "backtogether",
    title: "Back Together",
    tag: "2D Game Art",
    role: "Character Animation",
    meta: { 제작기간: "2026.07.01 – 2026.07.31", 개발인원: "5명", 장르: "멀티 파티플레이, 플랫포머", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["11", "12"],
  },
  {
    key: "pixelchroma",
    title: "Pixel Chroma",
    tag: "2D Game Art",
    role: "Character Animation & UI",
    meta: { 제작기간: "2026.06.26 – 2026.09.01", 개발인원: "4명", 장르: "멀티 파티플레이, Hide and Seek", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["14", "15", "16", "17"],
  },
  {
    key: "teacher",
    title: "선생님 잠깐 시간 좀 될까요?",
    tag: "Development",
    role: "Toon Shader & Character Interaction",
    meta: { 제작기간: "2026.09.03 – 2026.09.10", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "Meta Quest 3s" },
    slides: ["20", "21", "22", "23"],
  },
  {
    key: "mastertools",
    title: "Master Tools",
    tag: "Development",
    role: "Visual Game Maker",
    meta: { 제작기간: "2026.04.01 – 2026.04.30", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC, 모바일, VR" },
    slides: ["25"],
  },
];

const ACTIVITIES = [
  { key: "video", title: "영상편집", desc: "본코스메틱 마케터 · Pixel Chroma 영상 마케팅", slides: ["27"] },
  { key: "goods", title: "굿즈 제작", desc: "캔뱃지 · 아크릴 스탠드 · 포토카드", slides: ["28"] },
  { key: "banner", title: "현수막 제작", desc: "행사 부스용 현수막 일러스트", slides: ["29"] },
];

const el = (id) => document.getElementById(id);

function replay(node) {
  node.classList.remove("is-swap");
  void node.offsetWidth;
  node.classList.add("is-swap");
}

function showWorks(container, item) {
  container.replaceChildren();
  for (const n of item.slides) {
    const img = document.createElement("img");
    img.src = `assets/slides/${n}.jpg`;
    img.alt = `${item.title} 작업물`;
    img.loading = "lazy";
    container.append(img);
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
}

buildTabs(el("project-tabs"), PROJECTS, (p) => {
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
  showWorks(el("project-works"), p);
});

buildTabs(el("activity-tabs"), ACTIVITIES, (a) => {
  el("activity-desc").textContent = a.desc;
  showWorks(el("activity-works"), a);
});
