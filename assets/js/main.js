/* ========= Mazali Interior Design ========= */

/* ---- Contact details: update these with the real ones ---- */
const CONFIG = {
  whatsapp: "972542050937",          // international format, no "+" or leading 0
  phone: "054-205-0937",
  email: "Mazali.intdesign@gmail.com",
  instagram: "mazali.design",        // handle only, without "@"
};

/* ---- Projects: images live in assets/img/projects/<slug>/NN.jpg (+ NN-sm.jpg) ---- */
const PROJECTS = [
  {
    slug: "triplex-modiin", count: 16, cover: 1, tag: "טריפלקס · מודיעין",
    title: "טריפלקס במודיעין",
    desc: "שלוש קומות, סיפור אחד: קיר לבנים בהיר, ספריית מתכת שחורה שמחלקת את החלל, סלון רך בגווני חול ותכלת, ושירותי אורחים בירוק עמוק שגונבים את ההצגה.",
  },
  {
    slug: "cabins", count: 13, cover: 1, tag: "צימרים · מושב",
    title: "מתחם צימרים במושב",
    desc: "עץ, אור חם וירוק מרווה. צימרים שמזמינים להאט – עם מטבחונים בגוון מרווה, פינות ישיבה רכות ומתחם דשא עם סוכות קש לשקיעה המושלמת.",
  },
  {
    slug: "ganei-tikva", count: 12, cover: 1, tag: "דירה · גני תקווה",
    title: "דירה בגני תקווה",
    desc: "בית בהיר ונקי עם עץ טבעי בכל פינה, קיר ירוק שעוטף את פינת הטלוויזיה, ספריית תצוגה מוארת, ומקלחת עם אריחים מצוירים שמוסיפים קריצה.",
  },
  {
    slug: "modiin-3", count: 13, cover: 1, tag: "3 חדרים · מודיעין",
    title: "3 חדרים במודיעין",
    desc: "מטבח בגווני תכלת-אפור עם ידיות זהב ומשטח עץ חם, אי ישיבה לכל המשפחה, וסלון רחב שנפתח לנוף. קלאסי, רך, ומלא חיים.",
  },
  {
    slug: "kiryat-ono", count: 12, cover: 1, tag: "3 חדרים · קריית אונו",
    title: "3 חדרים בקריית אונו",
    desc: "דירה משפחתית עם פופ של טורקיז: קיר סלון צבעוני, ספריית נישה בהתאמה אישית, וחדר ילדים עם פינת עבודה ומשולש כתום שעושה שמח.",
  },
];

const $ = (s, el = document) => el.querySelector(s);
const pad = n => String(n).padStart(2, "0");
const img = (slug, n, small) => `assets/img/projects/${slug}/${pad(n)}${small ? "-sm" : ""}.jpg`;

/* ---- Contact links ---- */
const links = {
  whatsapp: `https://wa.me/${CONFIG.whatsapp}`,
  phone: `tel:${CONFIG.phone.replace(/[^\d+]/g, "")}`,
  email: `mailto:${CONFIG.email}`,
  instagram: `https://instagram.com/${CONFIG.instagram}`,
};
document.querySelectorAll("[data-link]").forEach(a => {
  a.href = links[a.dataset.link];
  if (a.dataset.link === "whatsapp") { a.target = "_blank"; a.rel = "noopener"; }
});
document.querySelectorAll("[data-text]").forEach(el => {
  const k = el.dataset.text;
  el.textContent = k === "instagram" ? "@" + CONFIG.instagram : CONFIG[k];
});
$("#year").textContent = new Date().getFullYear();

