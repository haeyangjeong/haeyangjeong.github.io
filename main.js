const PROJECTS = [
  {
    key: "poltergeist",
    cat: "art",
    title: "Poltergeist",
    tag: "2D Game Art · 기업협약",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.08.31 – 2026.09.30", 개발인원: "4명", 장르: "SRPG", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["06"],
  },
  {
    key: "mirrors",
    cat: "art",
    title: "Mirrors",
    tag: "2D Game Art",
    role: "Logo Design & Character Concepts",
    meta: { 제작기간: "2026.05.01 – 2026.05.31", 개발인원: "4명", 장르: "오픈월드", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["08", "09"],
  },
  {
    key: "backtogether",
    cat: "art",
    title: "Back Together",
    tag: "2D Game Art",
    role: "Character Animation",
    meta: { 제작기간: "2026.07.01 – 2026.07.31", 개발인원: "5명", 장르: "멀티 파티플레이, 플랫포머", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["11", "12"],
  },
  {
    key: "pixelchroma",
    cat: "art",
    title: "Pixel Chroma",
    tag: "2D Game Art",
    role: "Character Animation & UI",
    meta: { 제작기간: "2026.06.26 – 2026.09.01", 개발인원: "4명", 장르: "멀티 파티플레이, Hide and Seek", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC" },
    slides: ["14", "15", "16", "17"],
  },
  {
    key: "teacher",
    cat: "dev",
    title: "선생님 잠깐 시간 좀 될까요?",
    tag: "Development",
    role: "Toon Shader & Character Interaction",
    meta: { 제작기간: "2026.09.03 – 2026.09.10", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "Meta Quest 3s" },
    slides: ["20", "21", "22", "23"],
  },
  {
    key: "mastertools",
    cat: "dev",
    title: "Master Tools",
    tag: "Development",
    role: "Visual Game Maker",
    meta: { 제작기간: "2026.04.01 – 2026.04.30", 개발인원: "1명", 장르: "비주얼 노벨", "개발 도구": "Unity 6.3.2, Photoshop", 플랫폼: "PC, 모바일, VR" },
    slides: ["25"],
  },
];

const ACTIVITIES = {
  video: { title: "영상편집", tag: "Activity", slides: ["27"] },
  goods: { title: "굿즈 제작", tag: "Activity", slides: ["28"] },
  banner: { title: "현수막 제작", tag: "Activity", slides: ["29"] },
};

const el = (id) => document.getElementById(id);
const picker = el("picker");
const modal = el("modal");
let current = PROJECTS[0];

// project picker
for (const p of PROJECTS) {
  const b = document.createElement("button");
  b.className = "pick";
  b.dataset.key = p.key;
  b.dataset.cat = p.cat;
  b.setAttribute("role", "option");
  b.innerHTML = `<span class="pick-img"><img src="assets/thumbs/${p.key}.jpg" alt="" loading="lazy"></span><span class="pick-name"></span>`;
  b.querySelector(".pick-name").textContent = p.title;
  picker.append(b);
}

function select(key) {
  const p = PROJECTS.find((x) => x.key === key);
  if (!p) return;
  current = p;
  for (const b of picker.children) {
    const on = b.dataset.key === key;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on);
  }
  const art = el("stage-img").parentElement;
  el("stage-img").src = `assets/thumbs/${p.key}.jpg`;
  el("stage-img").alt = `${p.title} 대표 이미지`;
  art.classList.remove("is-swap");
  void art.offsetWidth;
  art.classList.add("is-swap");
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
}

function openModal(item) {
  el("modal-tag").textContent = item.tag;
  el("modal-title").textContent = item.title;
  const body = el("modal-body");
  body.replaceChildren();
  for (const n of item.slides) {
    const img = document.createElement("img");
    img.src = `assets/slides/${n}.jpg`;
    img.alt = `${item.title} 작업물`;
    body.append(img);
  }
  modal.showModal();
  modal.scrollTop = 0;
}

picker.addEventListener("click", (e) => {
  const b = e.target.closest(".pick");
  if (b) select(b.dataset.key);
});

document.querySelectorAll(".tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    const f = tab.dataset.filter;
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("is-active", t === tab);
      t.setAttribute("aria-selected", t === tab);
    });
    let first = null;
    for (const b of picker.children) {
      b.hidden = f !== "all" && b.dataset.cat !== f;
      if (!b.hidden && !first) first = b;
    }
    if (f !== "all" && current.cat !== f && first) select(first.dataset.key);
  })
);

el("stage-open").addEventListener("click", () => openModal(current));
el("stage-img").parentElement.addEventListener("click", () => openModal(current));
document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openModal(ACTIVITIES[b.dataset.open])));
el("modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

select(current.key);

// side section nav highlight
const links = [...document.querySelectorAll(".section-nav a")];
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
    }
  },
  { rootMargin: "-45% 0px -45% 0px" }
);
links.forEach((a) => observer.observe(document.querySelector(a.getAttribute("href"))));
