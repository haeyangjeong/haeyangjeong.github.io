// ver.2 — content comes from ../data.js (PROJECTS, ACTIVITIES, HOTSPOTS, COMPARES)
const el = (id) => document.getElementById(id);
const ASSETS = "../assets";

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function external(a, url) {
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
}

function button(label, url, extra = "") {
  const a = make("a", `btn ${extra}`.trim());
  a.append(make("span", "", label));
  external(a, url);
  return a;
}

const isVideo = (url) => /youtu\.?be/.test(url);

/* hero: full-screen pictures that fade into each other; the list itself lives in hero.js */
let heroIndex = 0;
let heroTimer = 0;

function showHero(index) {
  heroIndex = (index + HERO.length) % HERO.length;
  const slide = HERO[heroIndex];
  [...el("hero-slides").children].forEach((node, i) => node.classList.toggle("is-on", i === heroIndex));
  [...el("hero-dots").children].forEach((node, i) => node.classList.toggle("is-on", i === heroIndex));
  const lead = el("hero-lead");
  lead.textContent = slide.lead;
  lead.parentElement.hidden = !slide.lead;
  lead.parentElement.classList.remove("is-in");
  void lead.offsetWidth;
  lead.parentElement.classList.add("is-in");
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHero(heroIndex + 1), HERO_SECONDS * 1000);
}

HERO.forEach((slide, i) => {
  const picture = make("div", "hero-slide");
  picture.style.backgroundImage = `url("${ASSETS}/hero/${slide.img}")`;
  el("hero-slides").append(picture);
  const dot = make("button");
  dot.setAttribute("aria-label", `${i + 1}번째 화면`);
  dot.addEventListener("click", () => showHero(i));
  el("hero-dots").append(dot);
});
el("hero-prev").addEventListener("click", () => showHero(heroIndex - 1));
el("hero-next").addEventListener("click", () => showHero(heroIndex + 1));
showHero(0);

/* before/after comparison: the slider reveals the first picture over the second */
function buildCompare(name, title, labels = ["Before", "After"]) {
  const box = make("div", "compare");
  box.innerHTML = `<img alt="" loading="lazy"><img class="compare-before" alt="" loading="lazy"><span class="compare-tag is-before"></span><span class="compare-tag is-after"></span><span class="compare-handle"></span><input type="range" min="0" max="100" step="0.1" value="50">`;
  const [after, before] = box.querySelectorAll("img");
  after.src = `${ASSETS}/compare/${name}-after.jpg`;
  after.alt = `${title} ${labels[1]}`;
  before.src = `${ASSETS}/compare/${name}-before.jpg`;
  before.alt = `${title} ${labels[0]}`;
  box.querySelector(".is-before").textContent = labels[0];
  box.querySelector(".is-after").textContent = labels[1];
  const range = box.querySelector("input");
  range.setAttribute("aria-label", `${title} ${labels.join(" / ")} 비교`);
  range.addEventListener("input", () => box.style.setProperty("--pos", `${range.value}%`));
  return box;
}

function slideImage(n, title) {
  const img = make("img");
  img.src = `${ASSETS}/slides/${n}.jpg`;
  img.alt = `${title} 작업물`;
  img.loading = "lazy";
  return img;
}

function showWorks(container, item) {
  container.replaceChildren();
  for (const n of item.slides) {
    for (const c of COMPARES[Number(n)] || []) {
      const card = make("div", "work is-compare");
      const title = make("h4", "", `${c.title} `);
      title.append(make("small", "", c.sub || ""));
      card.append(title, buildCompare(c.name, [c.title, c.sub].filter(Boolean).join(" "), c.labels));
      container.append(card);
    }
    if (COMPARES[Number(n)]) continue;
    const work = make("div", "work");
    work.append(slideImage(n, item.title));
    for (const spot of HOTSPOTS[Number(n)] || []) {
      const a = make("a", "hot");
      const [x, y, w, h] = spot.box;
      a.style.cssText = `left:${x}%;top:${y}%;width:${w}%;height:${h}%`;
      a.setAttribute("aria-label", `${spot.label} 열기`);
      a.title = spot.label;
      external(a, spot.url);
      work.append(a);
    }
    container.append(work);
  }
}