/* ---- Header & mobile nav ---- */
const header = $(".header");
const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 30);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = $("#burger"), nav = $("#nav");
const setNav = open => {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "סגירת תפריט" : "פתיחת תפריט");
  document.body.classList.toggle("is-locked", open);
};
burger.addEventListener("click", () => setNav(!nav.classList.contains("is-open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setNav(false); });

/* ---- Reveal on scroll ---- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    io.unobserve(e.target);
  });
}, { rootMargin: "0px 0px -8% 0px" });
const observeReveal = root => root.querySelectorAll(".reveal:not(.is-in)").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});

/* ---- Project grid ---- */
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => `
  <button class="proj reveal" data-i="${i}" aria-label="${p.title} – לצפייה בגלריה">
    <img src="${img(p.slug, p.cover, i > 1)}" alt="" loading="lazy">
    <span class="proj__more" aria-hidden="true">↖</span>
    <span class="proj__info">
      <span class="proj__tag">${p.tag}</span>
      <span class="proj__title">${p.title}</span>
    </span>
  </button>`).join("");
observeReveal(document);

/* ---- Modal ---- */
const modal = $("#modal"), gallery = $("#gallery");
let current = null, lastFocus = null;

function openModal(i) {
  current = PROJECTS[i];
  lastFocus = document.activeElement;
  $("#modalTag").textContent = current.tag;
  $("#modalTitle").textContent = current.title;
  $("#modalDesc").textContent = current.desc;
  gallery.innerHTML = Array.from({ length: current.count }, (_, k) => `
    <button data-n="${k + 1}" aria-label="תמונה ${k + 1} מתוך ${current.count}">
      <img src="${img(current.slug, k + 1, true)}" alt="${current.title} – תמונה ${k + 1}" loading="lazy">
    </button>`).join("");
  modal.hidden = false;
  modal.querySelector(".modal__panel").scrollTop = 0;
  document.body.classList.add("is-locked");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  $(".modal__close").focus();
}
function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  setTimeout(() => { modal.hidden = true; }, 350);
  lastFocus && lastFocus.focus();
}
grid.addEventListener("click", e => {
  const b = e.target.closest(".proj");
  if (b) openModal(+b.dataset.i);
});
modal.addEventListener("click", e => {
  if (e.target === modal || e.target.closest("[data-close]")) closeModal();
  const b = e.target.closest(".gallery button");
  if (b) openLightbox(+b.dataset.n);
});

/* ---- Lightbox ---- */
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCount = $("#lbCount");
let idx = 1;
function showImage(n) {
  idx = (n - 1 + current.count) % current.count + 1;
  lbImg.src = img(current.slug, idx);
  lbImg.alt = `${current.title} – תמונה ${idx}`;
  lbCount.textContent = `${idx} / ${current.count}`;
  // preload neighbours
  [idx + 1, idx - 1].forEach(k => { new Image().src = img(current.slug, (k - 1 + current.count) % current.count + 1); });
}
function openLightbox(n) { showImage(n); lb.hidden = false; $(".lightbox__close").focus(); }
function closeLightbox() { lb.hidden = true; const b = gallery.querySelector(`[data-n="${idx}"]`); b && b.focus(); }

lb.addEventListener("click", e => {
  const act = e.target.closest("[data-lb]")?.dataset.lb;
  if (act === "close" || e.target === lb) closeLightbox();
  if (act === "next") showImage(idx + 1);
  if (act === "prev") showImage(idx - 1);
});
let touchX = null;
lb.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  // RTL: swiping right moves forward
  if (Math.abs(dx) > 45) showImage(idx + (dx > 0 ? 1 : -1));
  touchX = null;
});

addEventListener("keydown", e => {
  if (!lb.hidden) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(idx + 1);
    if (e.key === "ArrowRight") showImage(idx - 1);
  } else if (!modal.hidden && e.key === "Escape") closeModal();
  else if (nav.classList.contains("is-open") && e.key === "Escape") setNav(false);
});

/* ---- Contact form → WhatsApp ---- */
const form = $("#contactForm"), note = $("#formNote");
form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const name = d.get("name").trim(), phone = d.get("phone").trim();
  form.name.classList.toggle("is-invalid", !name);
  form.phone.classList.toggle("is-invalid", phone.replace(/\D/g, "").length < 9);
  if (form.querySelector(".is-invalid")) {
    note.textContent = "רק צריכה שם וטלפון תקין ואנחנו בדרך 🙂";
    return;
  }
  const text = [
    `היי Mazali! 👋`,
    `שמי ${name}, ואני מעוניין/ת לשמוע על עיצוב ${d.get("type")}.`,
    d.get("msg").trim() && `קצת פרטים: ${d.get("msg").trim()}`,
    `טלפון: ${phone}`,
  ].filter(Boolean).join("\n");
  window.open(`${links.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  note.textContent = "מעולה! פתחנו לך את וואטסאפ עם ההודעה מוכנה 💚";
  form.reset();
});
