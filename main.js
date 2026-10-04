const PROJECTS = {
  poltergeist: {
    title: "Poltergeist",
    tag: "2D Game Art Design · 기업협약",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.08.31 – 2026.09.30", 개발인원: "4명", 장르: "SRPG", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["06"],
  },
  mirrors: {
    title: "Mirrors",
    tag: "2D Game Art Design",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.05.01 – 2026.05.31", 개발인원: "4명", 장르: "오픈월드", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["08", "09"],
  },
  backtogether: {
    title: "Back Together",
    tag: "2D Game Art Design",
    role: "Character Animation",
    meta: { 제작기간: "2026.07.01 – 2026.07.31", 개발인원: "5명", 장르: "멀티 파티플레이, 플랫포머", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["11", "12"],
  },
  pixelchroma: {
    title: "Pixel Chroma",
    tag: "2D Game Art Design",
    role: "Character Animation & UI",
    meta: { 제작기간: "2026.06.26 – 2026.09.01", 개발인원: "4명", 장르: "멀티 파티플레이, Hide and Seek", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["14", "15", "16", "17"],
  },
  teacher: {
    title: "선생님 잠깐 시간 좀 될까요?",
    tag: "Development",
    role: "Toon Shader & Character Interaction",
    meta: { 제작기간: "2026.09.03 – 2026.09.10", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "Meta Quest 3s" },
    slides: ["20", "21", "22", "23"],
  },
  mastertools: {
    title: "Master Tools",
    tag: "Development",
    role: "Visual Game Maker",
    meta: { 제작기간: "2026.04.01 – 2026.04.30", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC, 모바일, VR" },
    slides: ["25"],
  },
  video: {
    title: "영상편집",
    tag: "About",
    role: "본코스메틱 마케터 · Pixel Chroma 영상 마케팅",
    meta: {},
    slides: ["27"],
  },
  goods: { title: "굿즈 제작", tag: "About", role: "대외활동", meta: {}, slides: ["28"] },
  banner: { title: "현수막 제작", tag: "About", role: "대외활동", meta: {}, slides: ["29"] },
};

const sheet = document.getElementById("sheet");
const el = (id) => document.getElementById(id);

function openProject(key) {
  const p = PROJECTS[key];
  if (!p) return;
  el("sheet-tag").textContent = p.tag;
  el("sheet-title").textContent = p.title;
  el("sheet-role").textContent = p.role;

  const meta = el("sheet-meta");
  meta.replaceChildren();
  meta.hidden = Object.keys(p.meta).length === 0;
  for (const [k, v] of Object.entries(p.meta)) {
    const item = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = k;
    dd.textContent = v;
    item.append(dt, dd);
    meta.append(item);
  }

  const body = el("sheet-body");
  body.replaceChildren();
  for (const n of p.slides) {
    const img = document.createElement("img");
    img.src = `assets/slides/${n}.jpg`;
    img.alt = `${p.title} 작업물`;
    img.loading = "lazy";
    body.append(img);
  }

  sheet.showModal();
  sheet.scrollTop = 0;
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-project]");
  if (trigger) openProject(trigger.dataset.project);
  if (e.target === sheet) sheet.close();
});
el("sheet-close").addEventListener("click", () => sheet.close());