/* project: card carousel on the dark section, details right below */
let projectIndex = 0;

function showProject(index, scroll) {
  projectIndex = (index + PROJECTS.length) % PROJECTS.length;
  const p = PROJECTS[projectIndex];
  [...el("cards").children].forEach((card, i) => card.classList.toggle("is-on", i === projectIndex));
  [...el("selector").children].forEach((thumb, i) => {
    thumb.classList.toggle("is-on", i === projectIndex);
    thumb.setAttribute("aria-selected", i === projectIndex);
  });
  const cards = el("cards");
  const card = cards.children[projectIndex];
  cards.scrollTo({ left: card.offsetLeft - (cards.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });

  el("d-img").src = `${ASSETS}/thumbs/${p.key}.jpg`;
  el("d-img").alt = `${p.title} 대표 이미지`;
  el("d-tag").textContent = p.tag;
  el("d-role").textContent = p.role;
  el("d-title").textContent = p.title;
  el("d-title").classList.toggle("is-long", p.title.length > 14);
  el("d-meta").replaceChildren(...Object.entries(p.meta).flatMap(([k, v]) => [make("dt", "", k), make("dd", "", v)]));
  el("d-links").replaceChildren(...p.links.map((l, i) => button(l.label, l.url, i ? "is-line" : "")));
  showWorks(el("d-works"), p);
  const body = document.querySelector(".detail-body");
  body.classList.remove("is-swap");
  void body.offsetWidth;
  body.classList.add("is-swap");
  if (scroll) el("detail").scrollIntoView();
}

PROJECTS.forEach((p, i) => {
  const card = make("button", "card");
  card.innerHTML = `<span class="card-frame"><img alt="" loading="lazy"><span class="card-text"><b></b><em></em></span><span class="card-more">상세보기</span></span>`;
  card.querySelector("img").src = `${ASSETS}/thumbs/${p.key}.jpg`;
  card.querySelector("b").textContent = p.title;
  card.querySelector("em").textContent = p.role;
  card.addEventListener("click", () => showProject(i, true));
  el("cards").append(card);

  const thumb = make("button", "thumb");
  thumb.setAttribute("role", "tab");
  thumb.title = p.title;
  thumb.innerHTML = `<img alt="">`;
  thumb.querySelector("img").src = `${ASSETS}/thumbs/${p.key}.jpg`;
  thumb.querySelector("img").alt = p.title;
  thumb.addEventListener("click", () => showProject(i, false));
  el("selector").append(thumb);
});
el("cards-prev").addEventListener("click", () => showProject(projectIndex - 1, false));
el("cards-next").addEventListener("click", () => showProject(projectIndex + 1, false));
showProject(0, false);

/* activity: featured picture on the left, list on the right */
const ACTIVITY_BADGE = { video: "마케팅", goods: "굿즈", banner: "일러스트" };

function showActivity(index) {
  const a = ACTIVITIES[index];
  [...el("a-list").children].forEach((row, i) => row.classList.toggle("is-on", i === index));
  el("a-img").src = `${ASSETS}/slides/${a.slides[0]}.jpg`;
  el("a-img").alt = `${a.title} 작업물`;
  el("a-badge").textContent = ACTIVITY_BADGE[a.key];
  el("a-title").textContent = a.title;
  el("a-desc").textContent = a.desc;
  const spots = HOTSPOTS[Number(a.slides[0])] || [];
  el("a-links").replaceChildren(...spots.map((s, i) => button(s.label, s.url, i ? "is-line" : "")));
}

ACTIVITIES.forEach((a, i) => {
  const row = make("li");
  const item = make("button");
  item.append(make("span", "badge", ACTIVITY_BADGE[a.key]), make("b", "", a.title), make("em", "", a.desc));
  item.addEventListener("click", () => showActivity(i));
  row.append(item);
  el("a-list").append(row);
});
showActivity(0);

/* media: every video link of the projects, then the store and channel links */
for (const p of PROJECTS) {
  const link = p.links.find((l) => isVideo(l.url));
  if (!link) continue;
  const card = make("a", "video");
  card.innerHTML = `<span class="frame is-wide"><img alt="" loading="lazy"><i class="play"></i><b></b></span>`;
  card.querySelector("img").src = `${ASSETS}/thumbs/${p.key}.jpg`;
  card.querySelector("b").textContent = `${p.title} — ${link.label}`;
  external(card, link.url);
  el("videos").append(card);
}

const MEDIA_ASSETS = [
  ...PROJECTS.flatMap((p) => p.links.filter((l) => l.url.includes("steampowered")).map((l) => ({ kind: "Steam", icon: "steam", title: `${p.title} 상점페이지`, url: l.url }))),
  ...HOTSPOTS[27].map((s) => ({ kind: "YouTube", icon: "youtube", title: s.label, url: s.url })),
  { kind: "GitHub", icon: "github", title: "Ryukon97", url: "https://github.com/Ryukon97" },
];
for (const item of MEDIA_ASSETS) {
  const card = make("a", "asset");
  const icon = make("img");
  icon.src = `${ASSETS}/icons/${item.icon}.png`;
  icon.alt = "";
  const top = make("span", "asset-top");
  top.append(icon);
  card.append(top, make("em", "", item.kind), make("b", "", item.title));
  external(card, item.url);
  el("assets").append(card);
}

/* pv: the round play button on the hero plays the project video */
const pv = el("pv");
const pvVideo = el("pv-video");

function stopPv() {
  pvVideo.pause();
  pvVideo.currentTime = 0;
  showHero(heroIndex);
}
el("hero-play").addEventListener("click", () => {
  pv.showModal();
  clearInterval(heroTimer);
  pvVideo.volume = 0.6;
  pvVideo.play().catch(() => {});
});
// Esc closes the popup too, so the video is stopped on the close event as well as on the button
pv.addEventListener("close", stopPv);
el("pv-close").addEventListener("click", () => {
  pv.close();
  stopPv();
});
pv.addEventListener("click", (e) => {
  if (e.target !== pv) return;
  pv.close();
  stopPv();
});

/* header: mark the section on screen */
const navLinks = [...el("gnb-nav").querySelectorAll("a")];
const spy = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.id === "detail" ? "project" : entry.target.id;
      navLinks.forEach((a) => a.classList.toggle("is-on", a.getAttribute("href") === `#${id}`));
    }
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main > section").forEach((section) => spy.observe(section));

/* sections fade up the first time they come on screen */
const reveal = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-in");
      reveal.unobserve(entry.target);
    }
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((node) => reveal.observe(node));

/* zoom: click a work picture to see it large; drag to move once it is larger than the screen */
const zoom = el("zoom");
const zoomImg = el("zoom-img");
const stage = el("zoom-stage");
let zoomFit = 0;

function setZoom(percent) {
  const value = Math.min(300, Math.max(50, percent));
  zoomImg.style.width = `${(zoomFit * value) / 100}px`;
  el("zoom-range").value = value;
  el("zoom-value").textContent = `${value}%`;
  stage.classList.toggle("is-pannable", value > 100);
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".work > img, #a-img");
  if (!img) return;
  zoomImg.src = img.src;
  zoomImg.alt = img.alt;
  zoom.showModal();
  const ratio = img.naturalWidth / img.naturalHeight || 16 / 9;
  zoomFit = Math.min(window.innerWidth * 0.92, window.innerHeight * 0.88 * ratio);
  setZoom(100);
});
el("zoom-range").addEventListener("input", (e) => setZoom(Number(e.target.value)));
el("zoom-in").addEventListener("click", () => setZoom(Number(el("zoom-range").value) + 20));
el("zoom-out").addEventListener("click", () => setZoom(Number(el("zoom-range").value) - 20));
el("zoom-close").addEventListener("click", () => zoom.close());

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
